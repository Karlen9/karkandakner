import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { router } from './src/router.js'
const port = 5000;

const app = express();

app.use(cors())
app.use(bodyParser.json())
app.use('/', router)

app.listen(port, () => console.log(`Running on port ${port}`)); 


export {} 