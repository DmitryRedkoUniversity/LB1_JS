function treatAsUTC(date) {
    return new Date(date).setMinutes(new Date(date).getMinutes());
}

function getDaysNumber(startDate, endDate) {
    return (treatAsUTC(endDate) - treatAsUTC(startDate)) / (24 * 60 * 60 * 1000);
}

function main() {
    let date1Input = document.getElementById('date1');
    let date2Input = document.getElementById('date2');

    let div = document.getElementById('Error');
    let result = getDaysNumber(date1Input.value, date2Input.value);

    if (isNaN(result) || result < 0) {
        div.innerHTML = "Некорректный ввод данных";
        return;
    } else {
        div.innerHTML = "";
    }

    document.getElementById('output').value = result;
}

let button = document.getElementById('button');
button.addEventListener("click", main);

