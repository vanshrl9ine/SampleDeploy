const express = require('express')
require('dotenv').config()

const app = express()


app.get('/', (req, res) => {
  res.send('Hello Worldzz!')
})
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})