window.addEventListener('load', () => {

  let form = document.getElementById('search-form');
  let content = document.getElementById('content');
  let searchField = document.getElementById('search');
  let tbody = document.getElementById('tbody');

  form.addEventListener('submit', (event) =>{
    event.preventDefault();
    search(searchField.value, tbody);
  });

});

/**
 * Makes a request to https://restcountries.eu/rest/v2/name/{query} and displays a table with the results.
 * @param {string} query The user’s search query
 * @param {HTMLElement} container The <tbody> element that the result will be printed to
 */
let search = (query, container) => {
  container.innerHTML = '';
  window.fetch('https://restcountries.eu/rest/v2/name/' + encodeURIComponent(query))
    .then(response => response.json())
    .then(data => {
      console.log(data);
      data.forEach(item => {
        //Gör något;
        let row = document.createElement('tr');
        container.appendChild(row);

        let name = document.createElement('td');
        name.textContent = item.name;
        row.appendChild(name);

        let capital = document.createElement('td');
        capital.textContent = item.capital;
        row.appendChild(capital);

        let area = document.createElement('td');
        area.classList.add('text-right');
        if(item.area != null) {
          area.innerHTML = item.area.toLocaleString('en') + ' km<sup>2</sup>';
        }
        row.appendChild(area);

        let population = document.createElement('td');
        population.classList.add('text-right');
        if (item.population != null) {
          population.innerHTML = item.population.toLocaleString('en');
        }
        row.appendChild(population);

      })
    });
}
