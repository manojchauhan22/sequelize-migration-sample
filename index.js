const Sequelize = require('sequelize');
const Umzug = require('umzug');
const getModels = require('./models');
const express = require('express');
const BodyParser = require('body-parser');
const config = require('./config');
const routes = require('./routes');

const sequelize = new Sequelize(config.db);
// migration
const migrationArgs = process.argv[2];

if (migrationArgs) {
	const umzug = new Umzug({
		storage: 'sequelize',
		storageOptions: {
			sequelize: sequelize,
		},
		migrations: {
			params: [
				sequelize.getQueryInterface(), // queryInterface
				sequelize.constructor, // DataTypes
				() => {
					throw new Error('Migration tried to use old style "done" callback. Please upgrade to "umzug" and return a promise instead.');
				}
			],
			path: './migrations',
			pattern: /\.js$/
		},
	
		logging: function() {
			console.log.apply(null, arguments);
		},
	});
	let migrationCommand;
	
	console.log(`${ migrationArgs.toUpperCase() } BEGIN`);
	
	switch(migrationArgs) {
		case 'up':
			migrationCommand = umzug.up();
			break;
	
		case 'down':
			migrationCommand = umzug.down({ to: 0 });
			break;
	}
	
	migrationCommand
		.then(() => {
			const successMsg = `${ migrationArgs.toUpperCase() } DONE`;
			console.log(successMsg);
			console.log("=".repeat(successMsg.length));
		})
		.catch(err => {
			const errorMsg = `${ migrationArgs.toUpperCase() } ERROR`;
			console.log(errorMsg);
			console.log("=".repeat(errorMsg.length));
			console.log(err);
			console.log("=".repeat(errorMsg.length));
		})
		.then(() => Promise.resolve())
		.then(() => process.exit(0));
}

// server
const app = express();

// middleware
app.use(BodyParser.json());

// routes
app.use('/api',  routes);

app.listen(config.port, function() {
	console.log(`Server running on port ${ config.port }`);
});