class Person {
  constructor(name = 'Unknown', age = 0, address = 'Unknown') {
    this.name = name.length != 0 ? name : "Unknown";
    this.age = age.length != 0 ? age : "Unknown";
    this.address = address.length != 0 ? address : "Unknown";
  }
}

function OutputParams(object) {
  document.getElementById('divName').innerHTML = "Имя: " + object.name;
  document.getElementById('divAge').innerHTML = "Возраст: " + object.age;
  document.getElementById('divAddress').innerHTML = "Адрес: " + object.address;
}

function main() {
  let name = document.getElementById('name').value;
  let age = document.getElementById('age').value;
  let address = document.getElementById('address').value;

  const person = new Person(name, age, address);
  OutputParams(person);
}

let button = document.getElementById('button');
button.addEventListener("click", main);

