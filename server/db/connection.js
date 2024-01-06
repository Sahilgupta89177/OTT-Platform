const mongoose =require("mongoose")
const DB ="mongodb+srv://sahil:Sahil123@auth.qllz4jk.mongodb.net/Authusers?retryWrites=true&w=majority"

mongoose.connect(DB,{
    useNewUrlParser : true ,
    useUnifiedTopology: true,
}).then(()=>console.log("Database Connect")).catch((error)=>{
    console.log(error)
})