function reduceEndingPunctuation(str) {
  return str.replace(/(!+|\?+)$/, (match) => match.slice(-1));
}

function main() {
  let inputString = document.getElementById('input').value;
  document.getElementById('output').value = reduceEndingPunctuation(inputString)
}

let button = document.getElementById('button');
button.addEventListener("click", main);
