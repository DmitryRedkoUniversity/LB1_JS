function consecutive(num) {
    if (!Number.isInteger(num) || num < 2) {
        return false;
    }

    for (let a1 = 1; a1 < num / 2; a1++) {
        n = (1 - 2 * a1 + Math.sqrt(Math.pow((2 * a1 - 1), 2) + 8 * num)) / 2;
        if (Math.trunc(n) == n) {
            return true;
        }
    }
    return false;
}

function main() {
    let inputNumber = Number(document.getElementById('input').value.trim());
    document.getElementById('output').value = consecutive(inputNumber);
}

let button = document.getElementById('button');
button.addEventListener("click", main);

