if (process.env.NODE_ENV !== 'production') require('dotenv').config()

const config = {
  MONGO_DB_URL: process.env.MONGO_DB_URL,
  SECRET_KEY: process.env.SECRET_KEY,
  AllowedUrls: process.env.AllowedUrls,
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT
}

module.exports = config
