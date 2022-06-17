const express = require('express')
const app = express()
const port = 4200
let message = 'This temp'
console.log(message)

app.post('/', (req, res) => {
    console.log('Got body:', req.body);
    res.send('reveived: ' + req.body);
});



app.listen(port, () => {
  console.log(`listening on ${port}`)
})