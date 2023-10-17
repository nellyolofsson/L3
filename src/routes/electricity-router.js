import express from 'express'
import { ElectricityController } from '../controllers/electricity-controller.js'

export const router = express.Router()

const controller = new ElectricityController()

router.get('/index', (req, res, next) => controller.index(req, res, next))
router.get('/historical', (req, res, next) => controller.electricityHistorical(req, res, next))