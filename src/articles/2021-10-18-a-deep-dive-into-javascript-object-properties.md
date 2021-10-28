---
layout: "article.njk"
title: A deep dive into Javascript property descriptors
author: Mustapha AOUAS
date: 2021-10-18
tags: ["post", "featured"]
image: https://res.cloudinary.com/practicaldev/image/fetch/s--SpYoVD1j--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vp8e9zcq7d2aw8ehpkwd.jpg
imageAlt: Blog cover representing an Object
description: In this post we’ll take a dive to see how objects are created then we'll talk about some interesting properties of object’s properties...
---



In this post we’ll take a dive to see how objects are created then we'll talk about some interesting properties of object’s properties, but first let's start by taking a look at how we usually create an objects using object literals:

```javascript
const car = { numberplate: '1234' };
```

We have created an object containing a property `numberplate` with a value of `'1234'`. Behind the scene javascipt is using `Object.create` method to create this object. This is how it looks like:

```javascript
const car = Object.create(
  Object.prototype,
  {
    numberplate: {
      writable: true,
      enumerable: true,
      configurable: true,
      value: '1234',
    }
  },
);
```

The two snippets of code above are absolutely equivalent and you can see why we use object literals, but let's take a moment to understand what is happening in the second snippet.
As a first argument the `Object.create` takes the object which should be the prototype of the newly-created object, since we don't have/want any prototypal inheritance, we specify that it should take the default object prototype.
More interestingly, the second argument specify the property descriptors to be added to the newly-created object, with the corresponding property names.

> Note that you can also use `Object.defineProperties` or `Object.defineProperty` to specify property descriptors for any given object. More on it [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties) and [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty).





Let's see what each property descriptor is responsible of.








## Property descriptors


### Writable

The `writable` property descriptor defines whether the property (in this case `numberplate`) value can be changed from its initial value.
```javascript
'use strict'

const car = { numberplate: '1234' };

Object.defineProperty(
  car,
  'numberplate',
  { writable: false }
);

car.numberplate = '0000'; // -> Uncaught TypeError
```

> Note that if you don't use strict mode (with `'use strict'`)  in the exemple above, the interpreter will not throw an error and the value will not be changed.


There is a caveat to be aware of. The `writable` property descriptor stops the pointer of the property from moving. that means if the property points toward an object, the members of that object can still be changed, for exemple:
```javascript
'use strict'

const plane = { 
  numberplate: { value: '1234' },
};

Object.defineProperty(
  plane, 
  'numberplate', 
  { writable: false }
);

plane.numberplate.value = '0000';

plane.numberplate.value // -> '0000'

plane.numberplate = {}; // -> Uncaught TypeError
```

### Enumerable


By default object properties are enumerable, so we can enumerate over them with `for...in` loops and we can get them as an array with `Object.keys`.
> Note that the difference between these two ways of getting the enumerable properties is that `Object.keys` returns only an array with the own properties of the object, while the `for...in` loop returns also the keys found in the prototype chain.

```javascript
const car = { 
  numberplate: '1234',
  brand: 'Koenigsegg',
};

Object.defineProperty(
  car, 
  'numberplate', 
  { enumerable: false }
);

Object.keys(car); // -> [brand]
```

Setting `enumerable` to `false` will also affect the `JSON` serialisation of the property as it won't be serialised. That can be useful in some cases.


### Configurable


The `configurable` descriptor of a property prevents the descriptors (of that given property ex: `platenumber`) from being changed. Also it prevents the property from being deleted from the object. Let's see an exemple:

```javascript
'use strict'

const car = { 
  numberplate: '1234',
};

Object.defineProperty(
  car, 
  'numberplate', 
  { configurable: false }
);

delete car.numberplate; // -> Uncaught TypeError

Object.defineProperty(
  car, 
  'numberplate', 
  { enumerable: false }
); // -> Uncaught TypeError

Object.defineProperty(
  car, 
  'numberplate', 
  { configurable: true }
); // -> Uncaught TypeError
```

Once you set the configurable descriptor of a property to `false`, you can not switch it back to `true` later.

One caveat to be aware of is that even if you set `configurable` to `false`, you still can change the `writable` descriptor.



### Value

Finally the value descriptor is here to set or change the value of the property.

```javascript
'use strict'

const car = { 
  numberplate: '1234',
};

Object.defineProperty(
  car, 
  'numberplate', 
  { value: '0000' }
);

car.numberplate; // -> '0000'
```




## Setter and getter <a name="setters-getters"></a>

### Getters


Another useful thing you could also do with `Object.create` (or `Object.defineProperty` or `Object.defineProperties`) is implementing setters and getters. Let's see how we can do it.










```javascript
const point = { x: 0, y: 0 };

Object.defineProperty(
  point, 
  'position', 
  {
    get: function() {
      return [this.x, this.y];
    }
  }
);

point.position; // -> [0, 0]
```

To create a getter, you set the `get` attribute to a function, this function is our getter.



### Setters

```javascript
const point = { x: 0, y: 0 };

Object.defineProperty(
  point, 
  'position', 
  {
    set: function(pointArray) {
      [this.x, this.y] = pointArray;
    }
  }
);

point.position = [4, 2];

point.x; // -> 4
point.y; // -> 2
```

Like we did for the getter, to implement a setter we set the `set` attribute to a function that takes an argument, the argument is the value you want to set.


Note that when you set a getter or setter for a property, it can't have a writable or a value property descriptor. See below:
```javascript
Object.getOwnPropertyDescriptor(
  point,
  'position'
); // -> { enumerable: false,
   //      configurable: false,
   //      get: ƒ, set: ƒ }
```
> Notice that when you set a getter or a setter, the `enumerable` and `configurable` descriptors are automatically set to `false`. So you may want to set the getters and the setters in the same expression, or manually set `configurable` to `true` while implementing them.




<hr>

That's it for this post. I hope you liked it. If you did, please share it with your friends and colleagues. Also you can follow me on twitter at [@theAngularGuy](https://twitter.com/TheAngularGuy) as it would greatly help me.

Next week we will talk about ES6 classes and how they compare to constructor functions, so make sure to stay around.
Have a nice day and see you soon.










