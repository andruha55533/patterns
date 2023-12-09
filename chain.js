
class Handler {
    setNext(handler) {
      this.nextHandler = handler;
      return handler;
    }
  
    handleRequest(request) {
      if (this.nextHandler) {
        return this.nextHandler.handleRequest(request);
      }
      return null;
    }
  }
  

  class ConcreteHandlerA extends Handler {
    handleRequest(request) {
      if (request === 'A') {
        return 'ConcreteHandlerA: Handling request A';
      } else {
        return super.handleRequest(request);
      }
    }
  }
  

  class ConcreteHandlerB extends Handler {
    handleRequest(request) {
      if (request === 'B') {
        return 'ConcreteHandlerB: Handling request B';
      } else {
        return super.handleRequest(request);
      }
    }
  }
  

  const handlerA = new ConcreteHandlerA();
  const handlerB = new ConcreteHandlerB();
  
  handlerA.setNext(handlerB);
  
  console.log(handlerA.handleRequest('A'));  
  console.log(handlerA.handleRequest('B'));  
  console.log(handlerA.handleRequest('C'));  
  