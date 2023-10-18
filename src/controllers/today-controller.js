import { ElectricityPriceTodayView } from 'swedish-electricity-prices-region/src/index.js'

/**
 *
 */
export class TodayController {
  /**
   *
   */
  async todayPrice (req, res, next) {
    try {
      const electricityPriceToday = await this.#fetchElectricityPriceToday()
      const hourData = await this.#fetchHourData()
      this.#renderElectricityData(res, 'electricity/today', { electricityPriceToday, hourData })
    } catch (error) {
      this.#handleErrors(next, error)
    }
  }

  async #fetchElectricityPriceToday () {
    const electricityPriceTodayView = new ElectricityPriceTodayView()
    return electricityPriceTodayView.fetchTodayDataCalculation()
  }

  async #fetchHourData () {
    const electricityPriceTodayView = new ElectricityPriceTodayView()
    return electricityPriceTodayView.fetchHourData()
  }

  #renderElectricityData(res, viewName, data) {
    res.render(viewName, data)
  }

  #handleErrors (next, error) {
    next(error)
  }
}
