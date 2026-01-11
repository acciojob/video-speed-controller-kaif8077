const video = document.querySelector('.flex');
const speed = document.querySelector('.speed');
const speedBar = document.querySelector('.speed-bar');

speed.addEventListener('mousemove', function (e) {
  const y = e.pageY - this.offsetTop;
  const percent = y / this.offsetHeight;
  const min = 0.4;
  const max = 4;
  const playbackRate = percent * (max - min) + min;

  speedBar.style.height = `${Math.round(percent * 100)}%`;
  speedBar.textContent = playbackRate.toFixed(2) + '×';
  video.playbackRate = playbackRate;
});
