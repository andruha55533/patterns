
class Adaptee {
    specificRequest() {
      return 'Specific request';
    }
  }
  
  
  class Target {
    request() {}
  }
  

  class Adapter extends Target {
    constructor(adaptee) {
      super();
      this.adaptee = adaptee;
    }
  
    request() {
      return this.adaptee.specificRequest();
    }
  }
  
  
  const adaptee = new Adaptee();
  const adapter = new Adapter(adaptee);
  console.log(adapter.request()); 