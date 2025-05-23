const targetDate = new Date('2025-09-01T00:00:00');

function updateCountdown() {
  const now = new Date();
  const timeDiff = targetDate - now;

  if (timeDiff <= 0) {
    document.getElementById('days').textContent = '00';
    document.getElementById('hours').textContent = '00';
    document.getElementById('minutes').textContent = '00';
    document.getElementById('seconds').textContent = '00';
    clearInterval(countdownInterval);
    return;
  }

  const totalSeconds = Math.floor(timeDiff / 1000);

  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  document.getElementById('days').textContent = String(days).padStart(2, '0');
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

updateCountdown();
const countdownInterval = setInterval(updateCountdown, 1000); // mise à jour chaque seconde