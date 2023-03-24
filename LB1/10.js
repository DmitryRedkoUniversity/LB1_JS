function wordEdit(mass) {
    for(let i = 0; i < mass.length; i++){
        mass[i] = mass[i].charAt(0).toUpperCase() + mass[i].slice(1).toLowerCase();
    }
    return mass;
}

let button = document.getElementById('But');
button.addEventListener("click",main);


function main() {
    let str_input = document.getElementById('Arr').value;
    let output = document.getElementById('out');
    let regex = /^[а-яa-zА-ЯA-Z ]+$/; 

    if(regex.test(str_input) === false) {
        output.value = "Error: enter words consisting of a-z(A-Z) or а-я(А-Я)";
        return 1;
    }

    mass = str_input.split(" ");
    output.value = wordEdit(mass);
}


