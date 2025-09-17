
## 1) What is the difference between var, let, and const?

#### The difference between var let and const is let and const are introduced in ES6. 
1. let accept the change of value but const is fixed ,  once const is declared and assigned it can't be change anywhere, but let can change in the scope.
2. var is also like let it allows changes of value but it has some problem like it can be use before declaration doesn't throw errors. var can be used from anywhere, but let is only works inside the block (for, function etc.) if it is now declared globally but var wheaste upper level.
```
console.log(a) // undefine
var a;
console.log(b) //error
let b;
cosnt x = 10;
x = 12;
console.log(c) //error
```

# 2) What is the difference between map(), forEach(), and filter()? 
#### map(): map get all element and do certain things or apply a call back function then returns a array of result;
#### forEach() :  forEach do some things or apply any function but dorsn't return anythings, it just simpally get alll element then apply certain task.
#### filter(): filter works on condition, it returns all the matched element based on conditin 

# 3) What are arrow functions in ES6?
#### arrow functions are a new, shorter syntax for writing functions in JavaScript. No need for the function keyword. And if the function body is a single expression, it return automatically, if multiline then have to return manually. Arrow functions don’t have their own arguments object but normal funcition has
```
// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;
```

# 4) How does destructuring assignment work in ES6?
#### Destructuring assignment in ES6 is a way to unpack values from arrays or properties from objects into separate variables in a quick, clean way with any trouble and lines of code. 
#### for example 
```
//for array :

const numbers = [10, 20, 30];

// old way
const a = numbers[0];
const b = numbers[1];

// new way
const [x, y] = numbers;

console.log(x); // 10
console.log(y); // 20


//for object :

const person = { name: "Alice", age: 25 };

// old way
const name1 = person.name;
const age1 = person.age;

// new way
const { name, age } = person;

console.log(name); // "Alice"
console.log(age);  // 25

```

# 5) Explain template literals in ES6. How are they different from string concatenation?
#### In ES6, template literals are a new way to create strings using backticks (`) instead of quotes (' or "). it makes strings easier to read, format, and include variables and by using  ${} it is kind of a placeholder that can hold place for any valid expression in js.
#### old ways :
```const name = "Alice";
const age = 25;

const text = "My name is " + name + " and I am " + age + " years old.";
console.log(text);

//output : My name is Alice and I am 25 years old.
```
#### new ways :
```
const name = "Alice";
const age = 25;

const text = `My name is ${name} and I am ${age} years old.`;
console.log(text);

//output : My name is Alice and I am 25 years old.
```
