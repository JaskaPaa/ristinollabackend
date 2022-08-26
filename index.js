

const AI = require('./AI.js');

const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())

app.use(express.json())

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

/* Mitkä pitää olla palvelimella, mitkä client'illa ?? */

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
    
    console.log(body.nextMove);

    let move = AI.playMove(body.squares, body.nextMove);
    //let sqs = JSON.parse(body.squares);
    console.log(move);

    
    response.json(JSON.stringify(move))
})
  
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

