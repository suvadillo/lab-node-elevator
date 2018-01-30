const Elevator = require('./elevator.js');
const Person = require('./person.js');

const myElevator = new Elevator();
myElevator.start();

const person1 = new Person('lola1', 0, 5);
const person2 = new Person('juan2', 2, 0);
const person3 = new Person('carmen3', 5, 10);
const person4 = new Person('pepe4', 5, 10);
const person5 = new Person('maria5', 8, 3);
const person6 = new Person('manolo6', 8, 0);

const peopleElevator = [person1, person2, person3, person4, person5, person6];
peopleElevator.forEach((elem)=> elem.checkDirection());
peopleElevator.forEach((elem)=> myElevator.call(elem));
