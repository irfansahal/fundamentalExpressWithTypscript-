
import express from 'express';

// const express = require('express');


const app = express();

app.get("/" , (req, res)=>{
   res.send({
      name : "Jahidul Islam",
      age : 23,
    //   experience : better
   })
})

app.listen(3000, ()=>{
    console.log("the server is running on port 3000");    
})

// module.exports = app
// export app