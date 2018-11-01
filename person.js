/*
Write a Person class with a constructor that takes a first and last name.

Write a getter that returns the full name

Write a setter that sets a nickname.
*/

class Person {

  constructor(props){
    this.firstName = props.firstName
    this.lastName = props.lastName
  }

  get FullName(){
    return `Hello, my name is ${this.firstName} ${this.lastName}. But I usually go by ${this.nickname}`
  }
  set Nickname (props) {
    this.nickname = props;
}
}

const person1 = new Person({
  firstName: "Kelly",
  lastName: "Morin"
})

person1.nickname = "Pumpkin";

console.log(person1)
console.log(person1.FullName)