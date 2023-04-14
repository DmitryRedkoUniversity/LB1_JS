

let heightOut = document.getElementById('H');
let widthOut = document.getElementById('W');


const width = window.innerWidth;
const height = window.innerHeight;

widthOut.innerHTML = "W: "+width
heightOut.innerHTML = "H: "+height

window.addEventListener('resize', () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  
  widthOut.innerHTML = "W: "+width
  heightOut.innerHTML = "H: "+height
});



