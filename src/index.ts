// let message: string = "Hello World";
// console.log(message);

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

//10. Intersection types
// type Person = {
//   name: string
// }
// type Email = {
//   email: string
// }
// type Phone = {
//   phone: string
// }

// function contact(details: Person & Email & Phone){

// }

//11.Optional modifier
// type Person = {
//   name: string,
//   email: string,
//   phone?: string
// }

// const bruce: Person = {
//   name: 'Bruce',
//   email: 'belt@example.com',
//   phone: '911'
// }

// const alfred : Person = {
//   name: 'Alfred',
//   email: 'alfred@example.com'
// }

// class Point{
//   x?: number;
//   y?: number
// }

// const point = new Point();
// console.log(point.x);

// point.x = 0;
// point.x = undefined;//can assign undefined to optional value
// //point.x = null; //cannot assign null to optional value

//12.Non-null assertion operator
// type Person = {
//   name: string;
//   email?: string | null | undefined;
// };

// function sendEmail(email: string) {
//   console.log("Send email to", email);
// }

// function contact(person: Person) {
//   if (person.email == null)
//     throw new Error(`Person ${person.name} is not contactable`);
//   sendEmail(person.email);
// }

// // type Point = {
// //   x: number;
// //   y: number;
// // };

// // let point: Point;
// // function initialize() {
// //   point = { x: 0, y: 0 };
// // }
// // initialize();
// // console.log(`After initialized `, point!.x, point!.y);
// type Point = {
//   x: number;
//   y: number;
// };

// function initialize() : Point {
//  return { x: 0, y: 0 };
// }
// let point = initialize();
// console.log(`After initialized `, point.x, point.y);

//13. Interfaces
// type Point2D = {
//   x: number,
//   y: number
// }

// type Point3D = Point2D & {
//   z: number,
// }

// interface Point2D{
//   x: number,
//   y: number
// }

// interface Point3D extends Point2D{
//   z: number
// }

//14.Interface Declaration Merging

//Express Base
// export interface Request {
//   body: any;
// }

// //Express JSON
// export interface Request {
//   json: any;
// }

// //Our App
// function handleRequest(req: Request) {
//   req.body;
//   req.json;
// }

//15.Types versus Interface

//type
//Unions, Intersections(&), Primitives, Shorthand Functions, Advanced Type Functions

//interface
//Declaration Merging
//Familarity(extends)

//interface
// export interface InputProps{
//   type: 'text' | 'email',
//   value: string,
//   onChange: (newValue: string) => void,
// }

//type aliases
// export type InputProps = {
//   type: 'text' | 'email',
//   value: string,
//   onChange: (newValue: string) => void
// }

//16. never type

// const fail = (message: string) => {
//   throw new Error(message);
//   //since it is throwing some errors, it is not returning  anything, it means the return type is never
// };

// const sing = function () {
//   while (true) {
//     console.log("Never gonna give you up");
//     console.log("Never gonna let you down");
//     console.log("Never gonna run around and desert you");
//     console.log("Never gonna make you cry");
//     console.log("Never gonna say goodbye");
//     console.log("Never gonna tell a lie and hurt you");

//     //likewise, it is not returning anything, so the return type is never.
//   }
// };

// type Square = {
//   kind: "square";
//   size: number;
// };

// type Rectangle = {
//   kind: "rectangle";
//   width: number;
//   height: number;
// };

// type Circle = {
//   kind: "circle";
//   radius: number;
// };

// type Shape = Square | Rectangle | Circle;

// function area(s: Shape) {
//   if (s.kind === "square") {
//     return s.size * s.size;
//   } else if (s.kind === "rectangle") {
//     return s.width * s.height;
//   } else if (s.kind === "circle") {
//     return Math.PI * s.radius ** 2;
//   }
//   const _onsureAllCasesAreHandled: never = s;
//   return _onsureAllCasesAreHandled;
// }

//17. implements keyword
// type Animal = {
//   name: string;
//   voice(): string;
// };

// function log(animal: Animal) {
//   console.log(`Animal ${animal.name}: ${animal.voice()}`);
// }

// class Cat implements Animal {
//   constructor(public name: string) {}
//   voice() {
//     return "meow";
//   }
// }
// class Dog implements Animal {
//   constructor(public name: string) {}
//   voice() {
//     return "woof";
//   }
// }

// //18. Definite Assignment Assertion
// let dice!: number;
// function rollDice(){
//   dice = (Math.floor(Math.random()*6) + 1);
// }
//one way
// rollDice();
// console.log('Current Dice Value', dice!);

//second way
// rollDice();
// console.log('Current Dice Value', dice);

