import express from 'express'
import { HistoricalController } from '../controllers/historical-controller.js'

export const router = express.Router()

const controller = new HistoricalController()

router.get('/historical', (req, res, next) => controller.electricityHistorical(req, res, next))
