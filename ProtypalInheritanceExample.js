"use strict";

//prototypal inheritance

var BaseBird = {
  getName: function(){
    return this.state.name;
  },
  setName: function(name){
  	this._arr['name'] = name;
    this.state.name = name;
  },
  getFamily: function(){
    return this.state.family;
  },
  setFamily: function(family){
    this.state.family = family;
  }
}

var CanFly = {
  getMaxHeight: function(){
    return this.state.maxHeight;
  },
  setMaxHeight: function(maxHeight){
    this.state.maxHeight = maxHeight;
  },
  sharedValue: 4
};

var CanSwim = {
  getUnderWaterTime: function(){
    return this.state.underWaterTime;
  },
  setUnderWaterTime: function(profesunderWaterTimesion){
    this.state.underWaterTime = underWaterTime;
  }
}

var Bird = Object.assign({}, BaseBird);
var FlyingBird = Object.assign({}, BaseBird, CanFly);
var FwimmingBird = Object.assign({}, BaseBird, CanSwim);
var FlyingAndSwimmingBird = Object.assign({}, BaseBird, CanSwim, CanFly);
var BirdFactory = {
	create: function(birdFunctionsToBeInPrototype){
  	var bird = Object.create(birdFunctionsToBeInPrototype);
    bird.state = Object.assign({});
    bird._arr = [];
    return bird;
  } 
}

var bird1 = BirdFactory.create(Bird);
bird1.setName('bird1');
var bird2 = BirdFactory.create(Bird);
bird2.setName('bird2');

var flyingBird1 = BirdFactory.create(FlyingBird);
flyingBird1.setName('flyingBird1');
var flyingBird2 = BirdFactory.create(FlyingBird);
flyingBird2.setName('flyingBird2');

var flyingAndSwimmingBird1 = BirdFactory.create(FlyingAndSwimmingBird);
flyingAndSwimmingBird1.setName('flyingAndSwimmingBird1');
var flyingAndSwimmingBird2 = BirdFactory.create(FlyingAndSwimmingBird);
flyingAndSwimmingBird2.setName('flyingAndSwimmingBird2');