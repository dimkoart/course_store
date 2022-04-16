const express= require('express')
const path = require('path')
const exphbs=require('express-handlebars')
const homeRoutes = require('./routes/home')
const cardRoutes = require('./routes/card')
const addRoutes = require('./routes/add')
const coursesRoutes = require('./routes/courses')

const app = express()
const hbs = exphbs.create({
    defaultLayout:'main',
    extname:'hbs'
})

app.engine('hbs',hbs.engine)
app.set('view engine','hbs')
app.set('views','views')//вторым параметром указали нашу папку views что бы не создавать новую 
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use('/',homeRoutes)
app.use('/add',addRoutes)
app.use('/courses',coursesRoutes)
app.use('/card',cardRoutes)
 
const port= process.env.port || 3000
app.listen(port, ()=>{console.log(`serv is runing on port ${port}`)})