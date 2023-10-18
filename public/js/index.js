const canvas = document.getElementById('electricityPriceChart')
const hourData = JSON.parse(canvas.getAttribute('data-hour-data'))
const ctx = canvas.getContext('2d')
const tableBody = document.getElementById('tableBody');
let chart



function createAveragePriceChart(selectedRegionIndex) {
  if (chart) {
    chart.destroy()
  }

  const dates = hourData.map((entry) => entry.date)
  const regionData = hourData.map((entry) => entry.data[selectedRegionIndex].averagePrice)

  chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: dates,
      datasets: [
        {
          label: `Snitt SEK per kWh - Region ${selectedRegionIndex + 1}`,
          data: regionData,
          backgroundColor: 'rgba(0, 128, 0, 0.5)'
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
            text: 'SEK per kWh',
          },
        },
      },
    },
  })
}


function updateTable(selectedRegionIndex) {
  tableBody.innerHTML = '';

  if (hourData && hourData.length > 0) {
    const last31DaysData = hourData.slice(-31);

    last31DaysData.forEach(entry => {
      const date = entry.date;
      const averagePrice = entry.data[selectedRegionIndex].averagePrice;

      const row = document.createElement('tr');

      const dateCell = document.createElement('td');
      dateCell.textContent = date;
      row.appendChild(dateCell);

      const priceCell = document.createElement('td');
      priceCell.textContent = averagePrice;
      row.appendChild(priceCell);

      tableBody.appendChild(row);
    });
  }
}



const regionSelect = document.getElementById('regiondata');
regionSelect.addEventListener('change', function () {
  const selectedRegionValue = regionSelect.value;
  const selectedRegionIndex = parseInt(selectedRegionValue.replace("region", "")) - 1;
  createAveragePriceChart(selectedRegionIndex);
  updateTable(selectedRegionIndex);
});

document.addEventListener('DOMContentLoaded', function () {
  createAveragePriceChart(0);
  updateTable(0);
});
