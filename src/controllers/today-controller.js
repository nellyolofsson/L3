import { DataService } from './dataService.js'
import { ViewHandler } from './viewHandler.js'

export class TodayController {
  constructor() {
    this.dataService = new DataService()
    this.viewHandler = new ViewHandler()
  }

  async todayPrice (req, res, next) {
    try {
      const electricityPriceToday = await this.dataService.fetchElectricityPriceToday()
      const hourData = await this.dataService.fetchHourData()
      this.viewHandler.renderElectrityToday(res, { electricityPriceToday, hourData })
    } catch (error) {
      this.#handleErrors(next, error)
    }
  }

  #handleErrors (next, error) {
    next(error)
  }
}
