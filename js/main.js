const audio = document.querySelector('audio');
console.log(audio.audioTracks);
let isPlaying = false;
const playButton = document.querySelector('.play');
playButton.addEventListener('click', () => {
    if (!isPlaying) {
        audio.play();
        isPlaying = true;
        console.log('play');
    } else {
        audio.pause();
        isPlaying = false;
        console.log('pause');
    }
});