// Generics
function identity<T>(value: T): T {
  return value;
}

const numberResult = identity<number>(5); // T is number
const stringResult = identity<string>("Hi There!"); // T is string
console.log(numberResult, stringResult);

// Generic Interfaces
interface Box<T> {
  content: T;
}

const stringBox: Box<string> = { content: "Hello" };
const numberBox: Box<number> = { content: 123 };
const booleanBox: Box<boolean> = { content: true };

console.log(stringBox, numberBox, booleanBox);

// Generic Constraints
interface HasLength {
  length: number;
}

function logLength<T extends HasLength>(item: T): void {
  console.log(item.length);
}

logLength("Hi There!"); // String has length property, so this works
logLength([1, 2, 3]); // Array has length property, so this works

// logLength(123); // Error: Number doesn't have a length property

// Generic Classes
class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T): void {
    this.data.push(item);
  }

  getItem(index: number): T {
    return this.data[index];
  }
}

const stringStorage = new DataStorage<string>();
stringStorage.addItem("Hello Baby!");
console.log(stringStorage.getItem(0)); // Output: Hello Baby!

const numberStorage = new DataStorage<number>();
numberStorage.addItem(41);
console.log(numberStorage.getItem(0)); // Output: 41
