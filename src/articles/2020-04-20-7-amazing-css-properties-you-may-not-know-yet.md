---
layout: "article.njk"
title: 7 amazing CSS properties you may not know (yet)
author: Mustapha AOUAS
date: 2020-04-20
tags: ["post", "featured"]
image: https://res.cloudinary.com/practicaldev/image/fetch/s--NWBPHrFo--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/4u98xt98w1xrqj8l92ra.png
imageAlt: Blog cover representing a CSS layout
description: Learning CSS is the way to go to build good-looking web pages. However, in the process of learning it we tend to confine ourselves to always use the same properties over and over. So, in this article, I'll try to introduce you to 7 CSS properties
---







Learning CSS is the way to go to build good-looking web pages. However, in the process of learning it, we tend to confine ourselves (most of the time) to always use the same properties over and over. We are a creature of habit after all, we use what we're comfortable with.
So, in this article, I'll try to introduce you to 7 CSS properties that by the end of this post you should feel comfortable using.

# Text and Numbers
Let's start with the text-related properties:


### 1. vertical-align
The first property on this list is `vertical-align`. According to MDN this CSS property sets the vertical alignment of an inline, inline-block or table-cell box.

Well, like the definition said, this property lets you align the text vertically. It's particularly useful for ordinal indicators (<sup>st</sup>, <sup>nd</sup>, etc),  required inputs asterisk (<sup>*</sup>) or icons that are not correctly centered. It takes one of these values: `super | top | middle | bottom | baseline (default) | sub | text-top | text-bottom`, or a length (px, %, em, rem, etc.) from the baseline.

![Exemple usage](https://dev-to-uploads.s3.amazonaws.com/i/kir0y0j92cytkxee32dv.png)

> Note that for ordinal indicators you could also use the `<sup>` HTML element.

Resource: [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align).


### 2. writing-mode
Let's continue with the second property. `writing-mode` sets whether lines of text are laid out horizontally or vertically, as well as the direction in which blocks progress. It takes one of these values `horizontal-tb (default) | vertical-rl | vertical-lr`.

![Example usage](https://dev-to-uploads.s3.amazonaws.com/i/mi0k76ltpcguu39gn6kx.png)


Resource: [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/writing-mode).


### 3. font-variant-numeric
The `font-variant-numeric` CSS property controls the usage of alternate glyphs for numbers, fractions, and ordinal markers.
It takes one of these values `normal | ordinal | slashed-zero | lining-nums | oldstyle-nums | proportional-nums | tabular-nums | diagonal-fractions | stacked-fractions`.
This property is useful to style numbers. depending on the situation you might want to display an old-style of numbers or with a slashed zero or you have a counter and you don't want the rest of the string (that comes after the number) to giggle while the numbers changes. For these situations `font-feature-settings` is useful.


![Example usage](https://dev-to-uploads.s3.amazonaws.com/i/qmae27thwy9lcs152ppw.gif)


> Note that the `font-variant-numeric` is part of the `font-feature-settings` group of properties. Properties like `font-variant-caps` or `font-variant-ligatures` are part of that group too.
> Note also that like all `font-feature-settings` properties your font needs to implement those said features to work properly. The font I'm using is Fira Sans.

Resource:  [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-numeric).


### 4. user-select
The `user-select` property is useful whenever you have a text you don't want the user to be able to select, or on the contrary, you want all the text to be selected if a double-click or context-click occurred.
This property takes one of these values: `none | auto | text | all`.


![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/u52bmxqtwmf8e5g2a96d.gif)

> Notice how the coupon gets selected when click, and how the vertical text is not selected.


Resource:  [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/user-select).


# Shapes
Let's talk now about some shapes-related properties:

## 5. clip-path
The `clip-path` CSS property creates a clipping region that sets what part of an element should be shown. Parts that are inside the region are shown, while those outside are hidden.
This property takes one of these values: `circle() | ellipse() | polygon() | path() | url()`.
Since this is an introduction to this property, I won't dive deep into each of these values, but you could check the resource at the bottom of this section if you want to learn more.

The two values I use the most are `circle` and `polygon`. The `circle(radius at pair)` value takes two arguments, the first one is the radius of the circle, and the second one is a point representing the center of the circle.
The `polygon(pair, pair, pair ...)` value takes 3 or more points, representing a triangle, a rectangle and so on.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/rgdxyax526twt7780iz3.png)


Resource: [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path).



## 6. shape-outside
The `shape-outside` CSS property provides a way to customize the wrapping of an HTML element, making it possible to wrap text around complex objects rather than simple boxes. It takes the same values as clip-path do.

Where `clip-path` defines how the users see your element, `shape-outside` defines how other HTML elements see it.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/yiauq3udyw7wz3dpgsay.png)

> Notice how the text float around the shape of the dog picture in the figure above.

Resource: [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/shape-outside).





## 7. background-clip
Last but not least, the `background-clip` CSS property sets whether an element's background extends underneath its border box, padding box, or content box.
This property takes one of these values: `border-box (default) | padding-box | content-box | text`.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/fbdv31m45yh5qix3670a.gif)

> Note that you can set the background to be visible only behind text characters. For that, you have to set the font color to transparent and use the -webkit- prefix on chrome.

Resource: [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip).






# Wrapping up
There you have it, these are the 7 properties I wanted to bring to your attention. Here's a sample using all the CSS properties mentioned in this post:

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/9ltj1qqohlcr4ca2klim.png)









How much of these properties did you know about? And what are the properties you think should be added to this list? Tell me in the comments.








---

### Hey, let's stay in touch!

If you liked this article, please share it with your friends and colleagues.
Connect with me on [Twitter](https://twitter.com/TheAngularGuy?ref_src=twsrc%5Etfw) or [LinkedIn](https://www.linkedin.com/in/mustapha-aouas-7918a214b/) to read more about HTML, CSS, JS and Angular!
****
