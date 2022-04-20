import express from 'express'
import 'dotenv/config'
const app = express()

const PORT = process.env.PORT || 4001

import loginRouter from './routes/Login.js'

app.get('/', (req, res) => {
  res.send('Hello, i am the homepage')
})

// ADD ROUTERS
app.use('/', loginRouter)

app.listen(PORT, () => {
  console.log(`server is running at: http:localhost${PORT}`)
})
