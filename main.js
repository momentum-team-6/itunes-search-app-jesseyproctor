const searchMusic = document.querySelector('#search-music')
const musicInput = document.querySelector('#music-input')
const baseUrl = 'https://itunes.apple.com/search?term='

searchMusic.addEventListener('submit', function (event) {
    event.preventDefault()
    console.log('it worked')
    let searchString = musicInput.value.replace(' ','+')
    console.log(baseUrl+searchString)

})





