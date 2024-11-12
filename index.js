import express from 'express'
import logger from './middlewares/logger.js'
import api from './api/index.js'
import CONFIG from './config.json' with {type:"json"}
import mongoose from 'mongoose'

const app = express()

mongoose
    .connect(CONFIG.mongo_url)
    .then(() => {
        app.use(express.json())
        app.use(logger)

        app.use('/api', api())

        app.listen(CONFIG.port, () => {
            console.log(`Server listening on port ${CONFIG.port}`);
        });
    })