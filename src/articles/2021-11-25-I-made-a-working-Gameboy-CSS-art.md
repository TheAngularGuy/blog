---
title: I made a working Gameboy CSS art try it out 🕹
date: 2021-11-25
image: https://res.cloudinary.com/practicaldev/image/fetch/s--hSRt_0VR--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/n2hu13aojhgh6hgtpm12.png
imageAlt: Blog cover representing a gameboy
description: In this post, we will talk about a couple of things that went into this project. First, we will talk about the maze generation algorithm, and the maze solving algorithm. Then we will talk about some CSS art key concepts.
canonical: https://dev.to/mustapha/i-made-a-working-gameboy-css-art-try-it-out-4m1j
---

Here is the story. Three years ago, I went to an interview (for an Angular position) and the interviewer asked me about a maze-solving algorithm. So I completed the algorithm and just for fun I went ahead and did an Angular project where you had to solve a maze (generating a maze is also a good exercise).

So, I had a fully working maze game on my laptop, and I also had a CSS art of a Gameboy 👉 I figured it would be fun to merge these two together.

- Try it out [here](https://theangularguy.github.io/playable-gameboy) (if you're on laptop you can use your keyboard)
- Contribute [here](https://github.com/TheAngularGuy/playable-gameboy) (or if you'd like to give a ⭐️)
- Demo here [here](https://twitter.com/theangularguy/status/1463889796158398466)



---

Follow me on Twitter at [twitter.com/theAngularGuy](https://twitter.com/TheAngularGuy) as I tweet (almost) every day about the things I learned in my 6+ years journey in web development ✅

---



In this post, we will talk about a couple of things that went into this project. First, we will talk about the maze generation algorithm, and the maze solving algorithm. Then we will talk about some CSS art key concepts.

<br>&nbsp;
## Maze generation algorithm

![Steps](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vb2oma02wvi8fw8mcpcb.png)

There is a lot of algorithms for this. The one I went with is the recursive generation, for two reasons:
1. Because I love solving problems with recursion ([Scheme](https://tinyurl.com/3dv9rvwc) changed me forever)
2. Because the generated maze is prettier to look at (with long alleys)

There are four steps in this algorithm:
1. Delimit the maze area
2. Divide the area vertically in the middle (or at a random point) and make an opening in the division
3. Take the two halves and divide them horizontally in the middle, and make an opening in each division
4. Take each new portion and go to step. 2

This will go on and on until there's not enough room to make a division.
Here is a gif with the full process of generation 👇

![Generation gif](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ul9y79rszzvh2oxywcm2.gif)

> You can visualize the maze as a binary tree, each node represents a part / division of the maze.


<br>&nbsp;
## Maze solving algorithm

For solving the maze I used the depth-first search algorithm. It's not the most performant algorithm for solving a maze but it gets the job done and it's fairly easy to implement. Also, I use it to go through the maze and find the longest path possible, then I use that as the exit point (goal location some might call it) of the maze. Here is a gif illustrating this algorithm:
![maze solving algorithm](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/tiuflcqg891k6glszmf2.gif)


I won't go deep into the details here, but tell me in the comments if you would be interested in a maze-solving article.


<br>&nbsp;
## CSS art: key concepts

We are gonna talk about some CSS properties I wanted to highlight. We can divide these properties into two categories. Shape and Lightening (impression of light and shadows).

### Shape
#### `border-radius`

The first one is the good old `border-radius`. You might use it to make circles or ellipses. But this property can achieve more. You can specify the horizontal and vertical radius of each corner. Have a look at this snippet below:
```css
.plate {
    border-radius: 20% 20% 49% 49% / 2% 2% 6.5% 6.5%;
}
```

I used this to shape the gameboy plate and the black screen.

#### `aspect-ratio`

This property is very useful, it sets a preferred aspect ratio for the box, which will be used in the calculation of auto sizes.
For example I can set the `width` and an aspect ratio, and the height will be calculated automatically. Have a look:
```css
.plate {
    width: 500px;
    aspect-ratio: 1 / 2;
    /* The height will be 1000px */
}
```

I used this on almost every element. Yeah I know I love this property!

#### `transform: skew`

You might use `transform` for rotations, scaling (resizing), or translation (moving), but you can also use it for distortion (skewing).
The `skew` CSS property defines a transformation that skews an element on the 2D plane.

I use this for the sound holes grid. Have a look at the image below with skewing (right) and without (left):
![comparison skew or not](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/26wlceitm5a6owfy5o0s.png)

There's also a rotation that is applied on the grid in both pictures.
Also, for the sound grid, I used a grid layout. If you want to learn more about CSS grid I wrote [an article](https://dev.to/mustapha/css-grid-illustrated-introduction-52l5) where I explain every concept of it.



### Light and shadow

#### `box-shadow`
To give an impression of volume, lighting is essential. Look at the two examples below, left is without shadow and right is using shadows (`text-shadow` & `box-shadow`):
![box-shadow comparison](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/uoq7ip0z6d8ikb1xghmb.png)

To achieve this effect of lighting we have to understand where to put light and where to put some shadow, and that depends on if something is in relief or depression. Have a look at the image below:
![light effect](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mqs7pfy5v9umdtzbkonm.png)

If we apply this to the buttons, we would have something like this (assuming the light is at the top left of the screen):
![lighting and shadow for buttons](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ekf8ikt9s19dn6bula85.gif)

That translates to this code:
```css
.button {
  box-shadow:
    inset 3px 5px 5px -1px rgb(255 255 255 / 50%), 
    inset -3px -3px 5px -1px rgb(0 0 0 / 99%),
    1px 1px 1px 2px rgb(0 0 0 / 80%),
    2.5px 5px 5px 1px rgb(0 0 0 / 90%)
}
```
The inset keyword sets the shadow to go inside the frame.

#### `text-shadow`

Fo the texts we use the same principle either the text is in relief or depression. Here is an example of a text that is in relief:

```css
.text {
  text-shadow: -1px -1px 1.2px rgb(255 255 255 / 50%),
               1px 1px 1px rgb(1 1 1 / 7%);
}
```
















<br>
That's it for this post. I hope you liked it. If you did, please share it with your friends & colleagues and follow me on Twitter at [@theAngularGuy](https://twitter.com/TheAngularGuy) where I tweet about web development and computer science.

Cheers!
