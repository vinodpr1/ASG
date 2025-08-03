import { app } from "./bin";
import os from "os";


app.get("/", (req, res)=>{
    res.send("hello user, server is healthy");
})

app.get("/cpu", (req, res)=>{
    for(let i=0;i<1000000;i++){Math.random()}
    res.send(`CPU Extensive taskn ${os.hostname()}`);
 })

app.get("/host", (req, res)=>{
   res.send(`host is ${os.hostname()}`);
})