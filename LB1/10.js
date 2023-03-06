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
    var out = document.getElementById('output');
    var regex = /^[a-zA-Z\s]+$/; 
    if(regex.test(str) === false) {
        out.value="Error: Input words, which contain a-z or A-Z";
    } else {
        var mass = str.split(" ");
        out.value=log(word_edit(mass));
    }
}