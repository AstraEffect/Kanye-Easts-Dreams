const express = require('express')
const app = express()
const port = 4200
let message = 'This temp'

console.log(message)
app.listen(port, () => {
  console.log(`listening on ${port}`)
})

app.post('/', (req, res) => {
    console.log('Got body:', req.ip);
    if (req.body = 'ping') {
        res.send('pong')
    }
});
