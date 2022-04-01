const outerGrid = document.querySelector('.outer-grid');
const nav = document.querySelector('nav');

function toggleNav () {
  outerGrid.classList.toggle('outer-grid-expand')
  nav.classList.toggle('hide-nav')
}