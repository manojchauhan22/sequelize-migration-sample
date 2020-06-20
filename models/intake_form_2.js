module.exports = (sequelize, DataTypes) => {
	var Intake_Form_2 = sequelize.define("Intake_Form_2", {
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
			allergies: {
				type: DataTypes.ARRAY(DataTypes.STRING)
			},
			medications: {
				type: DataTypes.STRING, 
				get: function() {
					return JSON.parse(this.getDataValue('medications'));
				}, 
				set: function(val) {
					return this.setDataValue('medications', JSON.stringify(val));
				}
			},
			drugs: {
				type: DataTypes.STRING, 
				get: function() {
					return JSON.parse(this.getDataValue('drugs'));
				}, 
				set: function(val) {
					return this.setDataValue('drugs', JSON.stringify(val));
				}
			},
			createdAt: {
				type: DataTypes.DATE,
				allowNull: false,
				field: 'created_timestamp'
			}
		}, {
			tableName: 'intake_form_2',
			timestamps: true,
			updatedAt: false
		});
	return Intake_Form_2;
};