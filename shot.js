class Originator {
    constructor(state) {
      this.state = state;
    }
  
    createMemento() {
      return new Memento(this.state);
    }
  
    restoreMemento(memento) {
      this.state = memento.getState();
    }
  
    showState() {
      console.log(`State: ${this.state}`);
    }
  }
  
  class Memento {
    constructor(state) {
      this.state = state;
    }
  
    getState() {
      return this.state;
    }
  }
  
  class Caretaker {
    constructor() {
      this.mementos = [];
    }
  
    addMemento(memento) {
      this.mementos.push(memento);
    }
  
    getMemento(index) {
      return this.mementos[index];
    }
  }
  
  const originator = new Originator('State1');
  const caretaker = new Caretaker();
  
  caretaker.addMemento(originator.createMemento());  
  originator.showState();                            
  
  originator.state = 'State2';
  originator.showState();                            
  
  originator.restoreMemento(caretaker.getMemento(0));  
  originator.showState();                               
  