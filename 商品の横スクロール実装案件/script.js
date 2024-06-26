// script.js
const productContainer = document.querySelector('.product-container');

let isDown = false;
let startX;
let scrollLeft;

productContainer.addEventListener('mousedown', (e) => {
  isDown = true;
  productContainer.classList.add('active');
  startX = e.pageX - productContainer.offsetLeft;
  scrollLeft = productContainer.scrollLeft;
});

productContainer.addEventListener('mouseleave', () => {
  isDown = false;
  productContainer.classList.remove('active');
});

productContainer.addEventListener('mouseup', () => {
  isDown = false;
  productContainer.classList.remove('active');
});

productContainer.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - productContainer.offsetLeft;
  const walk = (x - startX) * 1.5; // スクロールの速さを調整
  productContainer.scrollLeft = scrollLeft - walk;
});


document.addEventListener('DOMContentLoaded', () => {
  const lineups = document.querySelectorAll('.lineup');
  const productContainers = document.querySelectorAll('.product-container');

  lineups.forEach((lineup, index) => {
    lineup.addEventListener('click', () => {
      // すべてのlineupとproduct-containerからactiveクラスを削除
      lineups.forEach(l => l.classList.remove('active'));
      productContainers.forEach(pc => pc.classList.remove('active'));

      lineup.classList.add('active');
      productContainers[index].classList.add('active');
      
    });
  });
});