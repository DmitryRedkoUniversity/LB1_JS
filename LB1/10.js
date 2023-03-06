function word_edit(mass){
    var sum=0;
    for(let i=0; i<mass.length; i++){
        mass[i]=mass[i].charAt(0).toUpperCase()+mass[i].slice(1).toLowerCase();
    }
    return mass
    }

var button = document.getElementById('But');
button.addEventListener("click",main);


function main(){
    var str = document.getElementById('Arr').value;
    var out = document.getElementById('out');
    
    var regex = /^[а-яa-zА-ЯA-Z\s]+$/; 
    if(regex.test(str) === false) {
        out.value="Error: enter words consisting of a-z(A-Z) or а-я(А-Я)";
    } else {
        var mass = str.split(" ");
        out.value=word_edit(mass);


    }
}