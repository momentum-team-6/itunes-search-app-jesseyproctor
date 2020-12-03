const searchMusic = document.querySelector('#search-music')
const musicInput = document.querySelector('#music-input')
const songContainer = document.querySelector('#song-container')
const baseUrl = 'https://itunes-api-proxy.glitch.me/search?term='
const clearButton = document.querySelector('#clear-button')
// const baseUrl = 'https://itunes.apple.com/search?term='


searchMusic.addEventListener('submit', function (event) {
    event.preventDefault()
    console.log('it worked')
    let searchString = musicInput.value.replace(' ', '+')
    console.log(baseUrl + searchString)
    fetch (baseUrl + searchString)
    .then (response => response.json()) 
    .then (data => {
        console.log(data)
        renderResults (data)
    })
    
})

clearButton.addEventListener('click', function (event) {
    console.log ("hello", event)
    musicInput.value = ''
    songContainer.innerHTML = ''
})

function renderResults (data) {
    for (let object of data.results) {
        console.log(object)
        //this for loop takes objects returned out of array so they can be grabbed
        renderSong (object)
    }
    
}


function renderSong (track) {
 
    const songCard = document.createElement ('div')
    songCard.classList.add('song-card')
    songContainer.appendChild(songCard)

    const bandImage = document.createElement('figure')
    songCard.appendChild(bandImage)

    const bandName = document.createElement('h3')
    bandName.classList.add('band-name')
    songCard.appendChild(bandName)

    const trackTitle = document.createElement('p')
    trackTitle.classList.add('track-title')
    songCard.appendChild(trackTitle)

    const trackSoundClip = document.createElement('figure')
    songCard.appendChild(trackSoundClip) 


    bandImage.innerHTML = `<img class='band photo' src=${track.artworkUrl100}>`
    bandName.innerHTML = track.artistName
    trackTitle.innerHTML = track.trackName
    trackSoundClip.innerHTML = `<audio
        controls
        src=${track.previewUrl}>
            Your browser does not support the
            <code>audio</code> element.
    </audio>`

}













