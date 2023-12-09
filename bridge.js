
class Abstraction {
    constructor(implementation) {
      this.implementation = implementation;
    }
  
    operation() {
      return `Abstraction: Base operation with:\n${this.implementation.operationImplementation()}`;
    }
  }
  

  class Implementation {
    operationImplementation() {
      return 'Implementation: Default behavior';
    }
  }
  

  class ConcreteImplementation extends Implementation {
    operationImplementation() {
      return 'ConcreteImplementation: Custom behavior';
    }
  }
  

  const implementation = new ConcreteImplementation();
  const abstraction = new Abstraction(implementation);
  console.log(abstraction.operation());
  