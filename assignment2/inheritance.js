function Animal(name,age) {
  this.name = name;
  this.age = age;
}
animal = new Animal("Dog",80)
Animal.prototype.getName = function () { return this.name; }
Animal.prototype.getAge = function () { return this.age; }
animal.getName()
animal.getAge()



function Dog(name,age) {
  Animal.call(this, name);
  this.age = age;
}
Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.getSpeechText = function () { return "Bow wow"; }
var obj = new Dog("Boxer",15)
obj.getName()
obj.getAge()
obj.getSpeechText()



function Human(name,age) {
  Animal.call(this, name);
  this.age = age;
}
Human.prototype = Object.create(Animal.prototype)
Human.prototype.getSpeechText = function () { return "Talking..."; }
var obj = new Human("Sandesh",23)
obj.getName()
obj.getAge()
obj.getSpeechText()