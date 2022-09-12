const quoteContainer = document.getElementById('quoteContainer');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('newQuote');
const favoriteButton = document.getElementById('favorite');
const loader = document.getElementById('loader');
const mosaic = document.getElementById('mosaicBckgrnd');
const moving = document.getElementById('movingBckgrnd');
const tropical = document.getElementById('tropiclBckgrnd');
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementsByName('pauseBtn');
const mosaicURL = 'url("https://res.cloudinary.com/dft0cktie/image/upload/v1662586131/trianglify-lowres_nmjdty.png")';
const movingURL = 'url("https://res.cloudinary.com/dft0cktie/image/upload/v1657749865/8hnB_p0xza1.gif")';
const tropicalURL = 'url("https://res.cloudinary.com/dft0cktie/image/upload/v1656719684/pexels-pixabay-219998_lddnpz.jpg")';
      

 let apiQuotes = [];

// show loading
function loading(){
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// background changer
 mosaicBckgrnd.addEventListener('click', () =>{
     document.body.style.backgroundImage = `${mosaicURL}`;
 });
    
 movingBckgrnd.addEventListener('click', () =>{
    document.body.style.backgroundImage = `${movingURL}`;
});

tropiclBckgrnd.addEventListener('click', () =>{
    document.body.style.backgroundImage = `${tropicalURL}`;
});


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

// Favorite Button
// function favorited(){
//     event.body.style.color = ; 
// }

// Event Listener

newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);
// favoriteButton.addEventListener('click', favorited);

// On Load
getQuotes();


// favorite button


function favoriteSelected(favorited){
    favorited.target.style.color = '#fb116b';
    // if(getQuotes ? remove.('#fb116b');
};
// Event Listener
favoriteButton.addEventListener('click', favoriteSelected)

// favorite button refresh
// newQuoteBtn.addEventListener('click', refreshFavorite)
// function refreshFavorite(favorited){
//     favorited.target.style.color = '#c0c0c0';
// };



// play or pause event listerner
playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));

// Update DOM
function loadSong(song){
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    music.src = `${songURLS.name}.mp3`;
    image.src = `img/${song.name}.jpg`
}

// current Song
let songIndex = 0;

// // Next Song
// function prevSong(){
//     songIndex--;
//     if(songIndex < 0){
//         songIndex = songs.length -1;
//     }
//     console.log(songIndex);
//     loadSong(song[songIndex]);
//     playSong();
// }

// // Next Song
// function nextSong(){
//     songIndex++;
//     if(songIndex > songs.length - 1){
//         songIndex = 0;
//     }
//     console.log(songIndex);
//     loadSong(song[songIndex]);
//     playSong();
// }

    // On Load - Select First Song
    loadSong(song[songIndex]);


    playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));    



// Event Listeners
playBtn.addEventListener('click', palySong);
pauseBtn.addEventListener('click', pauseSong);





      
// play Active
      const playToggle = document.getElementById('music-player');
  
function playActivated(){
   playToggle.children[0].classList.replace("fa-solid", "fa-regular");
   playToggle.children[1].classList.replace("fa-regular", "fa-solid");
}
playToggle.addEventListener('click', playActivated);


// pause Active
function pauseActivated(){
    
}
pauseToggle.addEventListener('click', pauseActivated);
