
class Context {
    constructor(strategy) {
      this.strategy = strategy;
    }
  
    setStrategy(strategy) {
      this.strategy = strategy;
    }
  
    executeStrategy() {
      this.strategy.execute();
    }
  }
  

  class Strategy {
    execute() {}
  }

  class ConcreteStrategyA extends Strategy {
    execute() {
      console.log('ConcreteStrategyA is executing');
    }
  }
  
  class ConcreteStrategyB extends Strategy {
    execute() {
      console.log('ConcreteStrategyB is executing');
    }
  }
  
  // Використання
  const context = new Context(new ConcreteStrategyA());
  context.executeStrategy();  
  
  context.setStrategy(new ConcreteStrategyB());
  context.executeStrategy();  
  