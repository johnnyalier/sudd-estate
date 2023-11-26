import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import userRouter from './routes/user.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5556

app.use('/api/user', userRouter);

mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to sudd-estate database')
    app.listen(PORT, () => {
        console.log(`Server listening at port ${PORT}`);
    })
})