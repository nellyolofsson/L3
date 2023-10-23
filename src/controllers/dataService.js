import { ElectricityPriceTodayView, ElectricityPriceHistoricalView } from 'swedish-electricity-prices-region/src/index.js';

export class DataService {
  async fetchElectricityPriceToday() {
    const electricityPriceTodayView = new ElectricityPriceTodayView();
    return electricityPriceTodayView.fetchTodayDataCalculation();
  }

  async fetchHourData() {
    const electricityPriceTodayView = new ElectricityPriceTodayView();
    return electricityPriceTodayView.fetchHourData();
  }

  async fetchHistoricalDataArray() {
    const electricityPriceHistoricalView = new ElectricityPriceHistoricalView();
    const startDate = this.calculateStartDate(); // Change method name
    const endDate = this.calculateEndDate(); // Change method name
    return this.fetchHistoricalDataInRange(startDate, endDate, electricityPriceHistoricalView); // Change method name
  }

  calculateStartDate() { // Remove #
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 30);
    return currentDate.toISOString().split('T')[0];
  }

  calculateEndDate() { // Remove #
    return new Date().toISOString().split('T')[0];
  }

  async fetchHistoricalDataInRange(startDate, endDate, view) {
    const historicalDataArray = []
    while (startDate <= endDate) {
      const historicalData = await view.fetchHistoricalData(startDate)
      historicalDataArray.push({ date: startDate, data: historicalData })
      startDate = this.incrementDate(startDate)
    }
    return historicalDataArray
  }

  incrementDate(date) { // Remove #
    const currentDate = new Date(date);
    currentDate.setDate(currentDate.getDate() + 1);
    return currentDate.toISOString().split('T')[0];
  }
}
