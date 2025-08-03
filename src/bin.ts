import express from "express";
import cluster from "cluster";
import os from "os";

export const app = express();
if(cluster.isPrimary){
    for(let i=0;i<os.cpus().length; i++){
        cluster.fork();
    }
}else{
    app.listen(3000);
}
