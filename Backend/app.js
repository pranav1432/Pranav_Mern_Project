
const express=require("express");
const cors=require("cors");
const {userRouter} =require("./Routes/userRoute");
const { ConnectDataBase } = require("./Models/db");

const app=express();

app.use(cors());
app.use(express.json());

app.use("/api",userRouter)

const PORT=3001;

ConnectDataBase().then(()=>{

    app.listen(PORT,()=>{

        console.log(`server is listening at ${PORT}`);
       
       })

})




