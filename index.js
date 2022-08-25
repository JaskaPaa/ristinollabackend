import express from "express";

// Define "require"
import { createRequire } from "module";
const require = createRequire(import.meta.url);

//const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())

app.use(express.json())

import * as AI from "./AI.js";

app.get('/', (req, res) => {
    res.send('{"foo": "bar"}')
})

app.get('/api/position/:pos', (request, response) => {
    const pos = request.params.pos
    console.log('++++++++++++++++++++++++++++++++++++++');
    console.log(typeof request)
    console.log(Math.sqrt(pos.length))
      
    if (pos) {
        response.json({move: pos})
    } else {
        response.status(404).end()
    }

})

function strToSquares(str) {

}

app.post('/api/position', (request, response) => {
    const body = request.body
  
    console.log("--------------------------------");  
    //console.log(request.headers);
    //console.log(body);
  
    if (!body.squares) {
        return response.status(400).json({ 
            error: 'squares missing' 
        })
    }
    console.log(typeof body.squares);
    console.log(body.squares[7][6]);

    let move = AI.playMove(body.squares);
    //let sqs = JSON.parse(body.squares);
    console.log(move);

    
    response.json(JSON.stringify({bar: "foo"}))
  })
  
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
