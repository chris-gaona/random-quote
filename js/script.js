(function() {
  'use strict';

  //adds quotes variable to contain array of 7 quote objects
  var quotes = [
    {
      quote: 'Some of the worst mistakes of my life have been haircuts.',
      source: 'Jim Morrison',
      citation: 'No One Here Gets Out Alive',
      year: '1950',
      shares: '25',
      category: ['life', 'hair'],
      color: '#ff4500'
    },
    {
      quote: 'Gratitude is not only the greatest of virtues, but the parent of all others.',
      source: 'Cicero',
      citation: 'Pro Plancio',
      year: '54 B.C.',
      shares: '250',
      category: ['gratitude', 'thankfulness'],
      color: '#655385'
    },
    {
      quote: 'Don\'t cry because it\'s over, smile because it happened.',
      source: 'Dr. Seuss',
      citation: '',
      year: '1925',
      shares: '12',
      category: ['drinking', 'funny'],
      color: '#7c9e37'
    },
    {
      quote: 'Be a first rate version of yourself, not a second rate version of someone else.',
      source: 'Judy Garland',
      citation: '',
      year: '',
      shares: '137',
      category: ['life', 'person'],
      color: '#836fff'
    },
    {
      quote: 'I\'ve always thought that a big laugh is a really loud noise from the soul saying, "Ain\'t that the truth."',
      source: 'Quincy Jones',
      citation: 'Victory of the Spirit',
      year: '',
      shares: '4',
      category: ['laugh', 'life'],
      color: '#63b8ff'
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
      category: ['life', 'voice'],
      color: 'blue'
    },
  ];

  //creates a clone of quotes array to manipulate
  //without hurting the original array
  var usedQuotes = quotes.slice(0);

  //creates resetQuotes function
  function resetQuotes() {
    //if usedQuotes has 0 objects in it...
    if (usedQuotes.length === 0) {
      //then create a new clone of quotes array to use
      usedQuotes = quotes.slice(0);
    }
  }

  //creates getRandomQuote function
  function getRandomQuote() {
    //calls resetQuotes function to re-clone quotes array
    //if usedQuotes array is empty
    resetQuotes();

    //generates random number between 1 &
    //the length of quotes array &
    //stores it in randomNumber variable
    var randomNumber = Math.floor(Math.random() * usedQuotes.length);

    //returns proper object from quotes array
    //using randomNumber...deletes it from usedQuotes array
    //cuz I'll be using it to make sure same quote is not
    //shown more than once in the same rotation
    return usedQuotes.splice(randomNumber, 1);
  }

  // console.log(getRandomQuote());

  //creates printQuote function
  function printQuote() {
    //creates variables
    var string,
        //calls getRandomQuote function &
        //stores the returned quote object in quote variable
        getQuote = getRandomQuote(),
        quote = getQuote[0];

    //calls clearInterval function to clear interval timer
    //and then restarts the timer immediately
    clearInterval();

    //if there is no year & no citation do this
    if (quote.year === '' && quote.citation === ''){
      string = '<p class="quote">' + quote.quote + '</p> <p class="source">' + quote.source + ' | <a href="#" class="category">' + quote.category[0] + '</a><a href="#" class="category">' + quote.category[1] + '</a> | <a href="#" class="shares">Shares: ' + quote.shares + '</a></p>';

    //else if there is no year value do this
    } else if (quote.year === '') {
      string = '<p class="quote">' + quote.quote + '</p> <p class="source">' + quote.source + '<span class="citation">' + quote.citation + '</span> | <a href="#" class="category">' + quote.category[0] + '</a><a href="#" class="category">' + quote.category[1] + '</a> | <a href="#" class="shares">Shares: ' + quote.shares + '</a></p>';

    //else if there is no citation value do this
    } else if (quote.citation === '') {
      string = '<p class="quote">' + quote.quote + '</p> <p class="source">' + quote.source + '</span><span class="year">' + quote.year + '</span> | <a href="#" class="category">' + quote.category[0] + '</a><a href="#" class="category">' + quote.category[1] + '</a> | <a href="#" class="shares">Shares: ' + quote.shares + '</a></p>';

    //else show all the values
    } else {
      string = '<p class="quote">' + quote.quote + '</p> <p class="source">' + quote.source + '<span class="citation">' + quote.citation + '</span><span class="year">' + quote.year + '</span> | <a href="#" class="category">' + quote.category[0] + '</a><a href="#" class="category">' + quote.category[1] + '</a> | <a href="#" class="shares">Shares: ' + quote.shares + '</a></p>';
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
  var intervalTimer = window.setInterval(printQuote, 10000);

  //creates clearInterval function
  function clearInterval() {
    //clears the interval created by intervalTimer
    //is only called when loadQuote button is clicked
    window.clearInterval(intervalTimer);

    //immediately restarts timer after timer is cleared
    //creates better UX so if user clicks loadQuote button
    //& interval is at end it does not changed to another quote
    //until another 5 seconds have passed
    intervalTimer = window.setInterval(printQuote, 10000);
  }

  // event listener to respond to clicks on the page
  // when user clicks anywhere on the page, the "makeQuote" function is called
  document.getElementById('loadQuote').addEventListener("click", printQuote, false);

})();
