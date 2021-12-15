import express, { response } from "express"
import * as fs from "fs"

const app = express()

const PORT = process.env.PORT;

const timestamp = Date.now()
const dataInfo = new Date(timestamp)
const date = dataInfo.getDate()
const month = dataInfo.getMonth()
const year = dataInfo.getFullYear()
const hours = dataInfo.getHours()
const minutes = dataInfo.getMinutes()
const seconds = dataInfo.getSeconds()
const dateTime = date + "-" + month + "-" + year + "-" + hours + "-" + minutes + "-" + seconds


app.get("/", (request, response)=>{
    response.send("hello node")
})

app.get("/createFile", (request, response)=>{
    fs.writeFile(`./newfolder/${dateTime}.txt`, timestamp.toString(), (err)=>{
        response.send("completed writing")
    })
})

app.get("/readFiles", (request, response)=>{
    fs.readdir("./newfolder", (err, data)=>{
        response.send(data)
    })
})

app.listen(PORT, ()=>{
    console.log("app connected at ", PORT)
})