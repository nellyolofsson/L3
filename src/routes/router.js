import express from 'express'
import { router as homeRouter } from './home-router.js'
import { router as todayRouter } from './today-router.js'
import { router as historicalRouter } from './historical-router.js'

export const router = express.Router()

router.use('/', homeRouter)
router.use('/electricity', [todayRouter, historicalRouter])

router.use('*', (req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
