module.exports = {
	up: (query, DataTypes) => {
		return query.createTable('appointment', {
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true
			},
			patient_id: {
				type: DataTypes.INTEGER,
				allowNull: false
			},
			doctor_id: {
				type: DataTypes.INTEGER,
				allowNull: false
			},
			appointment_type: {
				type: DataTypes.STRING
			},
			appointment_date: {
				type: DataTypes.DATE,
				allowNull: false
			},
			appointment_time: {
				type: DataTypes.STRING,
				allowNull: false
			},
			appointment_duration_in_minutes: {
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
		return query.dropTable('appointment');
	}
};