// class Point{
//   x!: number;
//   y!: number;
//   constructor(){
//     this.moveRandom();
//   }
//   moveRandom(){
//     this.x = Math.random();
//     this.y = Math.random();
//   }
// }

//User defined type guards

// type Square = {
//   size: number;
// };

// type Rectangle = {
//   width: number;
//   height: number;
// };

// type Shape = Square | Rectangle;

// //add user defined type guards
// function isSquare(shape: Shape): shape is Square {
//   return "size" in shape;
// }
// function isRectangle(shape: Shape): shape is Rectangle {
//   return "width" in shape;
// }

// function area(shape: Shape) {
//   if (isSquare(shape)) {
//     return shape.size * shape.size;
//   }
//   if (isRectangle(shape)) {
//     return shape.width * shape.height;
//   }
//   const _ensure: never = shape;
//   return _ensure;
// }

//Assertion functions

// function loadPerson() {}
// type Person = {
//   name: string,
//   dateOfBirth?: Date
// };
// function assert(condition: unknown,message: string):asserts condition{
//   if(!condition) throw new Error(message);
// }

// const maybePerson = loadPerson();

// assert(maybePerson != null,'Could not load person');
// console.log('Name:',maybePerson.name);

// Application Code                Application Tests
// - User Defined Type Guards      - Assertion functions

//function overloading
// function reverse(string: string): string;
// function reverse(stringArray: string[]): string[];
// function reverse(stringOrStringArray: string | string[]) {
//   if (typeof stringOrStringArray == "string") {
//     return stringOrStringArray.split("").reverse().join("");
//   } else {
//     return stringOrStringArray.slice().reverse();
//   }
// }
// const hello = reverse("hello");
// const h_e_l_l_o = reverse(["h", "e", "l", "l", "o"]);

// function makeDate(timestamp: number): Date;
// function makeDate(year: number, month: number, day: number): Date;

// function makeDate(timestampOrYear: number, month?: number, day?: number): Date {
//   if (month != null && day != null) {
//     return new Date(timestampOrYear, month - 1, day);
//   } else {
//     return new Date(timestampOrYear);
//   }
// }

// const doomsday = makeDate(2000, 1, 1);
// const epoch = makeDate(0);

// const invalid = makeDate(2000, 1, 2);

// //call signatures
// type AdD = {
//   (a: number, b: number): number;
//   debugName?: string;
// };
// type Add = (a: number, b: number) => number;

// const add: AdD = (a: number, b: number) => {
//   return a + b;
// };

// add.debugName = "Addition Function";

// //abstract classes
// abstract class Command {
//   abstract commandLine(): string;

//   execute() {
//     console.log(`executing:`, this.commandLine());
//   }
// }

// class GitResetCommand extends Command {
//   commandLine() {
//     return "git reset --hard";
//   }
// }

// new GitResetCommand().execute();
// // new Command()//Error:cannot create abstract instance

// //index signatures
// type Person = {
//   displayName: string;
//   email: string;
// };

// //example of index signature
// type PersonDictionary = {
//   [username: string]: Person;
//   // jane: Person;
// };

// const persons: PersonDictionary = {
//   jane: { displayName: "Jane Doe", email: "jane@example.com" },
// };

// //Readonly arrays and Tuples
// function reverseSorted(input: readonly number[]): number[] {
//   return input.slice().sort().reverse();
// }

// const start = [1, 2, 3, 5, 4];
// const result = reverseSorted(start);
// console.log(result);
// console.log(start);

// type Point = readonly [number, number];

// function move(point: Point, x: number, y: number): Point {
//   return [point[0] + x, point[1]+y]
// }
// const point: Point = [0, 0];
// const moved = move(point, 10, 10);

// console.log(moved); //[10,10]
// console.log(point); //[0,0]

//double assertion
// type Point2D = { x:number, y: number};
// type Point3D = { x: number, y: number, z:number};
// type Person = {name:string,email:string};

// let point2: Point2D = {x:0,y:0};
// let point3: Point3D = {x:10,y:10,z:10};
// let person: Person = {name:'John', email:'john@example.com'};

// point2 = point3;
// point3 = point2;//Error
// point3 = point2 as Point3D;//Ok I trust you

// person = point3;//Error
// point3 = person;//Error
// point3 = person as Point3D;//Error: I dont' trust you enough
// point3 = person as unknown as Point3D;//OK: I doubly trust you

//const Assertion
// const king = 'elvis';
// king = 'john';//Error
// const upperCased = king.toUpperCase();//king === 'elvis

// const dave = {
//   name: 'dave',
//   role: 'drummer',
//   skills:['drumming','headbanging']
// } as const;

// dave = {
//   name:'grohl',
//   role:'singer',
//   skills:['singing','drumming','headbanging']
// }

