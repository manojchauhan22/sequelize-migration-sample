module.exports = (sequelize, DataTypes) => {
	var Assessment = sequelize.define("Assessment", {
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
			createdAt: {
				type: DataTypes.DATE,
				allowNull: false,
				field: 'created_timestamp'
			},
			updatedAt: {
				type: DataTypes.DATE,
				allowNull: false,
				field: 'last_updated_timestamp'
			}
		}, {
			tableName: 'assessment',
			timestamps: true
		});
	return Assessment;
};