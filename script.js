
// Listen for the 'key down' event
window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    
    if (!audio) return; // stop function from running
    audio.currentTime = 0; // rewind to the start
    audio.play();
});