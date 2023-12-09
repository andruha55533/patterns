class Element {
    accept(visitor) {
      visitor.visit(this);
    }
  }
  
  class ConcreteElementA extends Element {
    operationA() {
      console.log("ConcreteElementA operation");
    }
  }
  
  class ConcreteElementB extends Element {
    operationB() {
      console.log("ConcreteElementB operation");
    }
  }
  
  class Visitor {
    visit(element) {
      // Загальний метод відвідувача
      console.log("Visitor visiting element");
    }
  }
  
  class ConcreteVisitor extends Visitor {
    visit(element) {
      if (element instanceof ConcreteElementA) {
        console.log("ConcreteVisitor visiting ConcreteElementA");
        element.operationA();
      } else if (element instanceof ConcreteElementB) {
        console.log("ConcreteVisitor visiting ConcreteElementB");
        element.operationB();
      }
    }
  }
  
  const elements = [new ConcreteElementA(), new ConcreteElementB()];
  const visitor = new ConcreteVisitor();
  
  elements.forEach((element) => {
    element.accept(visitor);
  });
  