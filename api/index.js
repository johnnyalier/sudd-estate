import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5556


mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to sudd-estate database')
    app.listen(PORT, () => {
        console.log(`Server listening at port ${PORT}`);
    })
})