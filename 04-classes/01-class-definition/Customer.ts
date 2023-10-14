class Customer {
  firstName: string;
  lastName: string;

  constructor(theFirst: string, theLast: string) {
    this.firstName = theFirst;
    this.lastName = theLast;
  }
}

// Let's create an instance
let myCustomer = new Customer("Linh", "Tran Quang");

// myCustomer.firstName = "Linh";
// myCustomer.lastName = "Tran Quang";

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
