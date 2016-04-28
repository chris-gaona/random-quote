(function() {
  'use strict';

  //adds quotes variable to contain json object of 7 quotes
  var quotes = [
    {
      quote: 'Some of the worst mistakes of my life have been haircuts.',
      source: 'Jim Morrison',
      citation: 'No One Here Gets Out Alive',
      year: '1950',
      shares: '25',
      category: ['life', 'hair'],
      color: 'red'
    },
    {
      quote: 'Gratitude is not only the greatest of virtues, but the parent of all others.',
      source: 'Cicero',
      citation: 'Pro Plancio',
      year: '54 B.C.',
      shares: '250',
      category: ['gratitude', 'thankfulness', 'life'],
      color: 'gold'
    },
    {
      quote: 'Don\'t cry because it\'s over, smile because it happened.',
      source: 'Dr. Seuss',
      citation: '',
      year: '1925',
      shares: '12',
      category: ['drinking', 'funny'],
      color: 'green'
    },
    {
      quote: 'Be a first rate version of yourself, not a second rate version of someone else.',
      source: 'Judy Garland',
      citation: '',
      year: '',
      shares: '137',
      category: ['life'],
      color: 'purple'
    },
    {
      quote: 'I\'ve always thought that a big laugh is a really loud noise from the soul saying, "Ain\'t that the truth."',
      source: 'Quincy Jones',
      citation: 'Victory of the Spirit',
      year: '',
      shares: '4',
      category: ['laugh', 'life', 'funny'],
      color: 'pink'
    },
    {
      quote: 'You can go a long way with a smile. You can go a lot farther with a smile and a gun.',
      source: 'Al Capone',
      citation: '',
      year: '1935',
      shares: '95',
      category: ['life', 'funny'],
      color: 'orange'
    },
    {
      quote: 'Put your whole self into it, and you will find your true voice. Hold back and you won\'t. It\'s that simple.',
      source: 'Hugh Macleod',
      citation: 'How To Be Creative: 25',
      year: '2004',
      shares: '64',
      category: ['life'],
      color: 'blue'
    },
  ];

  //creates getRandomQuote function
  function getRandomQuote() {
    //generates random number between 1 &
    //the length of quotes array &
    //stores it in randomNumber variable
    var randomNumber = Math.floor(Math.random() * quotes.length);

    //returns proper object from quotes array
    //using randomNumber
    return quotes[randomNumber];
  }

  //creates printQuote function
  function printQuote() {
    //calls getRandomQuote function &
    //stores the returned quote object in quote variable
    var string,
        quote = getRandomQuote();

    //if there is no year value do this
    if (quote.year === '') {
      string = '<p class="quote">' + quote.quote + '</p> <p class="source">' + quote.source + '<span class="citation">' + quote.citation + '<span class="category">' + quote.category + '</span></p>';

    //else if there is no citation value do this
    } else if (quote.citation === '') {
      string = '<p class="quote">' + quote.quote + '</p> <p class="source">' + quote.source + '</span><span class="year">' + quote.year + '</span><span class="category">' + quote.category + '</span></p>';

    //else show all the values
    } else {
      string = '<p class="quote">' + quote.quote + '</p> <p class="source">' + quote.source + '<span class="citation">' + quote.citation + '</span><span class="year">' + quote.year + '</span><span class="category">' + quote.category + '</span></p>';
    }

    //sets background color of body tag to color
    //specified key/value pairs in array above
    document.body.style.background = quote.color;

    //add string from if statement to innerHTML of quote-box
    document.getElementById('quote-box').innerHTML = string;
  }

  //creates an interval to change quotes after
  //a certain amount of time has passed
  //in this case 5000 milliseconds or 5 seconds
  var intervalTimer = window.setInterval(printQuote, 5000);

  //could use the following clearInterval method
  //to stop the interval method above by attaching
  //it to a click event
  // window.clearInterval(intervalTimer);

  // event listener to respond to clicks on the page
  // when user clicks anywhere on the page, the "makeQuote" function is called
  document.getElementById('loadQuote').addEventListener("click", printQuote, false);

})();
