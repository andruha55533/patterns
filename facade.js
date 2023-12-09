
class Subsystem1 {
    operation1() {
      return 'Subsystem1: operation1';
    }
  }
  

  class Subsystem2 {
    operation2() {
      return 'Subsystem2: operation2';
    }
  }
  

  class Facade {
    constructor() {
      this.subsystem1 = new Subsystem1();
      this.subsystem2 = new Subsystem2();
    }
  
    operation() {
      const result1 = this.subsystem1.operation1();
      const result2 = this.subsystem2.operation2();
      return `${result1}\n${result2}`;
    }
  }
  

  const facade = new Facade();
  console.log(facade.operation());
  