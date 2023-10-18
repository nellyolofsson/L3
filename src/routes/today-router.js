import express from 'express'
import { TodayController } from '../controllers/today-controller.js'

export const router = express.Router()

const controller = new TodayController()

router.get('/today', (req, res, next) => controller.todayPrice(req, res, next))