// dave.name = 'grohl';
// dave.role = 'singer';
// dave.skills.unshift('singing');

// function layout(settings: {
//   align: "left" | "center" | "right";
//   padding: number;
// }) {
//   console.log("Performing layout:", settings);
// }

// const example = {
//   align: "left",
//   padding: 0,
// } as const;

// layout(example);

//this parameter
// function double(this: { value: number }) {
//   this.value = this.value * 2;
// }

// const valid = {
//   value: 10,
//   double,
// };

// valid.double();
// console.log(valid.value);

// const invalid = {
//   valve: 10,
//   double,
// };
// invalid.double(); //Error

//Generic Constraints
// type NameFields = { firstName: string; lastName: string };
// function addFullName<T extends NameFields>(obj: T): T & { fullName: string } {
//   return {
//     ...obj,
//     fullName: `${obj.firstName} ${obj.lastName}`,
//   };
// }

// const john = addFullName({
//   email: "john@example.com",
//   firstName: "John",
//   lastName: "Doe",
// });

// console.log(john.email);
// console.log(john.fullName);

// const jane = addFullName({ firstName: "Jane", lastName: "Austen" });

// //Dealing with temporal uncertainty
// let example: string | null = forExample();
// if (example != null) {
//   const exampleLocal = example;
//   setTimeout(() => {
//     console.log(exampleLocal.toUpperCase);
//   });
//   example = null;
// }

//Section 4 - Expert
//type of type operator

// const center = {
//   x: 0,
//   y: 0,
//   z: 0,
// };

// type Point = typeof center;

// //Later
// const unit: Point = {
//   x: center.x + 1,
//   y: center.y + 1,
//   z: center.z + 1,
// };

// const personResponse = {
//   name: "john",
//   email: "john@example.com",
//   firstName: "John",
//   lastName: "Doe",
// };

// type PersonResponse = typeof personResponse;

// function processResponse(person: PersonResponse){
//   console.log('Full name:' , `${person.firstName}${person.lastName}`);
// }

//mappedtypes
//  export type Point = {
//  x:number,
//   y:number,
//   z:number
// }

// const center: Readonly<Point> = {
//   x:0,
//   y:2,
//   z:0
// }

// center.x = 100;

//mapped type modifiers
// export type Point = {
//   readonly x: number;
//   y?: number;
// };

// export type Mapped<T> = {
//   readonly [P in keyof T]: T[P];
// };

// export type Result = Mapped<Point>;

// export type Partial<T> = {
//   [P in keyof T]?: T[P];
// };

// export class State<T> {
//   constructor(public current: T) {}
//   update(next: Partial<T>) {
//     this.current = { ...this.current, ...next };
//   }
// }

// const state = new State({x:0,y:0});
// state.update({y:123});
// console.log(state.current);//{x:0,y:123}

// //template literal type
// let jsStringLiteral;
// jsStringLiteral = 'hello';
// jsStringLiteral = 'whatever';

// let jsTemplateLiteral;
// jsTemplateLiteral =  `Example: ${jsStringLiteral}`;//Example:whatever
// jsTemplateLiteral = `Example: ${3.14}`;//Example: 3.14

// let str: string;
// str = 'whatever you want';

// let strLiteral: 'hello';
// strLiteral = 'hello';
// strLiteral = 'hello';//Error: not 'hello'

// let templateLiteral: `Example: ${string}`;
// templateLiteral = 'Example: hello';
// templateLiteral = 'Example: world';
// templateLiteral = 'without an Example prefix';//Error: not `Example: ${string}`

// type CSSValue = | number | `${number}px` | `${number}em` | `${number}rem`

// function size(input:CSSValue){
//   return typeof input == 'number' ? input + 'px' : input;
// }

// size(123);
// size('123px');
// size('12em');
// size('12ex');

// type Size = 'small' | 'medium' | 'large';
// type Color = 'primary' | 'secondary';

// type Style = `${Size}-${Color}`;

// function applyStyle(style:Style) {

// }

// applyStyle("small-primary");
// applyStyle("large-secondary");
// applyStyle("medium-primary");
// applyStyle("lll");

//keyof type

// type Person = {
//   name: string;
//   age: number;
//   location: string;
// };

// const john: Person = {
//   name: "John",
//   age: 35,
//   location: "Melbourne",
// };

// function logGet<Obj, Key extends keyof Obj>(
//   obj: Obj,
//   key: Key,
//   value: Obj[Key]
// ) {
//   // const value = obj[key];
//   obj[key] = value;
//   console.log("getting", key, value);
//   return value;
// }

// logGet(john, "location", "Connecticut");

// //conditional types with Unions and never
// function error(message: string): never {
//   throw new Error(message);
// }

// const notAllowed: never = "some string";

