module.exports = {
	up: (query, DataTypes) => {
		return query.createTable('assessment', {
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
			external_id: {
				type: DataTypes.INTEGER,
				allowNull: false
			},
			assessment_name: {
				type: DataTypes.STRING
			},
			slide_name: {
				type: DataTypes.STRING
			},
			card_value: {
				type: DataTypes.STRING
			},
			commerce_tools_id: {
				type: DataTypes.INTEGER,
				allowNull: false
			},
			alternative_experience: {
				type: DataTypes.STRING
			},
			some_experience: {
				type: DataTypes.STRING
			},
			created_timestamp: {
				type: DataTypes.DATE,
				allowNull: false
			},
			last_updated_timestamp: {
				type: DataTypes.DATE,
				allowNull: false
			},
		});
	},

	down: (query, DataTypes) => {
		return query.dropTable('assessment');
	}
};