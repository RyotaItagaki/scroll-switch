const red = document.getElementById('red');
const scrollAmount = document.getElementById('scroll-amount');

window.addEventListener('scroll', () => {
  const scroll = window.scrollY;
  scrollAmount.innerHTML = scroll;
  if (scroll > 500) {
    red.classList.add('red');
  } else {
    red.classList.remove('red')
  }
})