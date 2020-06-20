module.exports = {
	up: (query, DataTypes) => {
		return query.createTable('intake_form_1', {
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
			created_timestamp: {
				type: DataTypes.DATE,
				allowNull: false
			}
		});
	},

	down: (query, DataTypes) => {
		return query.dropTable('intake_form_1');
	}
};