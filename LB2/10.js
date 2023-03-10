function word_edit(mass){
    res=[]
    for(let i=0; i<mass.length; i++){
        if(mass[i].length == [...new Set(mass[i])].length && mass[i].length!=0)
            res.push(mass[i])
    }
    if(res.length==0)
        res.push("There are no strings in the specified strings only of unique characters")
    return res
}

var button = document.getElementById('But');
button.addEventListener("click",main);


function main(){

    let str = document.getElementById('Arr').value;
    let out = document.getElementById('out');
    var mass = str.split("\n");
    out.value=word_edit(mass);

}

