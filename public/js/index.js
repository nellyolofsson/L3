const canvas = document.getElementById('electricityPriceChart')
const hourData = JSON.parse(canvas.getAttribute('data-hour-data'))
const ctx = canvas.getContext('2d')
const tableBody = document.getElementById('tableBody')
let chart

function createAveragePriceChart (selectedRegionIndex) {
  destroyChart()
  const { dates, regionData } = getDatesAndRegionData(selectedRegionIndex)
  const borderColor = 'rgba(239, 239, 240,1)'

  const pointBackgroundColor = regionData.map(price => (price > 5 ? 'red' : 'green'))
  const pointRadius = regionData.map(price => (price > 10 ? 6 : 3))
  
  chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: dates,
      datasets: [
        {
          label: `Snitt SEK per kWh - Region ${selectedRegionIndex + 1}`,
          data: regionData,
          borderColor: borderColor,
          pointBackgroundColor: pointBackgroundColor,
          pointRadius: pointRadius
        }
      ]
    },
    options: {
      responsive: false,
      maintainAspectRatio: true,
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'SEK per kWh'
          }
        }
      }
    }
  })
}

function destroyChart () {
  if (chart) {
    chart.destroy()
  }
}

function getDatesAndRegionData (selectedRegionIndex) {
  const dates = hourData.map((entry) => entry.date)
  const regionData = hourData.map((entry) => entry.data[selectedRegionIndex].averagePrice)
  return { dates, regionData }
}

function updateTable(selectedRegionIndex) {
  tableBody.innerHTML = ''

  if (hourData && hourData.length > 0) {
    const last31DaysData = hourData.slice(-30)

    last31DaysData.forEach((entry) => {
      const date = entry.date
      const averagePrice = entry.data[selectedRegionIndex].averagePrice
      const row = document.createElement('tr')
      

      appendCell(row, date)
      appendCell(row, averagePrice)

      tableBody.appendChild(row)
    })
  }
}

/**
 * Create and append a table cell with text content to a row.
 */
function appendCell (row, content) {
  const cell = document.createElement('td')
  cell.textContent = content
  if (!isNaN(content)) {
    const numericContent = parseFloat(content)
    console.log(numericContent)

    if (numericContent > 5) {
      // Price increase (red)
      cell.style.color = 'red';
    } else if (numericContent < 5) {
      // Values less than 5 (green)
      cell.style.color = 'green';
    }
  }  
  row.appendChild(cell)
  }

const regionSelect = document.getElementById('regiondata')
regionSelect.addEventListener('change', function () {
  const selectedRegionValue = regionSelect.value
  const selectedRegionIndex = parseInt(selectedRegionValue.replace('region', '')) - 1
  createAveragePriceChart(selectedRegionIndex)
  updateTable(selectedRegionIndex)
})

document.addEventListener('DOMContentLoaded', function () {
  createAveragePriceChart(0)
  updateTable(0)
})
