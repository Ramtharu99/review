import express from 'express'
import userRouter from './routes/user.route'
import restroRouter from './routes/restro.routes'
import cors from 'cors'

import { genericErrorHandler } from './middleware/error.middleware'
const PORT = 3001
const app = express()

app.use(express.json())

app.use(cors({
  origin: 'http//localhost:30001',
  optionsSuccessStatus:200
}))
app.use('/restros', restroRouter)
app.use('/users', userRouter)
app.use('/review', userRouter)
app.use('/contact', userRouter)


app.listen(PORT, () => {
    
  console.log('Running on port', PORT);
})

app.use(genericErrorHandler)

export default app;