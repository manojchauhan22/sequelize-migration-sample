module.exports = (sequelize, DataTypes) => {
	var Payment = sequelize.define("Payment", {
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
			createdAt: {
				type: DataTypes.DATE,
				allowNull: false,
				field: 'created_timestamp'
			}
		}, {
			tableName: 'payment',
			timestamps: true,
			updatedAt: false
		});
	return Payment;
};