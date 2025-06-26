 function win(url) {
var audio = new Audio('WINNAV.mp3');
audio.play()
audio.addEventListener('ended', () => {
  window.location.assign(url);
});
 }