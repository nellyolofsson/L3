import { ElectricityPriceHistoricalView, ElectricityPriceTodayView } from 'swedish-electricity-prices-region/src/index.js';

export class ElectricityController {

    async index(req, res, next) {
        try {
             const electricityPriceTodayView = new ElectricityPriceTodayView()
        const electricityPriceToday = await electricityPriceTodayView.fetchTodayDataCalculation()
        const hourData = await electricityPriceTodayView.fetchHourData()
        res.render('electricity/index', { electricityPriceToday, hourData }) 
        } catch (error) {
            next(error)
        }  
    }


    async electricityHistorical (req, res, next) {
        try {
        const electricityPriceTodayView = new ElectricityPriceHistoricalView()
        const historicalData = await electricityPriceTodayView.fetchHistoricalData()
        const historicalDataHour = await electricityPriceTodayView.fetchHistoricalHourPrice()

        res.render('electricity/historical', { historicalData, historicalDataHour }) 

        }
        catch (error) {
            next(error)
        }                  

    }
}