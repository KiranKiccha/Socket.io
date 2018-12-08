const express = require('express');
const path = require('path');
const publicPath = path.join(__dirname , '../public')

const Port = process.env.PORT || 3000

const app = express();

app.use(express.static(publicPath));

app.listen(Port,()=>{
    console.log(`Process is up and running on ${Port}`);
    
})