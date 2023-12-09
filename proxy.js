
class Subject {
    request() {}
  }
  

  class RealSubject extends Subject {
    request() {
      return 'RealSubject: Handling request';
    }
  }
  

  class Proxy extends Subject {
    constructor(realSubject) {
      super();
      this.realSubject = realSubject;
    }
  
    request() {
      if (this.checkAccess()) {
        return this.realSubject.request();
      } else {
        return 'Proxy: Access denied';
      }
    }
  
    checkAccess() {
   
      return true;
    }
  }
  

  const realSubject = new RealSubject();
  const proxy = new Proxy(realSubject);
  
  console.log(proxy.request()); 
  