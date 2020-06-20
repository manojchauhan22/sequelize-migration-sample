const config = {
  port: process.env.PORT || 3000,
  db: {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    username: process.env.DB_USER || 'oro_admin',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_NAME || 'patient',
    dialect: process.env.DB_DIALECT || 'postgres',
    pool: {
			max: 5,
			min: 0,
			idle: 10000
    }
  }
};

module.exports = config;
