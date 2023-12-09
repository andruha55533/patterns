
class Product {
    constructor() {
      this.parts = [];
    }
  
    addPart(part) {
      this.parts.push(part);
    }
  
    show() {
      console.log(`Product Parts: ${this.parts.join(', ')}`);
    }
  }
  

  class Builder {
    buildPart1() {}
    buildPart2() {}
    getResult() {}
  }
  

  class ConcreteBuilder extends Builder {
    constructor() {
      super();
      this.product = new Product();
    }
  
    buildPart1() {
      this.product.addPart('Part1');
    }
  
    buildPart2() {
      this.product.addPart('Part2');
    }
  
    getResult() {
      return this.product;
    }
  }
  

  class Director {
    constructor(builder) {
      this.builder = builder;
    }
  
    construct() {
      this.builder.buildPart1();
      this.builder.buildPart2();
    }
  }
  
  
  const builder = new ConcreteBuilder();
  const director = new Director(builder);
  
  director.construct();
  const product = builder.getResult();
  product.show();
  