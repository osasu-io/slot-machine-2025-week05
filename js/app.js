// Slot Machine - Simple Version

// Initial balance
let balance = 1000;

document.getElementById('minBet').addEventListener('click', function () {
  playSlot(5);
});

document.getElementById('maxBet').addEventListener('click', function () {
  playSlot(50);
});

function playSlot(betAmount) {
  if (balance < betAmount) {
    document.querySelector('#message').innerText = 'Not enough balance!';
    return;
  }

  balance -= betAmount;
  document.querySelector('#balance').innerText = balance;

  // Generate random slot values
  let randomOne = Math.floor(Math.random() * 5);
  let randomTwo = Math.floor(Math.random() * 5);
  let randomThree = Math.floor(Math.random() * 5);

  // Map numbers to emojis
  document.querySelector('#reelOne').innerText = getEmoji(randomOne);
  document.querySelector('#reelTwo').innerText = getEmoji(randomTwo);
  document.querySelector('#reelThree').innerText = getEmoji(randomThree);

  // Check for win condition
  if (randomOne === randomTwo && randomTwo === randomThree) {
    document.querySelector('#message').innerText = '🎉 You win! 🎉';
    balance += 50;
  } else {
    document.querySelector('#message').innerText = '❌ Try again! ❌';
  }

  document.querySelector('#balance').innerText = balance;
}

function getEmoji(value) {
  if (value === 0) return '🍒'; // Cherry
  if (value === 1) return '🍋'; // Lemon
  if (value === 2) return '🍊'; // Orange
  if (value === 3) return '🍉'; // Watermelon
  if (value === 4) return '⭐'; // Star
}
