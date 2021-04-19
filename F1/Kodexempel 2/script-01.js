window.addEventListener('load', init);

function init() {
  window.fetch('https://restcountries.eu/rest/v2/name/sweden').then(function(response) {
    console.log(response)
  });
}
