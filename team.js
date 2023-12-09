
class Command {
    execute() {}
  }
  

  class ConcreteCommand extends Command {
    constructor(receiver) {
      super();
      this.receiver = receiver;
    }
  
    execute() {
      this.receiver.action();
    }
  }
  

  class Receiver {
    action() {
      console.log('Receiver: Performing action');
    }
  }
  

  class Invoker {
    constructor(command) {
      this.command = command;
    }
  
    executeCommand() {
      this.command.execute();
    }
  }
  

  const receiver = new Receiver();
  const command = new ConcreteCommand(receiver);
  const invoker = new Invoker(command);
  
  invoker.executeCommand();  
  