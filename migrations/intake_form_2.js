module.exports = {
	up: (query, DataTypes) => {
		return query.createTable('intake_form_2', {
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
			created_timestamp: {
				type: DataTypes.DATE,
				allowNull: false
			}
		});
	},

	down: (query, DataTypes) => {
		return query.dropTable('intake_form_2');
	}
};