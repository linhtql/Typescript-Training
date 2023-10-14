var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
// Let's create an instance
var myCustomer = new Customer("Linh", "Tran Quang");
// myCustomer.firstName = "Linh";
// myCustomer.lastName = "Tran Quang";
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
