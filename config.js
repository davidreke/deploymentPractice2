const dotenv =require('dotenv')
dotenv.config()

export const BACKEND_URL= process.env.NODE_ENV === 'development'?"http://localhost:5000": "https://reke-exercise-tracker.herokuapp.com" 