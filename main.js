const searchMusic = document.querySelector('#search-music')
const musicInput = document.querySelector('#music-input')
const songList = document.querySelector('#song-list')
const baseUrl = 'https://itunes-api-proxy.glitch.me/search?term='
// const baseUrl = 'https://itunes.apple.com/search?term='
// const searchString = encodeURI(musicInput.value)
// const url = baseUrl + searchString


searchMusic.addEventListener('submit', function (event) {
    event.preventDefault()
    console.log('it worked')
    let searchString = musicInput.value.replace(' ', '+')
    // encodeURI(musicInput.value)
    console.log(baseUrl + searchString)
    fetch (baseUrl + searchString)
    .then (response => response.json()) 
    .then (data => {
        console.log(data)
        renderResults (data)
    })
})


function renderResults (data) {
    for (let object of data.results) {
        console.log(object)
        //this for loop takes objects returned out of array so they can be grabbed
        renderSong (object)
    }
    
}


function renderSong (track) {
 
    const bandImage = document.createElement('figure')
    songList.appendChild(bandImage)

    const bandName = document.createElement('h3')
    songList.appendChild(bandName)

    const trackTitle = document.createElement('p')
    songList.appendChild(trackTitle)

    const trackSoundClip = document.createElement ('figure')
    songList.appendChild(trackSoundClip)

    bandImage.innerHTML = `<img class='band photo' src=${track.artworkUrl30}>`
    bandName.innerHTML = track.artistName
    trackTitle.innerHTML = track.trackName
    trackSoundClip.innerHTML = `<audio
        controls
        src=${track.previewUrl}>
            Your browser does not support the
            <code>audio</code> element.
    </audio>`

}













