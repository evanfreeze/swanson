const quoteToDisplay = fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
  .then(response => response.json())
  .then((quote) => {
    document.getElementById('quote').innerText = quote;
    return true;
  });

