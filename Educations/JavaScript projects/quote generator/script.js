const quoteContainer = document.getElementById('quoteContainer');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('newQuote');
const loader = document.getElementById('loader')

let apiQuotes = [];

// show loading
function loading(){
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// Hide loading
function complete(){
    quoteContainer.hidden = false;
    loader.hidden = true;
}
// show new quote
function newQuote(){
    loading();
    // pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
// check if author field is blank and replace with unknown
if(!quote.author){
    authorText.textContent = 'Unknown';
}else{
    authorText.textContent = quote.author;
// check quote lengtht to determine styling
    if (quote.text.length > 90){
        quoteText.classList.add('longQuote');
    }else{
        quoteText.classList.remove('longQuote');
    }
}
// set quote, hide loader
quoteText.textContent = quote.text;
complete();
}
// Get Quotes from API

async function getQuotes(){
    loading();
    const apiUrl = 'https://type.fit/api/quotes';
    try{
const  response = await fetch(apiUrl);
apiQuotes = await response.json();
newQuote()
    }catch (error){
        // Catch Error Here
    }
}

// Tweet Quote
function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

// Event Listener

newQuoteBtn.addEventListener('click', newQuote);
    twitterBtn.addEventListener('click', tweetQuote);

// On Load
getQuotes();
