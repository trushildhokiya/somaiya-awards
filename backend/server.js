const express = require('express')
const dotenv = require('dotenv').config()
const authRoute = require('./routes/authRoutes')
const errorHandler = require('./middleware/errorHandler')
const cors = require('cors')
/**
 * creating express app 
 */

const app = express()

/**
 * Middleware
 */
app.use(cors())
app.use(express.json())
app.use('/auth', authRoute)
app.use(errorHandler)

/**
 * server listen
 */

const PORT =  process.env.PORT || 5000

app.listen(PORT , ()=>{
    console.log(`Server started running at port ${PORT}`);
})