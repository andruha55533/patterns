
class Observer {
    update() {}
  }
  

  class ConcreteObserver extends Observer {
    constructor(name) {
      super();
      this.name = name;
    }
  
    update() {
      console.log(`Observer ${this.name} is updated`);
    }
  }
  

  class Subject {
    constructor() {
      this.observers = [];
    }
  
    addObserver(observer) {
      this.observers.push(observer);
    }
  
    removeObserver(observer) {
      this.observers = this.observers.filter(obs => obs !== observer);
    }
  
    notifyObservers() {
      for (const observer of this.observers) {
        observer.update();
      }
    }
  }
  

  class ConcreteSubject extends Subject {
    doSomething() {
      console.log('ConcreteSubject is doing something');
      this.notifyObservers();
    }
  }
  

  const observer1 = new ConcreteObserver('1');
  const observer2 = new ConcreteObserver('2');
  const subject = new ConcreteSubject();
  
  subject.addObserver(observer1);
  subject.addObserver(observer2);
  
  subject.doSomething();  
  