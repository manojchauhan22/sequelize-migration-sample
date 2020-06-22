module.exports = (sequelize, DataTypes) => {
	var Intake_Form_1 = sequelize.define("Intake_Form_1", {
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true
			},
			doctor_id: {
				type: DataTypes.INTEGER,
				allowNull: false
			},
			link_to_signed_pdf: {
				type: DataTypes.STRING
			},
			patient_id: {
				type: DataTypes.INTEGER,
				allowNull: false
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false
			},
			address: {
				type: DataTypes.STRING,
				allowNull: false
			},
			city: {
				type: DataTypes.STRING,
				allowNull: false
			},
			state: {
				type: DataTypes.STRING,
				allowNull: false
			},
			zip: {
				type: DataTypes.INTEGER,
				allowNull: false
			},
			home_phone: {
				type: DataTypes.INTEGER
			},
			createdAt: {
				type: DataTypes.DATE,
				allowNull: false,
				field: 'created_timestamp'
			}
		}, {
			tableName: 'intake_form_1',
			timestamps: true,
			updatedAt: false
		});
	return Intake_Form_1;
};