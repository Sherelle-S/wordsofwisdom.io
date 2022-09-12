const quoteContainer = document.getElementById('quoteContainer');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
// const favoriteButton = document.getElelmentById('favorite');
const newQuoteBtn = document.getElementById('newQuote');
const favoriteButton = document.getElementById('favorite');
// const loader = document.getElementById('loader');
// const tropical = document.getElementById('tropcal');
// const movingButton = document.getElementById('zen');
// const mosaicButton = document.getElementById('mosaic');

let apiQuotes = [];

// show loading
function loading(){
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// // Hide loading
// function complete(){
//     quoteContainer.hidden = false;
//     loader.hidden = true;
// }
// // show new quote
// function newQuote(){
//     loading();
//     // pick a random quote from apiQuotes array
//     const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
// // check if author field is blank and replace with unknown
// if(!quote.author){
//     authorText.textContent = 'Unknown';
// }else{
//     authorText.textContent = quote.author;
// // check quote lengtht to determine styling
//     if (quote.text.length > 90){
//         quoteText.classList.add('longQuote');
//     }else{
//         quoteText.classList.remove('longQuote');
//     }
// }
// // set quote, hide loader
// quoteText.textContent = quote.text;
// complete();
// }
// // Get Quotes from API

// async function getQuotes(){
//     loading();
//     const apiUrl = 'https://type.fit/api/quotes';
//     try{
// const  response = await fetch(apiUrl);
// apiQuotes = await response.json();
// newQuote()
//     }catch (error){
//         // Catch Error Here
//     }
// }

// // Tweet Quote
// function tweetQuote(){
//     const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
//     window.open(twitterUrl, '_blank');
// }

// // Favorite Button
// // function favorited(){
// //     event.body.style.color = ; 
// // }

// // Event Listener

// newQuoteBtn.addEventListener('click', newQuote);
// twitterBtn.addEventListener('click', tweetQuote);
// // favoriteButton.addEventListener('click', favorited);

// // On Load
// getQuotes();



// function switchBackgrnd(event){
// if()}






// favoriteButton.addEventListener('click', function onClick(favorited){
//     favorited.target.style.color = '#fb116b'
// });

const one = document.getElementById('mosaicBckgrnd');
const two = document.getElementById('movingBckgrnd');
const three = document.getElementById('tropiclBckgrnd');

function setBackground(image) {
    document.body.style.background = "url('`${img_urls}`');"

    if(mosaicBckgrnd){
            setBackground('mosaic');
        }else if(movingBckgrnd){
            setBackground('moving')
        }else{
            setBackground('tropiclBckgrnd')
        }
}

const img_urls = {
    tropical: 'https://res.cloudinary.com/dft0cktie/image/upload/v1656719684/pexels-pixabay-219998_lddnpz.jpg',
    mosaic: 'https://res.cloudinary.com/dft0cktie/image/upload/v1662586131/trianglify-lowres_nmjdty.png',
    moving: 'https://res.cloudinary.com/dft0cktie/image/upload/v1657749865/8hnB_p0xza1.gif',
};

one.addEventListener('click', setBackground);
two.addEventListener('click', setBackground);
three.addEventListener('click', setBackground);


const music = document.getElementById('music-icons');
function changeButton(){
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
  textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    console.log(music.children);
}

// toggle buttons player
let count = 0;
 
const playBtn = document.getElementById('playBtn');
function togglePlay(){
//  music.children[0].textContent = 'playBtn';
//  music.children[1].classList.remove('fa-solid fa-circle-play');
//  music.children[1].classList.add('fa-regular fa-circle-play');
console.log(music.children)
 // playBtn.classList.toggle('inactivePlay')
// console.log(count)
// if(count > 5){
//     playBtn.removeEventListener('click', togglePlay)
// }
// alert('clicked')
};
// playBtn.addEventListener('click', changeButton)
// playBtn.addEventListener('click', togglePlay);

// const pause = document.getElementById('pauseBtn');
// function pauseMusic(){
//     alert('paused')
// };
// pause.addEventListener('click', pauseMusic);

// // play music
// const play = document.getElementById('playBtn');
// function playMusic(){
// alert('play it')
// };
// play.addEventListener('click', playMusic);

// const pause = document.getElementById('pauseBtn');
// function pauseMusic(){
//     alert('paused')
// };
// pause.addEventListener('click', pauseMusic);

// // Sets background image

function setBackground(image) {
    // document.body.style.background = `url('img_urls.${image}')`;
    console.log(colour.children);
}

// if(mosaicBckgrnd){
//     setBackground('mosaic');
// }else if(movingBckgrnd){
//     setBackground('moving')
// }else{
//     setBackground('tropiclBckgrnd')
// }
// }

// const tropicalBtn = document.querySelector('tropcal');

// favoriteButton.addEventListener('click', function onClick(favorited){
//     if (true  && false && false ){
//     return tropicalTheme
// }else if (true && false && false ){
// return 
// }else{
//     return document.body.style.backgroundImage = "url('')"
// }
// });


// const movingBtn = document.querySelector('zen');
// const mosaicBtn = document.querySelector('mosaic');


// const tropicalBtn = document.getElementById('tropcal');
// const movingBtn = document.getElementById('zen');
// const mosaicBtn = document.getElementById('mosaic');

// const tropicalBtn = document.addEventListener('tropcal');
// const movingBtn = document.getElementById('zen');
// const mosaicBtn = document.getElementById('mosaic');


const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const PlayBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

// music

const song = [
    {
        name: 'unknown',
        displayName: 'Acoustic Motivation',
        artist: 'Coma Media from Pixabay' ,
    {
    {
        name: 'jacinto-1',
        displayName: 'Electric Chill Machine',
        artist: 'Jacinto design',
    },
    {
        name: 'Ashot-Danielyan-Composer',
        displayName: 'Love Meditation',
        artist: 'Ashot-Danielyan-Composer from Pixabay',

    },
    {
        name: 'Relax in the Rainforest',
        displayName: 'Lesfm from Pixabay',
        artist: 'Lesfm',
    },
];



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

// Next Song
function prevSong(){
    songIndex--;
    if(songIndex < 0){
        songIndex = songs.length -1;
    }
    console.log(songIndex);
    loadSong(song[songIndex]);
    playSong();
}

// Next Song
function nextSong(){
    songIndex++;
    if(songIndex > songs.length - 1){
        songIndex = 0;
    }
    console.log(songIndex);
    loadSong(song[songIndex]);
    playSong();
}

    // On Load - Select First Song
    loadSong(song[songIndex]);


// Event Listeners
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);


const songURLS = {
    motivation = 'https://res.cloudinary.com/dft0cktie/video/upload/v1662853710/acoustic-motivation-11290_tgtef4.mp3'
    love = 'https://res.cloudinary.com/dft0cktie/video/upload/v1662853623/love-meditation-115568_oqzxdb.mp3'
    rainforest = 'https://res.cloudinary.com/dft0cktie/video/upload/v1662906571/relax-in-the-forest-background-music-for-video-9145_s5gzkl.mp3'
}

