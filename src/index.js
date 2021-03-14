const express = require('express')

const httpServer = express()
const port = 3000

httpServer.get('/', (req, res) => {
  res.send('Hello World!')
})

httpServer.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});