function Person(ssn, firstName, lastName) {
  this.ssn = ssn;
  this.firstName = firstName;
  this.lastName = lastName;
}
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};
let person = new Person("171-28-0926", "John", "Doe");
console.log(person.getFullName());
