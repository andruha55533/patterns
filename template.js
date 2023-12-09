class AbstractClass {
    templateMethod() {
      this.step1();
      this.step2();
      this.step3();
    }
  
    step1() {
      console.log("Abstract step 1");
    }
  
    step2() {
      console.log("Abstract step 2");
    }
  
    step3() {
      console.log("Abstract step 3");
    }
  }
  
  class ConcreteClass extends AbstractClass {
    step2() {
      console.log("Concrete step 2");
    }
  }
  
  const concreteInstance = new ConcreteClass();
  concreteInstance.templateMethod();
  