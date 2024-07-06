const jwt= require('jsonwebtoken')
const customAPIError = require('../errors/custom-error')

const login = async(req,res)=>{
    const {username,password} = req.body
     
   if(!username || !password ){ 
    throw new customAPIError('please provide valid user name or password ',400)

}

const id = new Date().getDate()
const token = jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'30d'})

res.status(200).json({msg:'user is logged in',token})


}
const dashboard = async (req,res)=>{
     const  luckyNumber = Math.floor(Math.random()*100)
     
     res.status(200).json({msg:`hello john doe `, secret:`here is your luck number ${luckyNumber}`})
}


module.exports = {
     login,
     dashboard,
}