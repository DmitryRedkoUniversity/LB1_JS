function consecutive(num) {
    console.log(/[0123456789]/.test("in 1992"));
}

function main() {
    let inputNumber = Number(document.getElementById('input').value.replaceAll(' ', ''));
    document.getElementById('output').value = consecutive(inputNumber)
}

let button = document.getElementById('button');
button.addEventListener("click", main);
