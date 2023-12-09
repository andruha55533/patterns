
class Component {
    operation() {}
  }
  
  // Листок
  class Leaf extends Component {
    operation() {
      return 'Leaf';
    }
  }
  

  class Composite extends Component {
    constructor() {
      super();
      this.children = [];
    }
  
    add(component) {
      this.children.push(component);
    }
  
    operation() {
      const results = [];
      for (const child of this.children) {
        results.push(child.operation());
      }
      return `Composite(${results.join('+')})`;
    }
  }
  

  const leaf1 = new Leaf();
  const leaf2 = new Leaf();
  const composite = new Composite();
  composite.add(leaf1);
  composite.add(leaf2);
  
  console.log(leaf1.operation());      
  console.log(composite.operation());  
  