
const dots = document.querySelectorAll('.dot');
const pageTitle = document.getElementById('title');

function toggleDots() {
  dots.forEach((dot, index) => {
    setTimeout(() => {
      dot.classList.toggle('hidden');
    }, index * 500);
  });
}
setInterval(() => {
  toggleDots();
}, 1500);


let dotCount = 0;
setInterval(() => {
  dotCount = (dotCount + 1) % 4;
  const dots = '.'.repeat(dotCount);
  pageTitle.textContent = `Coming Soon ${dots}`;
}, 500);
