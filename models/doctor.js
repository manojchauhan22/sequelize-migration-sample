module.exports = (sequelize, DataTypes) => {
	var Doctor = sequelize.define("Doctor", {
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
			tableName: 'doctor',
			timestamps: true,
			updatedAt: false
		});
	return Doctor;
};