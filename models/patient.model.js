module.exports = (sequelize, DataTypes) => {
	var Patient = sequelize.define("Patient", {
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
			createdAt: {
				type: DataTypes.DATE,
				allowNull: false,
				field: 'created_timestamp'
			}
		}, {
			tableName: 'patient',
			timestamps: true,
			updatedAt: false
		});
	return Patient;
};