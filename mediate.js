
class Mediator {
    notify(sender, event) {}
  }
  

  class ConcreteMediator extends Mediator {
    constructor(colleague1, colleague2) {
      super();
      this.colleague1 = colleague1;
      this.colleague2 = colleague2;
    }
  
    notify(sender, event) {
      if (sender === this.colleague1) {
        this.colleague2.handleEvent(event);
      } else {
        this.colleague1.handleEvent(event);
      }
    }
  }
  

  class Colleague {
    constructor(mediator) {
      this.mediator = mediator;
    }
  
    sendEvent(event) {
      this.mediator.notify(this, event);
    }
  
    handleEvent(event) {}
  }
  

  class ConcreteColleague extends Colleague {
    handleEvent(event) {
      console.log(`ConcreteColleague handles event: ${event}`);
    }
  }
  
 
  const mediator = new ConcreteMediator();
  const colleague1 = new ConcreteColleague(mediator);
  const colleague2 = new ConcreteColleague(mediator);
  
  mediator.colleague1 = colleague1;
  mediator.colleague2 = colleague2;
  
  colleague1.sendEvent('Event 1');  
  colleague2.sendEvent('Event 2');  