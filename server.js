import express from 'express';
import "dotenv/config.js"
import "./config/database.js";
import cors from 'cors'
import morgan from 'morgan'
import indexRouter from './routers/index.js'
import error_400_handler from './middlewares/error_400_handler.js';
import not_fount_handler from './middlewares/not_fount_handler.js';
import error_handler from './middlewares/error_handler.js';

const server = express()

const PORT= process.env.PORT || 8080

const ready = () => console.log(`server ready in port: ${PORT}`);

server.use(express.json())  

server.use(express.urlencoded({ extended: true }))

server.use(cors())

 server.use(morgan('dev'))

 server.use('/api', indexRouter)




 server.use(error_400_handler)
 
 server.use(not_fount_handler)
 
 server.use(error_handler)


 server.listen(PORT, ready);
