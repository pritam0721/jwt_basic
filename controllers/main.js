const jwt= require('jsonwebtoken')
const {BadRequest}= require('../errors')


const login = async(req,res)=>{
    const {username,password} = req.body
     
   if(!username || !password ){ 
    throw new BadRequest('please provide valid user name or password ')

    
}
const id = new Date().getDate()
const token = jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'30d'})

res.status(200).json({msg:'user is logged',token})
}


const dashboard = async (req,res)=>{
     const  luckyNumber = Math.floor(Math.random()*100)
     res.status(200).json({msg:`hello  ${req.user.username}`, secret:`here is your luck number ${luckyNumber}`})     
}


module.exports = {
     login,
     dashboard,
}