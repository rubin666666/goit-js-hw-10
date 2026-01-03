// Snackbar functionality
const snackbarBtn = document.getElementById('snackbar-btn');
const snackbarEl = document.getElementById('snackbar');

function showSnackbar(message = 'This is a snackbar!', duration = 3000) {
  snackbarEl.textContent = message;
  snackbarEl.classList.add('show');
  
  setTimeout(() => {
    snackbarEl.classList.remove('show');
  }, duration);
}

snackbarBtn.addEventListener('click', () => {
  showSnackbar('Button clicked! 🎉');
});
