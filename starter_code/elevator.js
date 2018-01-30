class Elevator {
  constructor(){
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.requests = [];
    this.direction = 'Up';
    this.interval;
    this.waitingList = []; // people calling the lift
    this.passengers = [];

  }

  start() { 
    this.interval = setInterval(() => {
      this.floorUp();
      this.update();}
      ,1000);
  }

  stop() { 
    clearInterval(this.interval);
    console.log('stop');
  }

  update() { 
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
    if (this.requests.length <= 0) this.stop();
    console.log('numero de requests: ' + this.requests.length);
  }

  _passengersEnter(indexRequest, indexWaiting) { 
    console.log(`this.requests.index: ${this.requests[indexRequest]}`)
    console.log(`requests.antes: ${this.requests}`)
    this.passengers.push[this.waitingList[indexWaiting]];
    console.log(`${this.waitingList[indexWaiting].name} has entered the elevator`);
    this.requests.push(this.waitingList[indexWaiting].destinationFloor);
    // DELETE REQUEST AND PERSON FROM THE WAITING LIST
    this.waitingList.splice(indexWaiting,1);
    this.requests.splice(indexRequest,1); 
    console.log(`requests.despues: ${this.requests}`)       
  }
  _passengersLeave(indexRequest, indexPass) { 
    console.log(`this.requests.index: ${this.requests[indexRequest]}`)
    this.passengers.splice(indexPass,1);
    this.requests.splice(indexRequest,1);
    console.log(`${this.passengers[indexPass].name} has left the elevator`);
  }
  _checkStops(direction){
    for (let i = 0; i < this.requests.length; i++) {
      if (this.requests[i] === this.floor) {
        for (let j = 0; j <  this.waitingList.length; j++) {
          if(this.floor === this.waitingList[j].originFloor && this.waitingList[j].direction === direction) {
            this.stop();
            this._passengersEnter(i,j); 
          }
        }
        for (let k = 0; k <  this.passengers.length; k++) {
          if(this.floor === this.passengers[k].destinationFloor) {
            console.log('entra en leave')
            this.stop();
            this._passengersLeave(i,k); 
          }
        }       
      }
    }
    this.start();
  }

  floorUp() { 
    this._checkStops('Up');
    if (this.floor < this.MAXFLOOR && this.direction === 'Up') {
      this.floor++;
    } else {
      this.direction = 'Down';
      this.floorDown();
    }
  }

  floorDown() { 
    this._checkStops('Down');
    if (this.floor > 0 && this.direction === 'Down') {
      this.floor--;
    } else {
      this.direction = 'Up';
      this.floorUp();
    }
  }

  call(person) { 
    this.waitingList.push(person);
    this.requests.push(person.originFloor);
  }

  log() { }
}

module.exports = Elevator;