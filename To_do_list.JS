const progressBar = document.querySelector('.progress-bar');
const progressText = document.querySelector('.progress-text');
let progress = 0;

function updateProgressBar() {
  progress += 20;
  if (progress > 100) {
    progress = 100;
  }
  progressBar.style.width = `${progress}%`;
  progressText.textContent = `${progress}%`;
}

setInterval(updateProgressBar, 1000);