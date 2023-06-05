const express = require('express')
const dotenv = require('dotenv').config()
const authRoute = require('./routes/authRoutes')
const formRoute = require('./routes/formRoutes')
const errorHandler = require('./middleware/errorHandler')
const cors = require('cors')
const db = require('./models')


/**
 * creating express app 
 */

const app = express()

/**
 * Middleware
 */
app.use(cors())
app.use(express.json())
app.use(express.static(`${__dirname}/data`));
app.use('/auth', authRoute)
app.use('/forms', formRoute )
app.use(errorHandler)

/**
 * server listen and database configuration
 */

db.sequelize.sync().then((req)=>{
    console.log("connected to mysql database ");
})


const PORT =  process.env.PORT || 5000

app.listen(PORT , ()=>{
    console.log(`Server started running at port ${PORT}`);
})