//npm init
//npm install express
//npm i dotenv amd then create .env file 

require('dotenv').config()

console.log("Arsalan's Code")

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/login',(req,res)=>{
    res.send('<h1>Please Login Here</h1>')
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})