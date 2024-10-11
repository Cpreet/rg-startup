---
Title: Javascript variables
Author: Charanpreet Chawla
Date: Friday 11 October 2024 11:27:59 AM IST
---

# Javascript variables

- In any modern language, variables are **named storage** places for data. These named storage places are known as **Identifiers**
- The data stored in the variable can be referenced by the name of the variable
- In the above snippet below, the variable is 'a' and it stores the value '2'.

```javascript
var a = 2;
console.log(a);

// output: 2
```

## Javascript literals

- Literals are tokens in javascript that represent a value in javascript memory. eg. the value '2' is represented by the token '2'.
- Literals can never change the internal representation.
- Literals are used by developers to store values in variables without referring to the internal representation (machine code).

- There are generally **three** types of literals also known as **primitives** in javascript.

  - _strings_: these are literals which store the groups of utf-8 characters in one place.

    - eg. "hello" is a string.
    - eg. 'hello' is also a string.

  - _numbers_: these are literals which store numeric data in ieee floating point format.

    - eg. 23 is a number.
    - eg. 23.00 is also a number.

  - _booleans_: these are literals that store a 1bit value of true or false represented by **true** or **false**.

    - there are only 2 values for a boolean either true or false

- The rest of javascript is derived from objects [[objectsAndArrays]].

- There are 8 primitive datatypes

  - String
  - Number
  - Bigint
  - Boolean
  - Undefined
  - Null
  - Symbol
  - Object

- These primitives and datatypes form the basis of types of data that can be stored and moved around in javascript.

## Declaring variables

- When using variables, we need to declare them and then initialize them.

  - _Declaring_: is the process of telling javascript that a variable with the given name (identifier) exists in the current program.
  - _Initializing_: is the process of assigning a value to a declared variable.

- Declaration can be done with 3 keywords.
  - var: global scope, mutable, variable declaration with hoisting.
  - let: block(local) scope, mutable, variable declaration without hoisting.
  - const: block(local) scope, immutable, variable declaration without hoisting.

```javascript
var a;
let b;
const c;

// these are all declared variables.
```

- Variables if declared but not initialized are initialized automatically with the value _undefined_.

```javascript
let a;
console.log("a is: ", a);

// output "undefined";
```

- Variables can be initialized when they are declared or after Declaration

```javascript
var a = 1;
let b = 2;
// or

var c;
c = 1;
let d;
d = 1;
```

- constants (variables declared with const accessor) have to be initialized in the same line as their initial values cannot be changed.
