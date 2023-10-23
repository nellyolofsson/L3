export class ViewHandler {
  renderElectrityToday(res, data) {
    res.render('electricity/today', data)
  }

  renderElectricityData(res, data) {
    res.render('electricity/historical', data)
  }
}
