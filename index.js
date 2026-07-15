import express from "express"
import dotenv from "dotenv"
dotenv.config()

const app=express()

app.get("/",(req,res)=>{
 return res.status(200).json({status:200,message:"hello this is aws level 1"})
})
app.get('/health',(rrq,res)=>{
 return res.status(200).json({message:"everything is working correctly"})
})

const port=process.env.PORT || 5000
app.listen(port,()=>{
  console.log(`server is listening on port ${port}`)
})