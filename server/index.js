require("./src/config/db");

const express = require("express");
const app = express();
require("dotenv").config();
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 5000;
//const cors = require('cors')
app.use(cookieParser());
app.use(express.json());
const router = require("./Routes/userRoute");
app.use("/api",router)
//app.use(cors({origin:"http://localhost:5173", credentials:true}))






app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})



