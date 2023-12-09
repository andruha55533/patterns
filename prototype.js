
class Prototype {
    clone() {
      return Object.create(this);
    }
  }
  
  
  const concretePrototype = new Prototype();
  
  const clone = concretePrototype.clone();
  