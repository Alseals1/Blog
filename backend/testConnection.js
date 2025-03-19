const { Sequelize } = require("sequelize");
require("dotenv").config();

// Create a new Sequelize instance with your database credentials
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT,
    dialectOptions: {
      connectTimeout: 60000, // Increase timeout in case of delays
    },
    logging: false, // Disable logging for cleaner output
  }
);

// Function to test database connection
const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connection has been established successfully.");
  } catch (error) {
    console.error("❌ Unable to connect to the database:", error);
  } finally {
    await sequelize.close();
  }
};

// Run the test
testConnection();
