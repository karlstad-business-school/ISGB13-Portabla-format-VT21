window.addEventListener('load', function() {

  let form = document.getElementById('search-form');
  let content = document.getElementById('content');
  let searchField = document.getElementById('search');
  let tbody = document.getElementById('tbody');

  form.addEventListener('submit', function(event){
    event.preventDefault();
    search(searchField.value, tbody);
  });

});

/**
 * Makes a request to https://restcountries.eu/rest/v2/name/{query} and displays a table with the results.
 * @param {string} query The user’s search query
 * @param {HTMLElement} container The <tbody> element that the result will be printed to
 */
function search(query, container){
  container.innerHTML = '';
  window.fetch('https://restcountries.eu/rest/v2/name/' + encodeURIComponent(query))
    .then(response => response.json())
    .then(data => {
      console.log(data);
      data.forEach(item => {
        //Gör något;
      })
    });
}
