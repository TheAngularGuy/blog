---
layout: "article.njk"
title: 7 Tips to boost your productivity as a web developer 🚀
author: Mustapha AOUAS
date: 2019-04-15
image: https://res.cloudinary.com/practicaldev/image/fetch/s--wbFeoBCZ--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pyo9deb9c0w0ktgwxupe.jpg
imageAlt: Blog cover representing Productivity word
description: Being more productive as a software developer can sometimes be done by simply using the right tools for the job. If you can save just one minute a day, you will save up to four hours a year, if you don't take any vacation that is...
canonical: https://dev.to/mustapha/7-tips-to-boost-your-productivity-as-a-web-developer-4jh7
---

Being more productive as a software developer can sometimes be done by simply using the right tools for the job. If you can save just one minute a day, you will save up to four hours a year, if you don't take any vacation that is :)

So without further a due here are my 7 tips that could help save time:






## A faster `querySelector`
As web developers, we spend a lot of time in the browser, or should I say, in the devtools of our browsers. Well from the console of those devtools you can select an element either by the `document.getElementById`API or from the more versatile `document.querySelector` and `document.querySelectorAll` APIs.
But there's a faster way to do it. Instead, you could use:

```javascript

$('.some-class') // instead of document.querySelector
$$('.some-class') // instead of document.querySelectorAll

```

Note that `querySelectorAll` returns a NodeList while `$$` returns an array.








## Inspecting an element
Another useful feature you can use when you inspect an element (with the inspect tool of the devtools) is `$0`. After inspecting an element you can access it in the console  by typing `$0`:

![Inspecting an element](https://i.ibb.co/1TfN5Wy/0-2019-08-15-13-17-49.gif)
<figcaption> Inspecting an element with "$0" </figcaption>








## The powers of the `console` object
If you are working on a web project, chances are that you are using `console.log` to debug your app. Did you know the `console` object has other methods that can help you debug your code faster?

The `console.table` for instance is a far less known method but it can be very useful since it organizes your output in an array fashion where you could quickly sort your variable's values. (`console.table` takes a second argument as an array of the columns you want to keep, and it will filter the rest of the columns):

![Using console.table](https://i.ibb.co/m4VDGwx/table.gif)
<figcaption> Using console.table </figcaption>


Another useful method is `console.dir`. This method will let you log the javascript object of a DOM element instead of its HTML.
```javascript
const element = $$('your-component')[0];

console.log(element); // displays the HTML element

console.dir(element); // displays the list of the element's properties
```















## Better ways to debug
The `console` object is great but if you are it using it to debug your code, then you might be spending more time than you need to. Instead of console logging, you variables then inspecting them in the console, you can use `debugger` then you would have access to all the variables of the scope the `debugger` is in.

See an example of using `debugger` bellow:

![Using debugger](https://i.ibb.co/TR8dSHG/debugger.gif)
<figcaption> Using debugger </figcaption>















## Did you know about `designMode`?
Let's imagine the following scenario: You are working on styling a component that holds text inside it. And you want to test some edge cases by changing the text of the component, like for example putting an insanely long text or no text at all.

While you could achieve this by editing the HTML of the component in the DOM tree or in your source code, the easiest way is to set the `designMode` property of the document to `'on'`, then changing the text directly on the web page.

In the devtools run:  `document.designMode = 'on'`:

![Setting document.designMode to ON](https://i.ibb.co/9ptR8R3/Untitled-2019-08-13-20-33-20.gif)
<figcaption> Setting document.designMode to ON </figcaption>



---

Well, enough about debugging, let's see how to be more productive while writing some code:











## Taking advantage of object destructuring
If you are using ES6, or any transpiler, you can take advantage of destructuring by quickly accessing objects (and arrays) properties.

One great use-case is declaring new variables. Here's an exemple :
```javascript
// Using it on arrays

const geolocation = [1.420000, 42.10000];
// Slow to type
const long = geolocation[0];
const lat  = geolocation[1];
// Fast
const [long, lat] = geolocation;

// Same goes for objects:

const geolocation = { long: 1.420000, lat: 42.10000 }
// Slow to type
const long = geolocation.long;
const lat  = geolocation.lat;
// Fast
const { long, lat } = geolocation;
```

Another great usage of destructuring is swapping variables values. You can do it like this:

```javascript
let a = 1; 
let b = 2;

[a, b] = [b, a]

console.log(a, b) // 2, 1
```


ℹ️ Destructuring is a vast subject. You can read more about it in [this article](https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/).











## The Spread Operator
Last but not least, this last tip is by far my favorite one of the list, one that I use all the time. Thanks to the spread operator, Javascript has become more dynamic than ever.

One way to use this operator is to copy and concatinate arrays and objects:
```javascript
// For arrays

const arr1 = [0, 1];
const arr2 = [2, 3];

const copyOfArr1 = [...arr1];
const concatenating = [...arr1, ...arr2]; // [0, 1, 2, 3]

// Same works with objects:

const ob1 = { name: 'mark' };
const ob2 = { surname: 'smith' };

const copyOfOb1 = {...ob1};
const concatenating = {...ob1, ...ob2}; // { name: 'mark', surname: 'smith' }
```

Also, you could use the spread operator to push/unshift values into objects and arrays. Here is an example of that:
```javascript
let array = [1, 2, 3];

array = [0, ...array, 4]; // [0, 1, 2, 3, 4]
```

This also works for objects but with a subtlety that if the property was already defined in the object, it will be overwritten:
```javascript
let ob = { name: 'mark', age: 30 };

ob = { ...ob, age: 20 };
console.log(ob); // { name: 'mark, age: 20 }
```


Another use of the spread operator you could take advantage of is calling a function with an array of arguments:
```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7];

Math.max(...numbers); // 7
```






---








That's it for this post. I hope you liked it. If you did, please share it with your friends and colleagues. Also you can follow me on twitter at [@theAngularGuy](https://twitter.com/TheAngularGuy) as it would greatly help me.

Have a good day !

