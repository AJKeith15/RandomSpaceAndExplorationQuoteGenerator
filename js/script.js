/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
 * all quotes from https://er.jsc.nasa.gov/seh/quotes.html
***/
let quotes = [
  {
    quote: "Freedom lies in being bold.",
    source: "Robert Frost"
  },{
    quote: "The important thing is not to stop questioning.",
    source: "Albert Einstein"
  },{
    quote: "If we die, we want people to accept it. We are in a risky business, and we hope that if anything happens to us it will not delay the program. The conquest of space is worth the risk of life.",
    source: "Astronaut Virgil I. Grissom",
    about: "astronauts Grissom, White, and Chaffee died from a flash fire aboard Apollo 204 Spacecraft",
    year: "January 27, 1967"
  },{
    quote: "Taking a new step...is what people fear most.",
    source: "Dostoyevski"
  },{
    quote: "The future cannot be predicted, but futures can be invented.",
    source: "Dennis Gabor",
    year: "1963"
  },{
    quote: "The past is but the beginning of a beginning, and all that is and has been is but the twilight of the dawn.",
    source: "H.G. Wells",
    citation: "The Discovery of the Future",
    year: "1901"
  },{
    quote: "There is nothing so far removed from us to be beyond our reach, or so far hidden that we cannot discover it.",
    source: "Rene Descartes"
  },{
    quote: "The man with a new idea is a crank‹until the idea succeeds.",
    source: "Mark Twain"
  },{
    quote: "First I believe that this Nation should commit itself to achieving the goal, before this decade is out, of landing a man on the Moon.",
    source: "John F. Kennedy",
    year: "May 24, 1961"
  }
]

/***
 * `getRandomQuote` function
***/
function getRandomQuote(arr) {
  // get random number from 0 to (amount of objects in quotes array - 1)
  let randNum = Math.floor(Math.random() * arr.length)

  // return object from the array at index of random number
  return arr[randNum]
}

/***
 * `printQuote` function
***/
// 
function printQuote() {
  // assign quote to the object received from getRandomQuote() call
  let quote = getRandomQuote(quotes)
  // used \n to format output to console if htmlStr is logged
  let htmlStr = `<p class='quote'>${quote.quote}</p>\n<p class='source'>${quote.source}\n`
  
  // check if quote object has key "citation"
  // found "hasOwnProperty" method from StackOverflow: https://stackoverflow.com/questions/455338/how-do-i-check-if-an-object-has-a-key-in-javascript
  if (quote.hasOwnProperty('citation')) {
    // append <span> with citation value to string
    // used \t to format output to console if htmlStr is logged
    htmlStr += `\t<span class='citation'>${quote.citation}</span>\n`
  }

  //check if quote object has key "year"
  if (quote.hasOwnProperty('year')) {
    // append <span> with year value to string
    htmlStr += `\t<span class='year'>${quote.year}</span>\n`
  }

  //check if quote object has key "about"
  if (quote.hasOwnProperty('about')) {
    // append <span> with about value to string
    htmlStr += `\t<span class='about'>${quote.about}</span>\n`
  }

  // close paragraph tag
  htmlStr += "</p>"

  // write htmlStr to the HTML tag with ID of "quote-box"
  document.getElementById('quote-box').innerHTML = htmlStr

  // change background_color when new quote is received: https://www.w3schools.com/js/js_htmldom_css.asp
  document.body.style.backgroundColor = `${getRandomRGB()}`
}

// function to create rgb string
function getRandomRGB() {
  let RGBStr = 'rgb('
  RGBStr += `${getRandomRGBNum()},${getRandomRGBNum()},${getRandomRGBNum()})`
  return RGBStr
}

// function to get random number between 1 and 255
function getRandomRGBNum() {
  return Math.floor(Math.random() * 255) + 1
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

// automatically rotate quotes every 10 seconds
// learned timers from W3Schools: https://www.w3schools.com/js/js_timing.asp
setInterval(printQuote, 10000)

// upon click of HTML object with tag "load-quote", run printQuote() function
document.getElementById('load-quote').addEventListener("click", printQuote, false);