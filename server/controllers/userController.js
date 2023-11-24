const User = require("../Models/userModel")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")

const signup = async(req,res) => {
    try{
        let {name,email,password} = req.body;
        
        if(!(name && email && password )){
            throw Error("Empty input field! ");

        }else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)){
            throw Error("Invalid email entered");
        }
        else{
            console.log(name,email,password)
            const salt = await bcryptjs.genSalt(10);
            const hashedPassword = await bcryptjs.hash(password,salt);
            
            console.log(hashedPassword)
            const user = new User({name,email,password:hashedPassword})
            const saveduser = await user.save();
            res.send(saveduser)
        }
    }catch(error){
        console.log(error)
    }
}

const login = async(req,res) =>{
    if(!req.body.email || !req.body.password){
        return res.status(400).json("All field is mandatory")
    }
    
    try{
        const user = await User.findOne({email:req.body.email});
        if(!user){
            res.status(404).json("no user found")
        }
        const matchPassword = await bcryptjs.compare(req.body.password,user.password)
        if(!matchPassword){
            res.status(400).json("Email and password is not correct");
        }
      
        const token = await jwt.sign({id:user._id}, process.env.JWT_ACCESSSECRETKEY, {expiresIn: '35s'}) 
        //const refreshToken = await jwt.sign(payload, process.env.JWT_REFRESHSECRETKEY, {expiresIn: '1d'}) 
      
        res.cookie(String(user._id),token,{
            path:"/",
            expires: new Date(Date.now() + 1000*30),
            httpOnly:true,
            sameSite: "lax"
        })
        return res.status(200).json({message:"Login successful", user:user,token})
       

    }catch(error){
        console.log(error);
        res.status(400).send("Something went wrong")
    }
}


module.exports = {signup, login}