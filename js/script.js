(function() {
  'use strict';

  //adds quotes variable to contain json object of 7 quotes
  var quotes = {[
    {
      quote: 'Some of the worst mistakes of my life have been haircuts.',
      source: 'Jim Morrison',
      citation: '',
      year: '',
      category: ''
    },
    {
      quote: 'quote 2',
      source: '',
      citation: '',
      year: '',
      category: ''
    },
    {
      quote: 'quote 3',
      source: '',
      citation: '',
      year: '',
      category: ''
    },
    {
      quote: 'quote 4',
      source: '',
      citation: '',
      year: '',
      category: ''
    },
    {
      quote: 'quote 5',
      source: '',
      citation: '',
      year: '',
      category: ''
    },
    {
      quote: 'quote 6',
      source: '',
      citation: '',
      year: '',
      category: ''
    },
    {
      quote: 'quote 7',
      source: '',
      citation: '',
      year: '',
      category: ''
    },
  ]};

  // event listener to respond to clicks on the page
  // when user clicks anywhere on the page, the "makeQuote" function is called
  document.getElementById('loadQuote').addEventListener("click", printQuote, false);

})();
