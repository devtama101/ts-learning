var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Variables and Types
var age = 10;
var fullName = "Tama";
var isAlive = true;
// Functions
function add(a, b) {
    return a + b;
}
console.log("Add: a + b = ".concat(add(3, 0)));
// Object and Arrays
// let user: {fullName:string; age:number} = { fullName: "Topik", age: 26};
var numbers = [1, 3, 5, 7, 9];
// console.log(`Name: ${user.fullName}`,numbers);
// Control Flow
for (var i = 4; i < 5; i++) {
    console.log(i);
}
if (age > 18) {
    console.log("Adult");
}
else {
    console.log("Minor");
}
// Object-Oriented JavaScript with TypeScript
var Person = /** @class */ (function () {
    function Person(fullName) {
        this.fullName = fullName;
    }
    Person.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.fullName));
    };
    return Person;
}());
var person = new Person("Martin Gaye");
person.greet();
var user = {
    id: 2,
    name: "Boi",
    age: 24,
    email: "example@email.com",
    greet: function () {
        console.log("Hello, my name is ".concat(this.name));
    },
};
console.log(user);
user.greet();
// Class Modifiers
var Car = /** @class */ (function () {
    function Car(make, engine) {
        this.make = make;
        this.engine = engine;
    }
    Car.prototype.start = function () {
        console.log("Starting the engine..,");
    };
    Car.prototype.repair = function () {
        console.log("Repairing the engine...");
    };
    return Car;
}());
var car = new Car("BMW M3", "v12");
console.log(car);
car.start();
// Abstract Class
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function () {
        console.log("Moving...");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.makeSound = function () {
        console.log("Bark");
    };
    return Dog;
}(Animal));
var dog = new Dog();
dog.move();
dog.makeSound();
// Interface Contract Enforcement
var Profile = /** @class */ (function () {
    function Profile(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    Profile.prototype.greet = function () {
        console.log("Hi! My name is ".concat(this.name));
    };
    return Profile;
}());
var profile = new Profile(90, "Mamat", 30);
console.log(profile);
profile.greet();
// Generics
function identity(arg) {
    return arg;
}
console.log(identity(5));
console.log(identity("Aing"));
