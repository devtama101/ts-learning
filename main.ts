// Variables and Types
let age: number = 10;
let fullName: string = "Tama";
let isAlive: boolean = true;

// Functions
function add(a: number, b: number): number {
  return a + b;
}
console.log(`Add: a + b = ${add(3, 0)}`);

// Object and Arrays
// let user: {fullName:string; age:number} = { fullName: "Topik", age: 26};
let numbers: number[] = [1, 3, 5, 7, 9];

// console.log(`Name: ${user.fullName}`,numbers);

// Control Flow
for (let i = 4; i < 5; i++) {
  console.log(i);
}
if (age > 18) {
  console.log(`Adult`);
} else {
  console.log(`Minor`);
}

// Object-Oriented JavaScript with TypeScript
class Person {
  fullName: string;

  constructor(fullName: string) {
    this.fullName = fullName;
  }

  greet() {
    console.log(`Hello, my name is ${this.fullName}`);
  }
}
const person = new Person("Martin Gaye");
person.greet();

// Interfaces
interface User {
  readonly id: number; // read-only property
  name: string;
  age: number;
  email?: string; // Optional property
  greet?(): void; // Optional method
}

let user: User = {
  id: 2,
  name: "Boi",
  age: 24,
  email: "example@email.com",
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
};
console.log(user);
user.greet();

// Class Modifiers
class Car {
  public make: string; // accessible from outside of this class
  private engine: string; // only accessible within this class

  constructor(make: string, engine: string) {
    this.make = make;
    this.engine = engine;
  }

  public start() {
    console.log(`Starting the engine..,`);
  }

  private repair() {
    console.log(`Repairing the engine...`);
  }
}

const car = new Car("BMW M3", "v12");
console.log(car);
car.start();

// Abstract Class
abstract class Animal {
  abstract makeSound(): void;

  move() {
    console.log(`Moving...`);
  }
}
class Dog extends Animal {
  makeSound() {
    console.log("Bark");
  }
}
const dog = new Dog();
dog.move();
dog.makeSound();

// Interface Contract Enforcement
class Profile implements User {
  id: number;
  name: string;
  age: number;

  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi! My name is ${this.name}`);
  }
}
const profile = new Profile(90, "Mamat", 30);
console.log(profile);
profile.greet();

// Generics
function identity<T>(arg: T): T {
  return arg;
}
console.log(identity<number>(5));
console.log(identity<string>("Aing"));
