const config = {
  port: process.env.PORT,
  db: {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    dialect: process.env.DB_DIALECT || 'postgres',
    pool: {
			max: 5,
			min: 0,
			idle: 10000
    }
  }
};

module.exports = config;
