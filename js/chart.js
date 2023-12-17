'use strict';

let canvasElem = document.getElementById('chart')

/* TODO:
 * - Instantiate a new AppState
 * - Use a method on that AppState to load vote data from localStorage.
 * - Create a data object for chart.js using your AppState's allProducts array.
 * - Combine the data object with configuration information for chart.js type, colors, etc
 * - Call chart.js with the configuration and the canvasElem
 *
 */
function renderChart() {
  let state = new AppState()
  state.loadItems();

  let productNames = state.allProducts.map(product => product.name);
  let clickData = state.allProducts.map(product => product.timesClicked);
  let showData = state.allProducts.map(product => product.timesShown);

  let data = {
    labels: productNames,
    datasets: [
      {
        label: 'Votes',
        data: clickData,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
      {
        label: 'Views',
        data: showData,
        backgroundColor: 'rgba(198,230,160,0.4)',
        borderColor: 'rgfa(198,230,160,1)',
        borderWidth: 1,
      },
    ],
  };

  let config = {
    type: 'bar',
    data: data,
  };

  new Chart(canvasElem, config);
}

renderChart();
