import express from "express"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config();
// this loads our env file into app 

const app  = express();
//this create server

app.use(cors()); // this .use is middleware and cors help connecting b/w 2 address comminition
app.use(express.json());


app.get("/", (req,res) =>{
    res.send("api running!!")
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () =>{
    console.log(`sever is running on port : ${PORT}`)
})