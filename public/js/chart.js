const region = document.querySelector('#region')
const canvas = document.getElementById('electricityPriceChart')
const hourData = JSON.parse(canvas.getAttribute('data-hour-data'))
const tableBody = document.getElementById('tableBody')

function clearTable() {
  tableBody.innerHTML = ''
}

function getSelectedRegionIndex() {
  return parseInt(region.value.replace('region', '')) - 1
}

function formatTimeRange(startTime, endTime) {
  const formattedStartTime = startTime.getHours().toString().padStart(2, '0') + ':' + startTime.getMinutes().toString().padStart(2, '0')
  const formattedEndTime = endTime.getHours().toString().padStart(2, '0') + ':' + endTime.getMinutes().toString().padStart(2, '0')
  return formattedStartTime + '-' + formattedEndTime
}

function createRow(data) {
  const row = document.createElement('tr')
  const timeCell = document.createElement('td')
  const sekPerKWhCell = document.createElement('td')
  const startDate = new Date(data.time_start)
  const endDate = new Date(data.time_end)
  timeCell.textContent = formatTimeRange(startDate, endDate)
  sekPerKWhCell.textContent = data.SEK_per_kWh
  row.appendChild(timeCell)
  row.appendChild(sekPerKWhCell)
  return row
}

export function updateTable(selectedRegion) {
  clearTable()
  const selectedRegionIndex = getSelectedRegionIndex()
  const selectedRegionData = hourData[selectedRegionIndex]
  if (selectedRegionData) {
    selectedRegionData.prices.forEach(data => {
      const row = createRow(data)
      tableBody.appendChild(row)
    })
  }
}

export function toggleView() {
  const toggleViewButton = document.getElementById('toggleView')
  const tableContainer = document.getElementById('tableContainer')
  if (tableContainer.style.display === 'none') {
    tableContainer.style.display = 'block'
    toggleViewButton.textContent = 'Tabell'
  } else {
    tableContainer.style.display = 'none'
    toggleViewButton.textContent = 'Tabell'
  }
}
