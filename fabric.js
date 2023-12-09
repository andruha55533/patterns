
class Product {
    operation() {}
  }
  

  class ConcreteProductA extends Product {
    operation() {
      return 'ConcreteProductA';
    }
  }
  

  class ConcreteProductB extends Product {
    operation() {
      return 'ConcreteProductB';
    }
  }

  class Creator {
    factoryMethod() {
      throw new Error('Subclasses must implement this method');
    }
  

    createProduct() {
      const product = this.factoryMethod();
      return product.operation();
    }
  }
  

  class ConcreteCreatorA extends Creator {
    factoryMethod() {
      return new ConcreteProductA();
    }
  }
  

  class ConcreteCreatorB extends Creator {
    factoryMethod() {
      return new ConcreteProductB();
    }
  }
  

  const creatorA = new ConcreteCreatorA();
  console.log(creatorA.createProduct()); 
  
  const creatorB = new ConcreteCreatorB();
  console.log(creatorB.createProduct()); 
  