// const allowed: never = error("this is okay");
// const example: string = error("i will not return");

// export type NoEmpty<T> = T extends null | undefined ? never : T;

// type Example = NoEmpty<string | null>;

// type Expand0 = NoEmpty<string> | NoEmpty<null>;

// //infer keyword and ReturnType<T>

// type isArray<T> = T extends Array<infer Member> ? "array" : "other";

// type WithArray = isArray<string[]>;
// type withNotArray = isArray<number>;

// type UnboxArray<T> = T extends Array<infer Member> ? Member : T;

// type UnboxedStringArray = UnboxArray<string[]>;
// type UnboxedNumberArray = UnboxArray<number[]>;
// type AnythingElse = UnboxArray<string>;

// export function createPerson(firstName: string, lastName: string) {
//   return {
//     firstName,
//     lastName,
//     fullName: `${firstName}${lastName}`,
//   };
// }

// function logPerson(person: ReturnType<typeof createPerson>) {
//   console.log("Person:", person.firstName, person.lastName, person.fullName);
// }

// export type Partial<T> = {
//   [P in keyof T]?: T[P]
// }

// type Point = { x: number, y:number};

// //Same as `{x?: number, y?: number}
// type PartialPoint = Partial<Point>;

// class State<T>{
//   constructor(public current: T){}
//   //Only need to pass in the properties you want to be changed
//   update(next:Partial<T>){
//     this.current = {...this.current, ...next};
//   }
// }

// //Usage
// const state = new State({x:0,y:0});
// state.update({y:123});//Partial, No need to provide 'x'.
// console.log(state.current);//update successful: {x:0,y:123}

//Required<T>
// export type Required<T> = {
//   [P in keyof T]-?: T[P]
// }
// type PartialPoint = { x?: number; y?: number };

// //Same as `{x:number,y:number}`
// type Point = Required<PartialPoint>;

// type CircleConfig = {
//   color?: string;
//   radius?: number;
// };

// class Circle {
//   private config: Required<CircleConfig>;

//   constructor(config: CircleConfig) {
//     this.config = {
//       color: config.color ?? "green",
//       radius: config.radius ?? 0,
//     };
//   }

//   draw() {
//     console.log(this.config.color, this.config.radius);
//   }
// }

//Record

// type Persons = Record<string,{name:string,role:string}>;

// const persons: Persons = {};
// persons['000'] = {name:'John',role:'admin'};
// persons['111'] = {name:'Jane', role:'owner'};
// persons['222'] = {name:'June'}

// type Roles = "admin" | "owner";

// let peopleWithRoles: Record<Roles, string[]> = {
//   owner: ["Jane", "June"],
//   admin: ["John"],
// };

// //undefined vs optional
// type ExampleOptional = {
//   name?: string
// }

// let optional: ExampleOptional;
// optional = {name:undefined};
// optional = {};

// type ExampleUnion = {
//   name: string | undefined;
// };

// let union: ExampleUnion;
// union = { name: undefined};
// union = {};//Error: name is missing

//satisfies operator
// type Color = ColorString | ColorRGB;
// type ColorString = 'red' | 'blue' | 'purple';
// type ColorRGB = [red:number,green:number,blue:number];

// type Theme = Record<string,Color>;

// const theme:Theme = {
//   primary: 'red',
//   secondary: [0,255,0],
//   tertiary: 'purpel'
// };

// const [r,g,b] = theme.secondary;

//ThisType <T> Utility
// type Maths = {
//   double(): void;
//   half(): void;
// };

// export const math: Maths & ThisType<{ value: number }> = {
//   double() {
//     this.value *= 2;
//   },
//   half() {
//     this.value /= 2;
//   },
// };

// const obj = {
//   value: 1,
//   ...math,
// };
// obj.double();
// console.log(obj.value);
// obj.half();

//Awaited<T> Utility
// async function example<T>(input:T){
//   const output:Awaited<T> = await input;
// }

//String Manipulation Utilities
// type abba = Uppercase<'abba'>;

// type Loud = 'HELLO FAM';
// type Quiet = Lowercase<Loud>;

// type Hello = "fee fi fo fum";
// type Better = Capitalize<Hello>;

//Mapped Types as Clauses
// type State = {
//   name: string;
//   age: number
// }

// type Setters = {
//   [K in keyof State]: [value:State[K]] => void;
// };

// type SetProperty<K extends string> = `set${Capitalize<K>}`;

// type ExampleName = SetProperty<'name'>;//setName
// type ExampleAge = SetProperty<'age'>;//setAge

export type Name = { name: string };
export type Age = { age: number };

//type Union = Name | Age;
type Union = Name | Age | (Name & Age);
type Intersection = Name & Age;

let union: Union;
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
