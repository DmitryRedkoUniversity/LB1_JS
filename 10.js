function word_edit(mass){
    var sum=0;
    for(let i=0; i<mass.length; i++){
        mass[i]=mass[i].charAt(0).toUpperCase()+mass[i].slice(1).toLowerCase();
    }
    return mass
    }

var button = document.getElementById('But');
button.addEventListener("click",getmass);


function getmass(){
    var str = document.getElementById('Arr').value;
    var regex = /^[a-zA-Z\s]+$/; 
    if(regex.test(str) === false) {
        console.log("Error: Input words, which contain a-z or A-Z");
    } else {
        var mass = str.split(" ");
        console.log(mass);
        console.log(word_edit(mass));
    }
}