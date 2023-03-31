class Person {
  constructor(name = 'Unknown', age = 0, gender = 'Unknown') {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

function testingOutput(object){
  let output = document.getElementById('output');
  output.value += "Person:" + '\n';
  output.value += "Name: " + object.name + '\n';
  output.value += "Age: " + object.age + '\n';
  output.value += "Gender: " + object.gender + '\n\n';
}

function main() {
  const person1 = new Person('John', 30, "male");
  const person2 = new Person('Mark', 35);
  const person3 = new Person();
  testingOutput(person1);
  testingOutput(person2);
  testingOutput(person3);
}

let button = document.getElementById('button');
button.addEventListener("click", main);

