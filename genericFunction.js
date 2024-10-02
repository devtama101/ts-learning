// Generics
function identity(value) {
    return value;
}
var numberResult = identity(5); // T is number
var stringResult = identity("Hi There!"); // T is string
console.log(numberResult, stringResult);
var stringBox = { content: "Hello" };
var numberBox = { content: 123 };
var booleanBox = { content: true };
console.log(stringBox, numberBox, booleanBox);
function logLength(item) {
    console.log(item.length);
}
logLength('Hi There!'); // String has length property, so this works
logLength([1, 2, 3]); // Array has length property, so this works
// logLength(123); // Error: Number doesn't have a length property
// Generic Classes
var DataStorage = /** @class */ (function () {
    function DataStorage() {
        this.data = [];
    }
    DataStorage.prototype.addItem = function (item) {
        this.data.push(item);
    };
    DataStorage.prototype.getItem = function (index) {
        return this.data[index];
    };
    return DataStorage;
}());
var stringStorage = new DataStorage();
stringStorage.addItem("Hello Baby!");
console.log(stringStorage.getItem(0)); // Output: Hello
var numberStorage = new DataStorage();
numberStorage.addItem(41);
console.log(numberStorage.getItem(0));
