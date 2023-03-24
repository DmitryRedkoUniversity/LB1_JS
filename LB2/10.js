function findUnic(mass) {
    res = [];
    for(let i=0; i < mass.length; i++){
        if(mass[i].length == [...new Set(mass[i])].length && mass[i].length != 0)
            res.push(mass[i]);
    }

    return res;
}


let button = document.getElementById('But');
button.addEventListener("click", main);

function initArray(mass) {
    return mass.split("\n");
}

function output(out,mass) {
    out.value = ''
    for(let i=0; i < mass.length; i++){
        out.value += mass[i]+'\n';
    }
}

function main() {
    let inputMass = initArray(document.getElementById('Arr').value);
    let changedMass = findUnic(inputMass);

    let div = document.getElementById('Error');
    div.innerHTML = '';
    if(changedMass.length == 0) {
        div.innerHTML = "There are no strings in the specified strings only of unique characters";
    }

    output(document.getElementById('out'), changedMass);
}

