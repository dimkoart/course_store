const {Router}= require('express')
const rout= Router()
const Corse =require('../models/course')

rout.get('/',(req,res)=>{
    // res.sendFile(path.join(__dirname,'views','about.html'))
    res.render('add',
    {title:'add',isadd:true})
 })

rout.post('/',async (req,res)=>{

const course = new Corse(req.body.title , req.body.price , req.body.img)
await course.save()
res.redirect('/courses')
})

module.exports=rout