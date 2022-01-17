//1.
// class First {
//   constructor(hello){
//     this.hello = hello;
//   }
// }
// const first = new First('Привет я метод родителя!')
// console.log(first)

//2.
// const First = function (hello){
//   this.hello = hello
// }
// First.prototype.sayHello = function () {
//   console.log(`Здарова ${this.hello}`);
// }

// const first = new First('Привет я метод родителя!')
// first.sayHello()
// console.log(first);


//3.
class First {
constructor(hello){
    this.hello = hello;
  }
  sayHello = function () {
    console.log(`Здарова ${this.hello}`);
  }
}

//наследование
class Second extends First{
  constructor(hello, hello1 = ['А я наследуемый метод!']) {
    super(hello)
    this.hello1 = hello1
  }
}

const second = new Second('Привет я метод родителя!')
console.log(second);
second.sayHello();
//А я наследуемый метод!