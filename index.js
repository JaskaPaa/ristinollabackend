
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

app.post('/api/position', (request, response) => {
    const body = request.body
  
    console.log("--------------------------------");  
    console.log(request.headers);
    console.log(body);
    let test = {body: JSON.stringify({
      foo: "bar"
})};
  
  
  
    console.log(test.body);
  
    if (!body.foo) {
        return response.status(400).json({ 
            error: 'content missing' 
        })
    }
  
    
    response.json(JSON.stringify({bar: "foo"}))
  })
  
const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
