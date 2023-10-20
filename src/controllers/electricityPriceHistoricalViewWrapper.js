import IElectricityPriceHistoricalView from './IElectricityPriceHistoricalView.js'

/**
 * Wrapper class for ElectricityPriceHistoricalView
 */
export class ElectricityPriceHistoricalViewWrapper {
  constructor () {
    this.actualView = new IElectricityPriceHistoricalView()
  }

  async fetchHistoricalData (date) {
    return this.actualView.fetchHistoricalData(date)
  }
}
