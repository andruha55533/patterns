
class Component {
    operation() {}
  }
  

  class ConcreteComponent extends Component {
    operation() {
      return 'ConcreteComponent';
    }
  }
  

  class Decorator extends Component {
    constructor(component) {
      super();
      this.component = component;
    }
  
    operation() {
      return this.component.operation();
    }
  }
  

  class ConcreteDecorator extends Decorator {
    addedBehavior() {
      return 'ConcreteDecorator';
    }
  
    operation() {
      return `${super.operation()} + ${this.addedBehavior()}`;
    }
  }
  

  const component = new ConcreteComponent();
  const decorator = new ConcreteDecorator(component);
  console.log(decorator.operation());  
  