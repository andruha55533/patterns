class FlyweightFactory {
    constructor() {
      this.flyweights = {};
    }
  
    getFlyweight(key) {
      if (!this.flyweights[key]) {
        this.flyweights[key] = new ConcreteFlyweight(key);
      }
      return this.flyweights[key];
    }
  }
  

  class Flyweight {
    constructor(sharedState) {
      this.sharedState = sharedState;
    }
  
    operation(uniqueState) {}
  }
  

  class ConcreteFlyweight extends Flyweight {
    operation(uniqueState) {
      return `ConcreteFlyweight: ${this.sharedState}, ${uniqueState}`;
    }
  }
  

  const factory = new FlyweightFactory();
  const flyweight1 = factory.getFlyweight('sharedState1');
  const flyweight2 = factory.getFlyweight('sharedState2');
  
  console.log(flyweight1.operation('uniqueState1'));  
  console.log(flyweight2.operation('uniqueState2'));  
  