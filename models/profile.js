module.exports = (sequelize, DataTypes) => {
	var model = sequelize.define("Profile", {
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true
			},
			profile_type: {
				type: DataTypes.ENUM,
				values: ['doctor', 'patient']
			},
			first_name: {
				type: DataTypes.STRING,
				allowNull: false
			},
			last_name: {
				type: DataTypes.STRING,
				allowNull: false
			},
			createdAt: {
				type: DataTypes.DATE,
				allowNull: false,
				field: 'created_timestamp'
			}
		}, {
			tableName: 'profile',
			timestamps: true,
			updatedAt: false
		});
	return model;
};