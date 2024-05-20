const arrayOfQuotes = [
  {
    author: "Oscar Wilde",
    quote: "Be yourself; everyone else is already taken.",
  },
  {
    author: "Marilyn Monroe",
    quote:
      "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
  },
  {
    author: "Frank Zappa",
    quote: "So many books, so little time.",
  },
  {
    author: "Albert Einstein",
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe..",
  },
  {
    author: "Marcus Tullius Cicero",
    quote: "A room without books is like a body without a soul.",
  },
  {
    author: "Bernard M. Baruch",
    quote:
      "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
  },
  {
    author: "William W. Purkey",
    quote:
      "You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.",
  },
  {
    author: "Dr. Seuss",
    quote:
      "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
  },
  {
    author: "Mae West",
    quote: "You only live once, but if you do it right, once is enough.",
  },
  {
    author: "Mahatma Gandhi",
    quote: "Be the change that you wish to see in the world.",
  },
  {
    author: "Robert Frost",
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
  },
];
var quoteOutput = document.getElementById("quoteOutput");
var authorOutput = document.getElementById("authorOutput");

var pastRandom = [];
function generateQuote() {
  var random = generateRandom();
  if (random === false) {
    quoteOutput.textContent = "there is no more quote";
    authorOutput.textContent = "";
  } else if (random == "again") {
    generateQuote();
  } else {
    quoteOutput.textContent = `"${arrayOfQuotes[random].quote}"`;
    authorOutput.textContent = `--${arrayOfQuotes[random].author}`;
  }
}

function generateRandom() {
  var random = Number.parseInt(Math.random() * arrayOfQuotes.length);
  if (pastRandom.length >= arrayOfQuotes.length) {
    return false;
  } else if (pastRandom.includes(random)) {
    return "again";
  } else {
    pastRandom.push(random);

    return random;
  }
}
