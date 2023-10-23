import { updateTable, toggleView } from './chart.js'

const regionData = document.querySelectorAll('[id^="regionData"]')
const toggleViewButton = document.getElementById('toggleView')
const region = document.querySelector('#region')
const canvas = document.getElementById('electricityPriceChart')
const hourData = JSON.parse(canvas.getAttribute('data-hour-data'))
const ctx = canvas.getContext('2d')
let chart

toggleViewButton.addEventListener('click', toggleView)

function hideAllRegionData() {
  regionData.forEach(element => {
    element.style.display = 'none'
  })
}

function destroyChart() {
  if (chart) {
    chart.destroy()
  }
}

function createElectricityPriceCharts(selectedRegionIndex) {
  destroyChart()
  const selectedRegion = hourData[selectedRegionIndex]
  const { labels, pricesSEK } = prepareChartData(selectedRegion)
  chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: `SEK per kWh - ${selectedRegion.region}`,
          data: pricesSEK,
          borderColor: 'green',
          backgroundColor: 'rgba(0, 0, 255, 0.1'
        }
      ]
    },
    options: {
      responsive: false,
      maintainAspectRatio: true,
      scales: {
        xAxis: {
          display: true,
          title: {
            display: true,
            text: 'Tid'
          }
        },
        yAxis: {
          display: true,
          title: {
            display: true,
            text: 'SEK per kWh'
          }
        }
      }
    }
  })
}

function prepareChartData(selectedRegion) {
  const labels = selectedRegion.prices.map(data => {
    const date = new Date(data.time_start)
    const hours = date.getHours().toString().padStart(2, '0')
    return hours + '.00'
  })

  const pricesSEK = selectedRegion.prices.map(data => data.SEK_per_kWh)
  return { labels, pricesSEK }
}

region.addEventListener('change', function () {
  const selectedRegion = region.value
  const regionIndex = parseInt(selectedRegion.replace('region', '')) - 1

  hideAllRegionData()

  const selectedRegionData = document.querySelector(`#regionData${regionIndex}`)
  if (selectedRegionData) {
    selectedRegionData.style.display = 'block'
    selectedRegionData.classList.add('region-data-table')
  }

  createElectricityPriceCharts(regionIndex)
  updateTable(regionIndex)
})

document.addEventListener('DOMContentLoaded', function () {
  createElectricityPriceCharts(0)
})
