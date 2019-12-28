import express from 'express';
import morgan from 'morgan'
import router from './routes/routes'
import tasks from './routes/tasks'
import path from 'path'
const app = express();

//seting 
app.set('port', process.env.PORT || 3000)
app.set('views ', path.join(__dirname,'views'))

//middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//routes
app.use(router)
app.use('/tasks',tasks)


export default app