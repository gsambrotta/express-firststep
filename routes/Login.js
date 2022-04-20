import express from 'express'
const router = express.Router()

router.get('/login', (req, res) => {
  res.send('You have to login here')
})

router.post('/login', (req, res) => {
  console.log({ req: req.body })

  res.send('You have to login here')
})

export default router
