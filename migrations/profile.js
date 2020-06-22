module.exports = {
	up: (query, DataTypes) => {
		return query.createTable('profile', {
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
			created_timestamp: {
				type: DataTypes.DATE,
				allowNull: false
			}
		});
	},

	down: (query, DataTypes) => {
		return query.dropTable('profile');
	}
};