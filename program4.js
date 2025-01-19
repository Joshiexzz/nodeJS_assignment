class Person {
    constructor(age,name){
    this.age=age; 
    this.name=name; 
    }
    introduce() {
        console.log('Hi, my name is', this.name, 'and I am', this.age, 'years old');
    }
  }
  const p = new Person(21,'AJ');
  p.introduce(); 
  