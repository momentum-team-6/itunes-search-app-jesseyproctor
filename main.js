const searchMusic = document.querySelector('#search-music')
const musicInput = document.querySelector('#music-input')
const baseUrl = 'https://itunes-api-proxy.glitch.me/?term='
// const baseUrl = 'https://itunes.apple.com/search?term='
const url = baseUrl + ''

searchMusic.addEventListener('submit', function (event) {
    event.preventDefault()
    console.log('it worked')
    let searchString = musicInput.value.replace(' ','+')
    console.log(baseUrl+searchString)

})

fetch (url)
    .then (response => response.json()) 
    .then (data => console.log(data))





