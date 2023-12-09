
class Context {
    constructor() {
      this.state = null;
    }
  
    setState(state) {
      this.state = state;
    }
  
    request() {
      if (this.state) {
        this.state.handle();
      }
    }
  }
  
  
  class State {
    handle() {}
  }
  

  class ConcreteStateA extends State {
    handle() {
      console.log('ConcreteStateA is handling the request');
    }
  }
  
  
  class ConcreteStateB extends State {
    handle() {
      console.log('ConcreteStateB is handling the request');
    }
  }
  
 
  const context = new Context();
  const stateA = new ConcreteStateA();
  const stateB = new ConcreteStateB();
  
  context.setState(stateA);
  context.request();  
  
  context.setState(stateB);
  context.request();  
  