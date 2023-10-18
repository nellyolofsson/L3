const region = document.querySelector('#region')
const regionData = document.querySelectorAll('[id^="regionData"]')
const canvas = document.getElementById('electricityPriceChart')
const hourData = JSON.parse(canvas.getAttribute('data-hour-data'))
const tableBody = document.getElementById('tableBody')
const ctx = canvas.getContext('2d')
const chartContainer = document.getElementById('chartContainer')
const toggleViewButton = document.getElementById('toggleView')
const tableContainer = document.getElementById('tableContainer')
let chart

function toggleView () {
    if (tableContainer.style.display === 'none') {
      tableContainer.style.display = 'block'
      toggleViewButton.textContent = 'Tabell'
    } else {
      tableContainer.style.display = 'none'
      toggleViewButton.textContent = 'Tabell'
    }
}

toggleViewButton.addEventListener('click', toggleView)

  
  region.addEventListener('change', function () {

    const selectedRegion = region.value
    const regionIndex = parseInt(selectedRegion.replace("region", "")) - 1 
  
    regionData.forEach(element => {
      element.style.display = 'none'
    })
    
    const selectedRegionData = document.querySelector(`#regionData${regionIndex}`)
    if (selectedRegionData) {
      selectedRegionData.style.display = 'block'
    }
  
    updateChart(selectedRegion)
    updateTable(selectedRegion)
  
  
  })
function createElectricityPriceCharts() {
    /*if (chart) {
      chart.destroy()
    }*/
    const selectedRegionIndex = parseInt(region.value.replace("region", "")) - 1
    const selectedRegion = hourData[selectedRegionIndex]
  
    const labels = selectedRegion.prices.map(data => {
      const date = new Date(data.time_start)
      const hours = date.getHours().toString().padStart(2, '0')
      return hours + '.00'
    })
  
    const pricesSEK = selectedRegion.prices.map(data => data.SEK_per_kWh)
  
    chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: `SEK per kWh - ${selectedRegion.region} `,
            data: pricesSEK,
            borderColor: 'green',
            backgroundColor: 'rgba(0, 0, 255, 0.1)',
          },
        ],
      },
      options: {
        responsive: false,
        maintainAspectRatio: true,
        scales: {
          xAxis: {
            display: true,
            title: {
              display: true,
              text: 'Tid',
            },
          },
          yAxis: {
            display: true,
            title: {
              display: true,
              text: 'SEK per kWh',
            },
          },
        },
      },
    });
  }


function updateTable(selectedRegion) {
    tableBody.innerHTML = ''
    const selectedRegionIndex = parseInt(region.value.replace("region", "")) - 1
    const selectedRegionData = hourData[selectedRegionIndex]
  
    if (selectedRegionData) {
      selectedRegionData.prices.forEach(data => {
        const row = document.createElement('tr')
        const timeCell = document.createElement('td')
        const startDate = new Date(data.time_start)
        const endDate = new Date(data.time_end)
        const startTime = startDate.getHours().toString().padStart(2, '0') + ':' + startDate.getMinutes().toString().padStart(2, '0');
        const endTime = endDate.getHours().toString().padStart(2, '0') + ':' + endDate.getMinutes().toString().padStart(2, '0');
        timeCell.textContent = startTime + '-' + endTime;
        const sekPerKWhCell = document.createElement('td')
        sekPerKWhCell.textContent = data.SEK_per_kWh
        row.appendChild(timeCell)
        row.appendChild(sekPerKWhCell)
        tableBody.appendChild(row)
      })
    }
  }
  
function updateChart(selectedRegion) {
    if (chart) {
      chart.destroy()
    }
    createElectricityPriceCharts()
  }

  document.addEventListener('DOMContentLoaded', function () {
    createElectricityPriceCharts()
  })

  