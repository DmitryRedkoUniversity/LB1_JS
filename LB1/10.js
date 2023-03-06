function word_edit(mass){
    for(let i=0; i<mass.length; i++){
        mass[i]=mass[i].charAt(0).toUpperCase()+mass[i].slice(1).toLowerCase();
    }
    return mass
}

var button = document.getElementById('But');
button.addEventListener("click",main);


function main(){
    let str = document.getElementById('Arr').value;
    let out = document.getElementById('out');
    let regex = /^[а-яa-zА-ЯA-Z\s]+$/; 

    if(regex.test(str) === true) {
        var mass = str.split(" ");
        out.value=word_edit(mass);
    } else {
        out.value="Error: enter words consisting of a-z(A-Z) or а-я(А-Я)";
    }
}

