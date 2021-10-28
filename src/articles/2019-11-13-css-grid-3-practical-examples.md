---
layout: "article.njk"
title: CSS Grid 3 practical examples
author: Mustapha AOUAS
date: 2019-11-13
tags: ["post", "featured"]
image: https://res.cloudinary.com/practicaldev/image/fetch/s--RfF-6bmk--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/4o2mf6nk2wa6a3df7plv.png
imageAlt: Blog cover representing Productivity word
description: In this post, we will have a look at 3 situations that you might encounter in your projects as a web developer. First, we will implement a search-filters component. Then, we will have a look at how CSS Grid could help us easily implement an image gallery that otherwise would have been difficult. Finally, we will implement one of those trendy homepage layouts that keep popping up on dribble...
---






This is the second post of the CSS Grid series. In the first post, we saw all the basics and the most important properties of CSS Grid. If you want to have a look at the article, you can find it by [clicking here](https://dev.to/mustapha/css-grid-illustrated-introduction-52l5).

-----


# Introduction
In this post, we will have a look at 3 situations that you might encounter in your projects as a web developer. First, we will implement a search-filters component. Then, we will have a look at how CSS Grid could help us easily implement an image gallery that otherwise would have been difficult. Finally, we will implement one of those trendy homepage layouts that keep popping up on dribble :)

**As this article is about CSS grid, we're gonna focus on implementing the layouts of each example.**


If you're ready, let's jump right into the first section!


# Search-filters

In this section, we will implement a search-filters wrapper like the ones we find above a collection of products or whatnot. The search-filters wrapper will hold some inputs and two action buttons: Reset and Search. These action buttons must always be in the bottom right corner of the wrapper, like in *Figure 1*:

