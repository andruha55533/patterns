
class AbstractProductA {
    method() {}
  }
  

  class AbstractProductB {
    method() {}
  }
  

  class ConcreteProductA1 extends AbstractProductA {
    method() {
      return 'ConcreteProductA1';
    }
  }
  

  class ConcreteProductA2 extends AbstractProductA {
    method() {
      return 'ConcreteProductA2';
    }
  }
  

  class ConcreteProductB1 extends AbstractProductB {
    method() {
      return 'ConcreteProductB1';
    }
  }
  

  class ConcreteProductB2 extends AbstractProductB {
    method() {
      return 'ConcreteProductB2';
    }
  }
  

  class AbstractFactory {
    createProductA() {}
    createProductB() {}
  }
  

  class ConcreteFactory1 extends AbstractFactory {
    createProductA() {
      return new ConcreteProductA1();
    }
  
    createProductB() {
      return new ConcreteProductB1();
    }
  }
  

  class ConcreteFactory2 extends AbstractFactory {
    createProductA() {
      return new ConcreteProductA2();
    }
  
    createProductB() {
      return new ConcreteProductB2();
    }
  }

  function clientCode(factory) {
    const productA = factory.createProductA();
    const productB = factory.createProductB();
  
    console.log(productA.method()); 
    console.log(productB.method()); 
  }
  

  const factory1 = new ConcreteFactory1();
  clientCode(factory1);
  
  const factory2 = new ConcreteFactory2();
  clientCode(factory2);
  