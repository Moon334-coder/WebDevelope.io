require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
// slash'/' is important
app.get('/CA',(req,res)=>{
    res.send("Chand Ali Khalil")
})

app.get('/heading',(req,res)=>{
    res.send("<h1>This is heading h1</h1>");
})
app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})