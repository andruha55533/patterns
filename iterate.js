
class Iterator {
    next() {}
    hasNext() {}
  }
  

  class ConcreteIterator extends Iterator {
    constructor(collection) {
      super();
      this.collection = collection;
      this.index = 0;
    }
  
    next() {
      return this.collection[this.index++];
    }
  
    hasNext() {
      return this.index < this.collection.length;
    }
  }
  

  class Container {
    constructor(items) {
      this.items = items;
    }
  
    createIterator() {
      return new ConcreteIterator(this.items);
    }
  }
  

  const container = new Container([1, 2, 3, 4, 5]);
  const iterator = container.createIterator();
  
  while (iterator.hasNext()) {
    console.log(iterator.next());  
  }
  