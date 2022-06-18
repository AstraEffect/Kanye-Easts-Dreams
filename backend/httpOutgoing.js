const express = require('express')
const app = express()
const port = 6969
let message = 'This temp'
console.log(message)

app.get('/', (req, res) => {
    res.send(`${message}`)
})
  
app.listen(port, () => {
  console.log(`listening on ${port}`)
})