module.exports = {
	up: (query, DataTypes) => {
		return query.createTable('patient', {
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true
			},
			profile_id: {
				type: DataTypes.INTEGER,
				allowNull: false
			},
			created_timestamp: {
				type: DataTypes.DATE,
				allowNull: false
			}
		});
	},

	down: (query, DataTypes) => {
		return query.dropTable('patient');
	}
};