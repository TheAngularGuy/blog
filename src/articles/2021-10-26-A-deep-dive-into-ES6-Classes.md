---
layout: "article.njk"
title: A deep dive into ES6 Classes
author: Mustapha AOUAS
date: 2021-10-26
image: https://res.cloudinary.com/practicaldev/image/fetch/s--qTl6v_sA--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/azhvn8vuqrofsidykaas.jpg
imageAlt: Blog cover representing a Class
description: Classes were introduced in ES6 (ECMA script 2015) and we can leverage them to structure our code in a traditional OOP fashion by defining a template for creating objects. In this post we'll learn everything about ES6 classes, then we will compare them with constructor functions and prototypal inheritance...
canonical: https://dev.to/mustapha/a-deep-dive-into-es6-classes-2h52
---


Classes were introduced in ECMAScript 6, and we can use them to structure our code in a traditional OOP fashion by defining a template for creating objects.
In this post we'll learn everything about ES6 classes, then we will compare them to constructor functions and prototypal inheritance.



> A quick word before we start. This article is intended to appeal to a wide range of readers. So, if you're an advanced JS user, you can use the table of contents below to select which sections to read. If, on the other hand, you're just getting started with JS and you're having trouble understanding something, feel free to ask me in the comments section.


## Table of Contents
* [Anatomy of a class](#1)
    * [The class keyword](#1-1)
    * [Constructor](#1-2)
    * [Properties](#1-3)
    * [Methods](#1-4)
    * [Getters and Setters](#1-5)
    * [Static fields and methods](#1-6)
* [Creating an object with a class](#2)
    * [The new keyword](#2-1)
    * [Hoisting](#2-2)
* [Inheritance](#3)
    * [The extends keyword](#3-1)
    * [Super](#3-2)
    * [Metadata](#3-3)
* [Comparison with Constructor functions](#4)
    * [Properties and methods](#4-1)
    * [Getters and Setters](#4-2)
    * [Prototypal inheritance](#4-3)
* [Wrap up](#5)





We will see how to define classes and how to create objects using them, then we will talk about inheritance and more - But first, let's start right away by taking a look at the anatomy of a class.


## Anatomy of a class <a name="1"></a>

### The `class` keyword <a name="1-1"></a>
To declare a class we use the `class` keyword followed by the name of the class.

#### Class declaration <a name="1-1-1"></a>

```javascript
class Point {
  constructor() {}
}
```

In the snippet above we declared a "Point" class. This is called a class declaration.
> Note that I'm using the PascalCase notation for the name of the class. This is not mandatory but a common convention.

In fact classes are special functions, and like with functions, you can use either class declarations or class expressions.

#### Class expression <a name="1-1-1"></a>

This is a class expression:

```javascript
let Point = class {
  constructor() {}
}
```

### Constructor <a name="1-2"></a>
The constructor method is a special method for creating and initialising an object created with a class.

There can only be one constructor in each class. A SyntaxError will be thrown if the class contains more than one occurrence of a constructor.

It is not mandatory to have a constructor in the class definition. The code bellow is valid.

```javascript
class Point { }
```


### Properties <a name="1-3"></a>

#### Instance properties <a name="1-3-1"></a>

Instance properties must be defined inside of class methods. In the snippet below `x` and `y` are instance properties:

```javascript
class Point {
  constructor(a, b) {
    this.x = a;
    this.y = b;
  }
}
```




#### Fields <a name="1-3-2"></a>
The code can be more self documenting by declaring fields up-front. Let's refactor the code above using fields, and while we're at it, let's give them a default value:

```javascript
class Point {
  x = 0;
  y = 0;

  constructor(a, b) {
    this.x = a;
    this.y = b;
  }
}
```
> Note that fields are always present whereas instance properties must be defined inside of class methods.
> Note also that fields can be declared with or without a default value.


#### Private fields <a name="1-3-3"></a>

To declare a private field all you have to do is prefix its name with `#`. See the code below:

```javascript
class Point {
  #x = 0;
  #y = 0;

  constructor(a, b) {
    this.#x = a;
    this.#y = b;
  }
}
```

Trying to access a private field outside the scope of the class will result in a syntax error.

> Note that instance properties can not be private, only fields can. So you can't create an instance property with the `#` prefix. This would result in a syntax error.





### Methods <a name="1-4"></a>

#### Public methods  <a name="1-4-1"></a>
To declare a method we can use the ES6 shorter syntax for method definitions on objects:

```javascript
class Point {
  #x = 0;
  #y = 0;

  translate(a, b) {
    this.#x += a;
    this.#y += b;
  }
}
```


#### Private methods <a name="1-4-2"></a>
Like we did with private fields, we can use a `#` as a prefix of our private methods:

```javascript
class Point {
  #x = 0;
  #y = 0;

  constructor(x, y) {
    this.#setXY(x, y)
  }

  translate(a, b) {
    this.#setXY(
      this.#x + a,
      this.#y + b);
  }

  // Private method
  #setXY(x, y) {
    this.#x = x;
    this.#y = y;
  }
}
```

#### Generator methods  <a name="1-4-3"></a>
The same way as public methods we can declare generator methods:

```javascript
class Point {
  #x = 0;
  #y = 0;
  #historyPositions = [];

  translate(a, b) {
    this.#x += a;
    this.#y += b;

    this.#historyPositions.unshift(
      [this.#x, this.#y]
    );
  }

  *getHistoryPositions() {
    for(const position of this.#historyPositions){
      yield position;
    }
  }
}
```

In the snippet above we declared a `getHistoryPositions` generator method.

> Note: to declare a private generator method use this syntax: `*#getHistoryPositions() {}`.




### Getters and Setters <a name="1-5"></a>

To implement getters and setters we use the `get` and `set` keyword:

Here is an example:
```javascript
class Point {
  #x = 0;
  #y = 0;

  get position() {
    return [this.#x, this.#y];
  }

  set position(newPosition) {
    // newPosition is an array like [0, 0]
    [this.#x, this.#y] = newPosition;
  }
}
```


### Static fields and methods <a name="1-6"></a>
Static methods and fields (of a class) can be defined using the `static` keyword. Static members (fields and methods) cannot be called through a class instance and must be called without instantiating the class.

Static methods are frequently used to construct utility functions, whereas static properties are excellent for caching, fixed-configuration, or any other data that does not need to be copied across instances.

Here is an example of a static method:
```javascript
class Point {
  static isEqual(pointA, pointB) {
    const [x1, y1] = pointA.position;
    const [x2, y2] = pointB.position;
    return x1 === x2 && y1 === y2;
  }

  #x = 0;
  #y = 0;

  get position() {
    return [this.#x, this.#y];
  }

  constructor(a, b) {
    [this.#x, this.#y] = [a, b];
  }
}

// Consider that p1 and p2 are both instances of Point
Point.isEqual(p1, p2) // Boolean
```

## Creating an object with a class  <a name="2"></a>
### The `new` keyword  <a name="2-1"></a>
To create a new instance of a class we use the `new` keyword:
```javascript
class Point {}

const point = new Point();
```

### Hoisting  <a name="2-2"></a>
Function declarations and class declarations can be distinguished by the fact that function declarations are hoisted whereas class declarations are not. You must first define and then access your class; otherwise, code like this will throw a ReferenceError:
```javascript
const point = new Point(); // ReferenceError

class Point {}
```


## Inheritance  <a name="3"></a>

### The `extends` keyword <a name="3-1"></a>

In class declarations or class expressions, the `extends` keyword is used to create a class that is a child of another class (a subclass).
We'll look at an example in the next section.


### Super <a name="3-2"></a>

The super keyword is used to access and call functions on an object's parent.
If there is a constructor present in the subclass, it needs to first call `super()` before using `this`.


See the code below:

```javascript
class Vehicle {
  #numberOfPassengers = 0;

  constructor(nb) {
    this.#numberOfPassengers = nb;
  }

  getNumberOfPassengers() {
    return this.#numberOfPassengers;
  }
}

class Car extends Vehicle {
  constructor() {
    super(5);
  }
}

class Bike extends Vehicle {
  constructor() {
    super(1);
  }
}

const car = new Car();
const bike = new Bike();

car.getNumberOfPassengers(); // 5
bike.getNumberOfPassengers(); // 1
```

### Metadata <a name="3-3"></a>

In class constructors, `new.target` refers to the constructor that was called directly by new. This is also true if the constructor belongs to a parent class and was delegated from a child constructor.

```javascript
class Vehicle {
  constructor() {
    console.log(new.target.name);
  }
}

class Car extends Vehicle {
  constructor() {
    super();
  }
}

new Vehicle(); // Vehicle
new Car(); // Car
```

> Consider the following use case: If we want the Vehicle class to be abstract, we can throw an error if `(new.target.name === 'Vehicle')` is true. However, you've to keep in mind that if you use this in production and build your project with bundlers, the names of your classes may be prefixed, causing the condition to always be false.



## Comparison with Constructor functions  <a name="4"></a>

Before there were classes, constructor functions and prototypes were the default. I won't go too deep in this section, but i wanted to show you how we could achieve pretty much the same with constructor functions and prototypes since ES6 classes use prototypes behind the hood.

### Properties and methods <a name="4-1"></a>

Let's start by setting some properties and methods:
```javascript
function Point(x, y) {
  this.x = x;
  this.y = y;

  this.translate = function(a, b) {
    this.x += a;
    this.y += b;
  }
}

const point = new Point(4, 5);
point.translate(2, 2);
point.x; // 6
point.y; // 7
```

### Getters and Setters <a name="4-2"></a>
To implement setters and getters we have to use `Object.defineProperty` or `Object.defineProperties`:

```javascript
function Point(x, y) {
  this.x = x;
  this.y = y;

  Object.defineProperty(this, 'position', {
    set: function([x, y]) {
      [this.x, this.y] = [x, y];
    },
    get: function() {
      return [this.x, this.y];
    },
  });
}

const point = new Point();
point.position = [4, 5];
point.position; // [4, 5]
```


Basically, I used `Object.defineProperty` to set/change the property descriptor of the `position` property. To learn more about property descriptors, you can check [this article](https://dev.to/mustapha/a-deep-dive-into-javascript-object-properties-598h).


### Prototypal inheritance <a name="4-3"></a>
Here's an example of prototypal inheritance:
```javascript
function Vehicle(numberOfPassengers) {
  this.numberOfPassengers = numberOfPassengers;

  this.getNumberOfPassengers = function() {
    return this.numberOfPassengers;
  }
}

function Car() {
  Vehicle.call(this, 5); // The same way we used super for classes, here we call the Vehicle constructor in this context (Car context) 
}

Car.prototype = Object.create(Vehicle.prototype); // Setting up the inheritance
Car.prototype.constructor = Car; // As a side effect of the line above, we loose the Car constructor. So we have to set it back

const car = new Car();
car.getNumberOfPassengers(); // 5
```

I won't go into much details here as there's a lot to talk about. But this is the minimal setup to do prototypal inheritance.

You may agree with me or not, but I find it a lot less straight forward and less descriptive than the class implementation.





## Wrap up <a name="5"></a>


We covered a lot already. We saw all of the tools we can use to create classes that are tailored to our needs, we discussed  how to create objects using classes and we talked about some caveats to be aware of. Finally we saw how difficult it can be to use constructor functions compared to using classes.


That's it for this post. I hope you liked it. If you did, please share it with your friends and colleagues. Also you can follow me on twitter at [@theAngularGuy](https://twitter.com/TheAngularGuy) as it would greatly help me.

Have a good day !
