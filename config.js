// Import all env vars from .env file
require('dotenv').config()

export const MONGO_DRIVER = process.env.MONGO_DRIVER
export const REACT_APP_VERSION = process.env.REACT_APP_VERSION
export const EACT_APP_GOOGLE_CLIENT_ID = process.env.EACT_APP_GOOGLE_CLIENT_ID
export const MY_SECRET_KEY = process.env.MY_SECRET_KEY

console.log("Secret Keys") // => Hello