"use strict";
// let message: string = "Hello World";
// console.log(message);
Object.defineProperty(exports, "__esModule", { value: true });
//1.Array
// let array: number[] = [1, 2, 3];
//Usage
// array = [1];
// array = [1, 2, 3, 4, 5];
//Tuple
// let tuple: [number, number] = [0, 0];
//Usage
// tuple = [1, 1];
// tuple = [2, 6];
// tuple = [5]; //Error: must be 2 items
// tuple = [5, 4, 3]; //Error: must be 2 items
//2.Object types and type aliases
//type aliases
// type Point = {
//   x: number;
//   y: number;
// };
// let center: Point = {
//   x: 0,
//   y: 0,
// };
//3.functions
// function add(a: number, b: number): number {
//   return a + b;
// }
// function log(message: string): void {
//   console.log("LOG:", message);
// }
// function sum(...values: number[]): number {
//   return values.reduce((previous, current) => {
//     return previous + current;
//   });
// }
//4.Structural typing
// type User = {id:string};
// type Product = {id:string};
// let user:User = {id:"user-asfe23"};
// let product:Product = {id: 'product-fwefw575'};
// type Point2D = {x:number,y:number};
// type Point3D = {x:number,y:number,z:number};
// //Extra info ok
// let point2D: Point2D = {x:0,y:10};
// let point3D: Point3D = {x:0,y:10,z:20};
// //Error:missing info
// point3D = point2D;
// function takesPoint3D(point:Point3D){}
// takesPoint3D(point2D);
//5. Classes
// class Animal {
//   protected name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   public move(distanceInMeters: number): void {
//     console.log(`${this.name} moved ${distanceInMeters}`);
//   }
// }
// let cat = new Animal("Cat");
// cat.move(10);
// class Bird extends Animal {
//   fly(distanceInMeters: number) {
//     console.log(`${this.name} flew ${distanceInMeters}`);
//   }
// }
//6.Generics
// class Queue<T>{
//     data = [];
//     push(item:T){
//         this.data.push(item);
//     }
//     pop():T {
//         return this.data.shift();
//     }
// }
// const queue = new Queue<number>();
// queue.push(33);
// queue.push('kdjf');
// let exampleAny: any;
// let exampleUnknown: unknown;
// any
// exampleAny = 123;
// exampleAny = "Hello";
// //unknown
// exampleUnknown = 123;
// exampleUnknown = "World";
// //any
// let anySetBool: boolean = exampleAny;
// //unknown
// if (typeof exampleUnknown == "string") {
//   exampleUnknown.trim();
// }
// if (typeof exampleUnknown == "boolean") {
//   let unknownSetBoolean: boolean = exampleUnknown;
// }
// //8.type assertions
// function load() {
//   return "";
// }
// let hello = load();
// const trimmed = (hello as string).trim();
// //9.type casting
// let leet;
//later
// leet = "1337";
// //Use as number
// const number = +leet;
// //no type casting in typescript
// //if you want to do it, then you can use same approach in javascript.
// //10.type declarations
// console.log("Logged in user:", process.env.USER);
// declare const process: any;
//async await
// function timer() {
//   setTimeout(() => {
//     console.log("1s");
//     setTimeout(() => {
//       console.log("2s");
//       setTimeout(() => {
//         console.log("3s");
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }
// timer();
// const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
// const mainAsync = async () => {
//   await delay(1000);
// };
// mainAsync();
//intermediate
//1.Lexical this
// class Person {
//   private _age: number;
//   constructor(_age: number) {
//     this._age = _age;
//   }
//   growOld = () => {
//     this._age++;
//   };
//   age() {
//     return this._age;
//   }
// }
// const person = new Person(0);
// const growold = person.growOld;
// setTimeout(() => person.growOld(), 1000);
// // growold();
// setTimeout(() => {
//   console.log("age: ", person.age());
// }, 1000);
// //2.readonly modifier
// type Point = {
//   readonly x: number;
//   readonly y: number;
// };
// const point: Point = {
//   x: 0,
//   y: 0,
// };
//variable assignment
// point = {x:1, y:1};
//property assignment
// point.x = 1;
// point.y = 1;
// console.log(point);
//Property read
// console.log(`${point.x}, ${point.y}`);
// class Animal{
//   public readonly name:string;
//   constructor(name:string){
//     this.name = name;
//   }
// }
// const sheep = new Animal('sheep');
// console.log(sheep.name);
// sheep.name = 'wolf';
//3.Union types
// function formatCommandline(input: string | string[]) {
//   let line = "";
//   if (typeof input === "string") {
//     line = input.trim();
//   } else {
//     line = input.map((x) => x.trim()).join(" ");
//   }
//   return line;
// }
// console.log(formatCommandline("hello ")); // 'hello'
// console.log(formatCommandline(["hello", " world"])); //'hello world'
// console.log(formatCommandline(1337));
//4.Literal types
// let direction:'North' | 'East' | 'South' | 'West';
// direction = 'North';
// direction = 'n0r7h';
// type CardinalDirection = "North" | "East" | "South" | "West";
// let direction: CardinalDirection;
// function move(distanceMeters: number, direction: CardinalDirection) {
//   console.log(`Moving ${distanceMeters} meters towards ${direction}`);
// }
// type DiceValue = 1 | 2 | 3 | 4 | 5 | 6;
// function rollDice() {
//   return (Math.floor(Math.random() * 6) + 1) as DiceValue;
//}
// if(rollDice() === 7){
//   throw new Error('not possible');
// }
//5.Type Narrowing
// function padLeft(value: string, padding: number | string) {
//   if (typeof padding === "number") {
//     return Array(padding + 1).join(" ") + value;
//   }
//   if (typeof padding === "string") {
//     return padding + value;
//   }
//   throw new Error(`Expected number or string, got '${padding}'.`);
// }
// padLeft("Hello world", 4); //'   Hello world'
// padLeft("Hello world", " "); //' Hello world'
// padLeft("Hello world", "---"); //'---Hello world'
// class Cat {
//   meow() {
//     console.log("meow");
//   }
// }
// class Dog {
//   bark() {
//     console.log("woof");
//   }
// }
// type Animal = Cat | Dog;
// function speak(animal: Animal) {
//   if (animal instanceof Cat) {
//     animal.meow();
//   }
//   if (animal instanceof Dog) {
//     animal.bark();
//   }
// }
// type Square = {
//   size: number;
// };
// type Rectangle = {
//   width: number;
//   height: number;
// };
// type Shape = Square | Rectangle;
// function area(shape: Shape) {
//   if('size' in shape){
//     return shape.size * shape.size;
//   }
//   if('width' in shape){
//     return shape.width * shape.height;
//   }
// }
// area({ size: 2 }); //4
// area({ width: 2, height: 3 }); //6
//6.Discriminated Unions
// type Square = {
//   kind: "square";
//   size: number;
// };
// type Rectangle = {
//   kind: "rectangle";
//   width: number;
//   height: number;
// };
// type Shape = Square | Rectangle;
// function area(shape: Shape) {
//   if (shape.kind === "square") {
//     return shape.size * shape.size;
//   }
//   if (shape.kind === "rectangle") {
//     return shape.width * shape.height;
//   }
// }
// type ValidationSuccess = {
//   isValid: true;
//   validatedValue: string;
// };
// type ValidationFailure = {
//   isValid: false;
//   errorReason: string;
// };
// type validationResult = | ValidationSuccess | ValidationFailure;
// function logResult(result: validationResult) {
//   if (result.isValid) {
//     console.log("Success, validated value: ", result.validatedValue);
//   }
//   if (result.isValid === false) {
//     console.error("Failure, error reason", result.errorReason);
//   }
// }
//7. Class Parameter Properties
// class Person{
//   public name: string;
//   public age: number;
//   constructor(name:string,age:number){
//     this.name = name;
//     this.age = age;
//   }
// }
//can remove the duplicates from above to below only be initializing it in constructor parameter
// class Person{
//   constructor(public name:string,public age:number){
//     this.name = name;
//     this.age = age;
//   }
// }
// const adam = new Person('Adam', 120000);
// console.log(adam.name,adam.age);//'Adam',120000
//8. Strict compiler option
//with strict: false
// type User = {
//   name: string,
//   age: number
// };
// const users: User[] = [
//   {name:'Oby', age:12},
//   {name:'Heera', age:32}
// ]
// function getUserAge(name:string):number{
//   const user = users.find(user => user.name === name);
//   return user?.age;
// }
//with strict:true
// type User = {
//   name: string,
//   age: number
// };
// const users: User[] = [
//   {name:'Oby', age:12},
//   {name:'Heera', age:32}
// ]
// function getUserAge(name:string):number{
//   const user = users.find(user => user.name === name);
//   if(user == null){
//     throw new Error(`User not found: ${name}`)
//   }
//   return user.age;
// }
//9.Null versus undefined
null == undefined; //true
let union;
const name = { name: "Jane" };
const age = { age: 29 };
const nameAndAge = { name: "Jane", age: 29 };
union = name;
union = age;
union = nameAndAge;
// let intersection: Intersection;
// intersection = nameAndAge;
// intersection = name;//Error
// intersection = age;//Error
// function filter(union:Union){
//   if('name' in union){
//     union.name;//string
//   }
//   if('age' in union){
//     union.age;//number
//   }
//   if('name' in union && 'age' in union){
//     union.name;
//     union.age;
//   }
// }
