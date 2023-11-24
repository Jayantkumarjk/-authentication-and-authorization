require("./src/config/db");

const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 5000;


const router = require("./Routes/userRoute")
app.use("/api",router)







app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})


