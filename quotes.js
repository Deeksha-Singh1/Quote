var arrayofQuotes =[

  {
    "quote":"You have to write the book that wants to be written. And if the book will be too difficult for grown-ups, then you write it for children.",
    "author":"Madeleine L'Engle"
  },

  {
    "quote": "If you don't have time to read, you don't have the time (or the tools) to write. Simple as that.",
    "author":"Stephen King"
  },
  {
    "quote":"We write to taste life twice, in the moment and in retrospect.",
    "author":"Anaïs Nin"
  },

  {
    "quote":"Substitute 'damn' every time you're inclined to write 'very;' your editor will delete it and the writing will be just as it should be.",
    "author":"Mark Twain"

  },

  {
    "quote":"If there's a book that you want to read, but it hasn't been written yet, then you must write it.",
    "author":"Toni Morrison"
  },

  {
    "quote":"One day I will find the right words, and they will be simple.",
"author":"Jack Kerouac, The Dharma Bums"
},

{"quote":"Either write something worth reading or do something worth writing.",
"author":"Benjamin Franklin"
},

{"quote":"You never have to change anything you got up in the middle of the night to write.",
"author":"Saul Bellow"
},

{"quote":"No tears in the writer, no tears in the reader. No surprise in the writer, no surprise in the reader.",
"author":"Robert Frost"
},

{"quote":"Read, read, read. Read everything -- trash, classics, good and bad, and see how they do it. Just like a carpenter who works as an apprentice and studies the master. Read! You'll absorb it. Then write. If it's good, you'll find out. If it's not, throw it out of the window.",
"author":"William Faulkner"
},

{"quote":"You must stay drunk on writing so reality cannot destroy you.",
"author":"Ray Bradbury, Zen in the Art of Writing"
},

{"quote":"Words can be like X-rays if you use them properly -- they'll go through anything. You read and you're pierced.",
"author":"Aldous Huxley, Brave New World"
},

{"quote":"How vain it is to sit down to write when you have not stood up to live.",
"author":"Henry David Thoreau"
},

{"quote":"I can shake off everything as I write; my sorrows disappear, my courage is reborn.",
"author":"Anne Frank"
},

{"quote":"A writer is someone for whom writing is more difficult than it is for other people.",
"author":"Thomas Mann, Essays of Three Decades"
  }
]

function randomSelector(arrayLength){
  return Math.floor(Math.random() * arrayLength);
}

function generateQuote(){
  var randomNumber = randomSelector(arrayofQuotes.length);

  document.getElementById("QuoteOutput").innerHTML = '"' + arrayofQuotes[randomNumber].quote + '"';

  document.getElementById("authorOutput").innerHTML = "- " + arrayofQuotes[randomNumber].author;
}

