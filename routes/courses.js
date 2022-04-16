const {Router}= require('express')
const Corse = require('../models/course')
const Course=require('../models/course')
const rout= Router()


rout.get('/',async (req,res)=>{
    // res.sendFile(path.join(__dirname,'views','about.html'))
    const courses = await Course.getAll()
    res.render('courses',
    {title:'courses', iscourses:true,
    courses
}) 
 })

rout.get('/:id', async (req,res)=>{
    const course=await Course.getById(req.params.id)
    res.render('course',{
    layout:'empty',
    title:`course ${course.title}`,
    course
})
})
rout.post('/edit',async (req,res)=>{
await Course.update(req.body)
res.redirect('/courses')
})
rout.get('/:id/edit', async (req,res)=>{
    if(!req.query.allow){
        return res.redirect('/')
        
    }
    const course=await Corse.getById(req.params.id)
    res.render('course-edit',
    {
        title:`edit  ${course.title}`,
        course
    })
})

module.exports=rout