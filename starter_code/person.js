class Person {
  constructor(name, originFloor, destinationFloor){
    this.name = name;
    this.originFloor = originFloor;
    this.destinationFloor = destinationFloor;
    this.direction = '';
  }
  checkDirection(){ 
    (this.destinationFloor - this.originFloor > 0) ? this.direction = 'Up' : this.direction = 'Down';
  }
}

module.exports = Person;
