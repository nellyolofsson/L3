import { ElectricityPriceHistoricalView } from 'swedish-electricity-prices-region/src/index.js'

export class HistoricalController {
  async electricityHistorical(req, res, next) {
    try {
      const historicalDataArray = await this.#fetchHistoricalDataArray()
      this.#renderElectricityData(res, 'electricity/historical', { historicalDataArray })
    } catch (error) {
      this.#handleErrors(next, error)
    }
  }

  #renderElectricityData (res, viewName, data) {
    res.render(viewName, data)
  }

  async #fetchHistoricalDataArray () {
    const electricityPriceTodayView = new ElectricityPriceHistoricalView()
    const startDate = this.#calculateStartDate()
    const endDate = this.#calculateEndDate()
    return this.#fetchHistoricalDataInRange(startDate, endDate, electricityPriceTodayView)
  }

  #calculateStartDate () {
    const currentDate = new Date()
    currentDate.setDate(currentDate.getDate() - 30)
    return currentDate.toISOString().split('T')[0]
  }

  #calculateEndDate () {
    return new Date().toISOString().split('T')[0]
  }

  async #fetchHistoricalDataInRange (startDate, endDate, view) {
    const historicalDataArray = []
    while (startDate <= endDate) {
      const historicalData = await view.fetchHistoricalData(startDate)
      historicalDataArray.push({ date: startDate, data: historicalData })
      startDate = this.#incrementDate(startDate)
    }
    return historicalDataArray
  }

  #incrementDate (date) {
    const currentDate = new Date(date)
    currentDate.setDate(currentDate.getDate() + 1)
    return currentDate.toISOString().split('T')[0]
  }

  #handleErrors (next, error) {
    next(error)
  }
}
