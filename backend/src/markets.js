import express from 'express'
import { getMarkets } from './utils.js'
const marketsRoute = express.Router()
const markets = getMarkets()
marketsRoute.get('/markets', (req, res) => { 
    res.send(markets)
}) 


export { marketsRoute } 