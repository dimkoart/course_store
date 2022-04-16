const {Router}= require('express')
const rout= Router()


rout.get('/',(req,res)=>{
    //res.sendFile(path.join(__dirname,'views','index.html'))
    res.render('index',
    {title:'index', isHome:true}
    )
})



module.exports=rout