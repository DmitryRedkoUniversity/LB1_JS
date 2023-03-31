

let output = document.getElementById('output');

const width = window.innerWidth;
const height = window.innerHeight;

output.value = "w: "+width
output.value += "h: "+height

window.addEventListener('resize', () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  
  output.value = "w: "+width
  output.value += "h: "+height
});