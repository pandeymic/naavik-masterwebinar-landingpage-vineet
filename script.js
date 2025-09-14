document.addEventListener('DOMContentLoaded', () => {

  // --- Countdown Timer ---
  const countdown = () => {
    const eventDate = new Date("September 25, 2025 17:00:00").getTime();
    const now = new Date().getTime();
    const difference = eventDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    if (document.getElementById("days")) {
      document.getElementById("days").innerText = days.toString().padStart(2, '0');
      document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
      document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
      document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
    }

    if (difference < 0) {
      clearInterval(timerInterval);
      if (document.getElementById("countdown")) {
        document.getElementById("countdown").innerHTML = "<h4>The Event Has Started!</h4>";
      }
    }
  };

  const timerInterval = setInterval(countdown, 1000);
  countdown(); 

});