import express from 'express'
import fs from 'fs'
import { marketsRoute } from './markets.js'
const router = express.Router()
router.use(marketsRoute)

export { router }