const jwt = require("jsonwebtoken");
const verifyToken = (req, res, next) =>{
   // const headers = req.headers['authorization'];
   // console.log(headers)
   // const token = headers.split(" ")[1];
   const cookies = req.headers.cookie;
   
   const token = cookies.split("=")[1];
   console.log(cookies)
   console.log(token)
   
    if(!token){
        return res.status(404).json({message:"No token found"})
    }
    jwt.verify(String(token), process.env.JWT_ACCESSSECRETKEY, (error,decoded)=>{
        if(error){
            return res.status(400).json({message:"invalid Token"})
        }
        req.id = decoded.id;
        console.log(req.id);
        
    })
    next();

}
module.exports = verifyToken