const express = require("express")
const cors = require("cors");
const mongoose = require("mongoose")
require("dotenv").config()

const app = express();

const port = process.env.PORT || 5000;

const routes = require("./routes")

const dbConnect = ()=>{
    mongoose.connect(process.env.DB)
        .then(()=>{
            console.log("db connected")
        }).catch(()=>{
            console.log("can't connect to db")
        })
}

// middelwares //

app.use(express.json());
app.use(cors({
    origin:process.env.SITE,
    credentials:true
}))
app.use("/api",routes)


app.listen(port,()=>{
    console.log("server running on "+ port)
    dbConnect()
})
