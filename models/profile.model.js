const crypto = require('crypto');

module.exports = (sequelize, DataTypes) => {
	var model = sequelize.define("Profile", {
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true
			},
			profile_type: {
				type: DataTypes.ENUM,
				values: ['doctor', 'patient']
			},
			first_name: {
				type: DataTypes.STRING,
				allowNull: false
			},
			last_name: {
				type: DataTypes.STRING,
				allowNull: false
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true
			},
			password: {
				type: DataTypes.STRING
			},
			createdAt: {
				type: DataTypes.DATE,
				allowNull: false,
				field: 'created_timestamp'
			}
		}, {
			tableName: 'profile',
			timestamps: true,
			updatedAt: false
		});
	
	model.beforeCreate((user) => {
		const password = crypto.createHash('md5').update(user.password).digest('hex');
		user.password = password;
		return;
	});
	
	model.beforeUpdate((user) => {
		if (!user.changed('password')) {
			return;
		}
		const password = crypto.createHash('md5').update(user.password).digest('hex');
		user.password = password;
		return;
	});
	return model;
};