![Search-filters illustration 1](https://thepracticaldev.s3.amazonaws.com/i/w52mv3efo75bedmzyhyb.png)
<figcaption> Figure 1: Search-filters </figcaption>

There is a catch though, we want the action buttons to be on the last column of the last row. That means if there is a space for it, it should be on the same line as an input. See *Figure 2* below:

![Search-filters illustration 2](https://thepracticaldev.s3.amazonaws.com/i/fouff48zfss3qgayxp67.png)
<figcaption> Figure 2: action-buttons behavior </figcaption>


Well, if the *specifications* are clear, let's implement it starting with the HTML code that should hold some inputs and two action-buttons. So, it should pretty much look like this:
```html
    <div class="filter-wrapper">
      <div class="filter-input">input 1</div>
      <div class="filter-input">input 2</div>
      <div class="filter-input">input 3</div>
      <div class="filter-input">input 4</div>
      <div class="filter-input">input 5</div>
      <div class="filter-input">input 6</div>

      <div class="action-btns">
        <button type="reset">Reset</button>
        <button type="submit">Search</button>
      </div>
    </div>
``` 
With that, we will now set the grid so that it sets automatically (read dynamically) the number of rows and columns. We also should set the height of each row and the minimal width of each column so the grid would look nice:
```css
.filter-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); 
  grid-auto-rows: 6ch; /* height of each row (definition in the first post) */
  grid-gap: 2ch;
}
```
Now let's implement the behavior of the action-buttons cell. As said before we want it to always be on the bottom right corner, meaning on the last column of the last row. Since it's already in the last row (because of the placement in the HTML), we only need to specify that it must be on the last column:
```css
.filter-wrapper .action-btns {
  grid-column-end: -1;
}
```

> Note that we didn't see `grid-column-end` in the first post, it defines on which column-line the item will end (it will automatically figure out the starting column-line).



Only with these few lines of CSS, we defined the correct behavior of our search-filters wrapper. The final code can be found on [this codepen](https://codepen.io/TheAngularGuy/pen/vYYRQEX).


















# Image gallery
Next, let's implement a source order independent image gallery. Like we saw in the first post we could use the `grid-auto-flow: dense` to let the browser figure out how to place the elements. Meaning if we have the following grid:

![Alt Text](https://thepracticaldev.s3.amazonaws.com/i/7olne0exqigp1czhl9pv.png)
<figcaption> Figure 3: badly implemented grid </figcaption>
-we want the browser to rearrange the elements in a way that there are no blanc spaces. Like in the *Figure 4* below:

![Alt Text](https://thepracticaldev.s3.amazonaws.com/i/jvgs996a3jgsh3opzs7s.png)
<figcaption> Figure 4: correctly implemented grid </figcaption>


Well, let's say we have the following HTML code:
```html
    <div class="gallery">
      <div class="gallery-item horizontal">1</div>
      <div class="gallery-item">2</div>
      <div class="gallery-item vertical">3</div>
      <div class="gallery-item">4</div>
      <div class="gallery-item horizontal">5</div>
      <div class="gallery-item vertical horizontal">6</div>
      <div class="gallery-item">7</div>
      <div class="gallery-item horizontal vertical">8</div>
      <div class="gallery-item vertical">9</div>
      <div class="gallery-item">10</div>
      <div class="gallery-item">11</div>
      <div class="gallery-item">12</div>
      <div class="gallery-item horizontal">13</div>
      <div class="gallery-item">14</div>
    </div>
```

We want the items that have the `horizontal` class to span across two column-cells, and the ones that have the `vertical` class to span across two row-cells. So, let's specify that in the CSS file:

```css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(95px, 1fr));
  grid-gap: 1rem;
  grid-auto-flow: dense;
}
.horizontal {
  grid-column: span 2;
}
.vertical {
  grid-row: span 2;
}
``` 
And that's how easy it is. You could find the complete code in the [codepen](https://codepen.io/TheAngularGuy/pen/GRRdBvW) below:



<a href="https://codepen.io/TheAngularGuy/pen/GRRdBvW" target="_blank"><img src="https://thepracticaldev.s3.amazonaws.com/i/f6zhgbzsn6ppvyd1z4yf.png" alt="codepen" style="height: auto !important;width: auto !important;" ></a>
<figcaption> Click on the picture to access the codepen </figcaption>


> You can use Nicolas Cage placeholder images using this API https://www.placecage.com 😄
















# Fancy homepage layout

For this last practical example, let's actually implement a homepage layout that will resemble the following *Figure 5*:

![Alt Text](https://thepracticaldev.s3.amazonaws.com/i/cixl62nj6gl5yjehiyll.png)
<figcaption> Figure 5: Fancy homepage layout </figcaption>


We are gonna divide the page into different elements. At the top we have the toolbar, then we have the main-title area in the middle left. We have the white panel, and finally, we have the carousel (with the three big buttons). We will work with the template below that represent the different areas we mentionned:

```html 
    <main class="fancy-homepage">
      <div class="toolbar">Toolbar</div>
      <div class="title">Main title</div>
      <div class="panel">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Aspernatur delectus voluptatem maxime modi nesciunt officia.
      </div>
      <div class="caroussel">
        <div class="caroussel-item">item 1</div>
        <div class="caroussel-item">item 2</div>
        <div class="caroussel-item">item 3</div>
      </div>
    </main>
``` 

So we will start by implementing, the grid. I figured a grid of 24 columns and 14 rows works pretty well for this, but that's only my two cents. The CSS code should look like this:
```css
.fancy-homepage {
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  grid-template-rows: repeat(14, 1fr);
}
```

Next, let's place the toolbar on the grid. We want the toolbar to span across one row and span across all the columns (all the width of the screen):
```css
.toolbar {
  grid-row: 1 / span 1;
  grid-column: 1 / -1;
}
```

After this, we're gonna place the panel. we will leave an empty row between the toolbar and the panel. That means that the panel will start at row-line 3. Also, we want it to start just before the middle of the width of the screen until the edge of the screen (on the right):

```css
.panel {
  grid-row: 3 / -1; /* to leave an empty row between the toolbar and the panel */
  grid-column: 10 / -1; /* the width-middle of the screen is 12 */
}
```

We're almost done, let's place the carousel now: we want it to be at the bottom of the screen (starting a little bit below the middle of the height of the screen), and we want it to take all the width:
```css
.caroussel {
  grid-row: 9 / -1; /* the height-middle of the screen is 7 */
  grid-column: 1 / -1;
}
```

That should result in this:

![Alt Text](https://thepracticaldev.s3.amazonaws.com/i/do43n0scvncremwdp03z.png)
<figcaption> Figure 6: Fancy homepage layout draft </figcaption>


To complete this example, let's place the main-title area on the blanc space in the middle left of the screen. Vertically, its limit must be the row-line 9 (because it is the starting row-line of the carousel), and horizontally the limit is column-line 10 (because it is the starting column-line of the panel). but let's leave some space between the elements, so the main-title area must start at the column-line 2 and stop at the 9th column-line (10 - 1), and it must start at the row-line 3 to the 8th (9 - 1):
```css
.title {
  grid-row: 3 / 8;
  grid-column: 2 / 9;
}
``` 

And that's it! After adding some styling, so things would look nice, we have the final result in the [codepen](https://codepen.io/TheAngularGuy/pen/BaaOymY) below:




<a href="https://codepen.io/TheAngularGuy/pen/BaaOymY" target="_blank"><img src="https://thepracticaldev.s3.amazonaws.com/i/izli762fi580qjorqeb8.png" alt="codepen" style="height: auto !important;width: auto !important;" ></a>
<figcaption> Click on the picture to access the codepen </figcaption>


> A nice thing you could do to practice is to fork this codepen and instead of using grid-line numbers (that could become messy), use named grid-lines instead (you can give aliases to the grid-lines, as we saw in the [first post](https://dev.to/mustapha/css-grid-illustrated-introduction-52l5))




# Wrapping up


So, in this article, we saw three situations that a web developer could face in one way or another, and we saw how CSS grid helped us easily implement some behaviors (like the source order independence of the image gallery) that would have been difficult to achieve otherwise. Also, CSS grid lets us keep a really clean template while implementing some special behaviors and some (more or less) fancy layouts that would otherwise have required from us to manipulate the template.

I hope you enjoyed this article, and that you found something useful :)
Happy coding!





---

### Hey, let's stay in touch!

I'm working on a lot of awesome posts and tutorials to come. If you liked this one, make sure to follow me on [Twitter](https://twitter.com/TheAngularGuy?ref_src=twsrc%5Etfw) or connect with me on [LinkedIn](https://www.linkedin.com/in/mustapha-aouas-7918a214b/) to get updated on when the next one might come out.
