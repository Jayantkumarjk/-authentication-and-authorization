require("dotenv").config();

const mongoose = require("mongoose");

const {MONGODB_URI} = process.env;


mongoose.connect(MONGODB_URI,{
    useNewUrlParser:true,
    //useCreateIndex:true,
   // useUnifiedTopology:true,
   // useFindAndModify:false
}).then(()=>{
    console.log(`connection successfull`);
}).catch((err)=>{
    console.log("no connection");
})

/*

const connectToDB = async() => {
    try{
        await mongoose.connect(MONGODB_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        console.log("DB Connected");
    }catch(error){
        console.log(error)
    }
}
connectToDB();
*/