---
title: Responsive images for better performance Start using srcset and picture
date: 2021-11-08
image: https://res.cloudinary.com/practicaldev/image/fetch/s--OajdVohi--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/leli06vfsxvff4s73nkc.png
imageAlt: Blog cover representing multiple images sizes
description: In this article, we will be talking about responsive images, screen sizes, pixel density, and how the srcset and sizes attributes can help us achieve better performance and a great user experience...
canonical: https://dev.to/mustapha/responsive-images-for-better-performance-start-using-srcset-and-picture-11kc
---

Hi there, in today's article, we will be talking about responsive images, screen sizes, pixel density, and how the `srcset` and `sizes` attributes can help us achieve better performance and a great user experience. Read until the end there's a bonus for you.

<br>
Implementing responsive images isn't complicated. However, it requires us to write a little bit more code, it also forces us to couple our CSS and HTML, as the image sizes must be declared directly on the `<img>` browsers tag.
Testing responsive images also require new methods, as we now need to ensure that the correct resolution is being loaded at the right time.


## The `srcset` and `sizes` attributes

The responsive image spec boils down to two tags and two attributes. The first tag we’re going to look at is our good old `<img>` tag. Two new attributes have been added to the `<img>` tag: `srcset` and `sizes`. These two attributes tell the browser what resolutions are available for a given image, and what size the image is supposed to be displayed at, at any given breakpoint. Based on this information, the browser is able to choose and download the most optimal image file for any given device.

<br>
Lets start by having a look at the srcset attribute.

### The `srcset` attribute
```html
<img srcset="/assets/images/image-tiny.jpeg 150w,
             /assets/images/image-small.jpeg 300w,
             /assets/images/image-medium.jpeg 600w,
             /assets/images/image-large.jpeg 1000w,
             /assets/images/image-extra-large.jpeg 1500w"

     src="/assets/images/image-medium.jpeg"
     alt="Banner image">
```

The `srcset` attribute contains a comma-separated list of URLs with a w-descriptor, informing the browser how wide each source image is.
One awesome thing about this syntax is that we don’t need to tell the browser what images to use for the different pixel density displays, and what images to use for the different screen sizes. The browser is able to pick the best image size on its own.
Note that the `scr` attribute is here as a fallback for browsers that does not support `srcset` (IE 😒).

<br>
In the snippet above, with the `srcset` attribute we provide five image sources with different sizes: 150px, 300px, 600px, 1000px, and 1500px. And the browser will choose the best image depending on screen size and pixel density. Have a look at the video below:

![images fetched by the browser](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/cg2a8daauv08l6ae4ox1.gif)

And if we open the network tab we see that the images were fetched when needed:

![Network tab](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jjsr57eubo2kdxxafm0y.png)

That makes for better performance because the images will load quickly on smaller devices, and it therefor makes a better user experience.


&nbsp;

In the example above the image width was 100vw, what if we had a layout where the width of the image was 50vw (minus some padding) on desktop and 100vw (minus some padding) on mobile?
That's what `sizes` is for.

### The `sizes` attribute
While the `srcset` attribute describes the actual width of the source files, the `sizes` attribute tells the browser how wide the image is supposed to be displayed on the screen. This is done with the use of inline media queries. They work exactly the same as in CSS (without the curly braces), except you only use it to describe the displayed width of the image. Let's have a look:

```html
<img srcset="/assets/images/image-tiny.jpeg 150w,
             /assets/images/image-small.jpeg 300w,
             /assets/images/image-medium.jpeg 600w,
             /assets/images/image-large.jpeg 1000w,
             /assets/images/image-extra-large.jpeg 1500w"

     sizes="(max-width: 700px) calc(100vw - 10px),
                               calc(50vw - 10px)"

     src="/assets/images/image-medium.jpeg"
     alt="A photo of Lyon city">
```

In the first line (of the `sizes` attribute) we specified the width of the image when the screen width is less than `700px`. Then, in the second line we specified the default width (so in this case, devices with a screen size that is bigger that `700px`).

<br>
With this, the browser is aware of the width of the image in our layout and is able to decide what is the best file to load. Have a look at the result:

![Image responsiveness with layout](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6gc6pwqybbhdsfr39frz.gif)


> Note that the order of the image-URLs in the `srcset` attribute doesn’t matter. The order in the `sizes` attribute, however, matters a lot! The browser will use the first media query that matches the current state of the browser.

This is amazing, but there's more. Now let's say we want to use other images if the user prefers dark themes.
For that, we can use the `<picture>` tag. Let's dig in.

## Picture

You can think of the `<picture>` element as a group of image sources. Each individual `<source>` work much like a single `<img>` tag, but with an added media attribute. This allows us to specify different groups of sources for different media queries, while still benefitting from the browser's ability to choose the most optimal resolution of a given image.


<br>
Let's use that to specify two sources, one for a light theme and one for a dark theme:

```html 
<picture>
  <!-- Dark theme -->
  <source media="(prefers-color-scheme: dark)"
          srcset="/assets/images/tiny-dark.png 150w,
                  /assets/images/small-dark.png 300w,
                  /assets/images/medium-dark.png 600w,
                  /assets/images/large-dark.png 1000w,
                  /assets/images/xl-dark.png 1500w"

          sizes="(max-width: 700px) 100vw, 50vw">
    <!-- Light theme -->
    <source srcset="/assets/images/tiny.png 150w,
                    /assets/images/small.png 300w,
                    /assets/images/medium.png 600w,
                    /assets/images/large.png 1000w,
                    /assets/images/xl.png 1500w"
            sizes="(max-width: 700px) 100vw, 50vw">
 
  <img src="/assets/images/medium.png" alt="Banner image">
</picture>
``` 
That looks like this in the browser:

![Image responsiveness with layout dark mode](https://i.ibb.co/6vxHZpZ/xxx.gif)

> To emulate dark mode: `command` + `shift` + `p` then paste "prefers-color-scheme" and select light or dark.

Note that the picture element itself does not display anything, it provides a context for its contained `<img>` element that enables it to choose from multiple URLs. That means that you should always add an `<img>` tag inside the the `<picture>` tag to specify the `alt` attribute and `loading="lazy"` if you want to lazy load the image.


## Bonus
Better image encodings, such as webP and AVIF, can be used for even better performance. 
See [this twitter thread](https://twitter.com/theangularguy/status/1457618942533386246) for more details (fallback, browser support and more).



> Also, you could use [this npm pkg](https://www.npmjs.com/package/srcset-generator) to automate the generation of multiple image sizes.



## Wrap up

We saw how to use `srcset` and `sizes` with the `<img>` tag and the `<picture>` tag. We saw when to use each and why. Now that we saw how useful these features are there’s no reason for forcing people to load unnecessarily large images over a 3g or 4g connection on their phones anymore :)

{% include 'thanks.njk' %}


