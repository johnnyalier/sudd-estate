import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

import userRouter from './routes/user.js'
import authRouter from './routes/auth.js'
import listingRouter from './routes/listing.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5556

app.use(express.json())
app.use(cookieParser())

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter)
app.use('/api/listing', listingRouter)

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});

mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to sudd-estate database')
    app.listen(PORT, () => {
        console.log(`Server listening at port ${PORT}`);
    })
})