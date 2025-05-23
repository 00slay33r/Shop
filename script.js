
const targetDate = new Date('2025-09-01T00:00:00');

function updateCountdown() {
  const now = new Date();
  const timeDiff = targetDate - now;

  const timerElement = document.getElementById('timer');
  if (!timerElement) return;

  if (timeDiff <= 0) {
    timerElement.textContent = 'Le jour est arrivé !';
    clearInterval(countdownInterval);
    return;
  }

  const daysRemaining = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  timerElement.textContent = `${daysRemaining} jour${daysRemaining !== 1 ? 's' : ''} restant${daysRemaining !== 1 ? 's' : ''}`;
}

updateCountdown();
const countdownInterval = setInterval(updateCountdown, 24 * 60 * 60 * 1000);
