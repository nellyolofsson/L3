import { ElectricityPriceHistoricalView } from 'swedish-electricity-prices-region/src/index.js'

const IElectricityPriceHistoricalView = {
  fetchHistoricalData: async function(date) {
    const electricityPriceHistoricalView = new ElectricityPriceHistoricalView()
    return electricityPriceHistoricalView.fetchHistoricalData(date)
  }
}
export default IElectricityPriceHistoricalView
