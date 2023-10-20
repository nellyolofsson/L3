import { DataService } from './dataService.js'
import { ViewHandler } from './viewHandler.js'

export class HistoricalController {
  constructor() {
    this.dataService = new DataService()
    this.viewHandler = new ViewHandler()
  }

  async historicalPrice(req, res, next) {
    try {
      const historicalDataArray = await this.dataService.fetchHistoricalDataArray()
      this.viewHandler.renderElectricityData(res, { historicalDataArray })
    } catch (error) {
      this.#handleErrors(next, error)
    }
  }

  #handleErrors (next, error) {
    next(error)
  }
}
