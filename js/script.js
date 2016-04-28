(function() {
  'use strict';

  //adds quotes variable to contain json object of 7 quotes
  var quotes = [
    {
      quote: 'Some of the worst mistakes of my life have been haircuts.',
      source: 'Jim Morrison',
      citation: 'No One Here Gets Out Alive',
      year: '1950',
      category: ['life', 'hair']
    },
    {
      quote: 'Gratitude is not only the greatest of virtues, but the parent of all others.',
      source: 'Cicero',
      citation: 'Pro Plancio',
      year: '54 B.C.',
      category: ['gratitude', 'thankfulness', 'life']
    },
    {
      quote: 'Electricity is actually made up of extremely tiny particles called electrons, that you cannot see with the naked eye unless you have been drinking.',
      source: 'Dave Barry',
      citation: 'The Taming of the Screw',
      year: '1972',
      category: ['drinking', 'funny']
    },
    {
      quote: 'Be a first rate version of yourself, not a second rate version of someone else.',
      source: 'Judy Garland',
      citation: '',
      year: '',
      category: ['life']
    },
    {
      quote: 'I\'ve always thought that a big laugh is a really loud noise from the soul saying, "Ain\'t that the truth."',
      source: 'Quincy Jones',
      citation: 'Victory of the Spirit',
      year: '',
      category: ['laugh', 'life', 'funny']
    },
    {
      quote: 'You can go a long way with a smile. You can go a lot farther with a smile and a gun.',
      source: 'Al Capone',
      citation: '',
      year: '1935',
      category: ['life', 'funny']
    },
    {
      quote: 'Put your whole self into it, and you will find your true voice. Hold back and you won\'t. It\'s that simple.',
      source: 'Hugh Macleod',
      citation: 'How To Be Creative: 25. You have to find your own schtick',
      year: '2004',
      category: ['life']
    },
  ];

  //creates getRandomQuote function
  function getRandomQuote() {
    //return random number between 1 & the length of quotes array
    return Math.floor(Math.random() * quotes.length) + 1;
  }

  console.log(quotes[getRandomQuote()]);

  // event listener to respond to clicks on the page
  // when user clicks anywhere on the page, the "makeQuote" function is called
  document.getElementById('loadQuote').addEventListener("click", printQuote, false);

})();
