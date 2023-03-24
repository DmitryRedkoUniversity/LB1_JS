function isTriangle(mass) {
    if (!(mass.length == 3 && (mass[0] + mass[1] >= mass[2]) && (mass[0] + mass[2] >= mass[1]) && (mass[1] + mass[2] >= mass[0]))) {
        return "Не треугольник";
    }

    if (mass[0] == mass[1] && mass[1] == mass[2]) {
        return "Равносторонний";
    }

    else if (mass[0] == mass[1] || mass[1] == mass[2] || mass[0] == mass[2]) {
        return "Равнобедренный";
    }

    return "Разносторонний";
}

function initArray(mass) {
    return mass.split(" ").filter(n => n).map(Number);
}

function validateString(str) {
    let regex = /^[0-9. ]+$/;
    return regex.test(str) === true;
}

function main() {
    let inputString = document.getElementById('Arr').value;
    let div = document.getElementById('Error');
    if (!validateString(inputString)) {
        div.innerHTML = "Некорректный ввод данных";
        return;
    }
    div.innerHTML = "";
    let inputMass = initArray(inputString);
    document.getElementById('out').value = isTriangle(inputMass);
}

let button = document.getElementById('But');
button.addEventListener("click", main);