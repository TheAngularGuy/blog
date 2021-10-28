---
layout: "article.njk"
title: Fretboard Learning
author: Mustapha AOUAS
tags: ["project"]
image: /assets/fretboard.png
imageAlt: Blog cover representing Productivity word
description: Fretboard learning is a true guitar companion. It offers the best educational games to learn the notes on your guitar, chords and scales.
---

Fretboard learning is a true guitar companion. It offers the best educational games to learn the notes on your guitar.
<br>
<br>


<iframe width="560" height="auto" src="https://www.youtube-nocookie.com/embed/x8gsRTMO_FA?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



<br>
<br>

The app [available in the App Store](https://apps.apple.com/fr/app/fretboard-learning/id1554316449), and with it, the user can:
- Learn the fretboard playing the different games
- Practice the musical ear
- Learn more than 500 chords all over the fretboard
- Learn all scales in all the different boxes
- Customize your experience by selecting your favorite tuning or create your own
- Set a left handed mode
- Use different notes notation
- Learn the Circle of fifths: an interactive and fun tool to explore music harmony
- Use a Metronome
- Have custom statistics of your current steak
- Consult a detailed heat map of the fretboard
- Consult a global heat map of the fretboard


---




## The stack

The application is developed in Angular with ngxs for state management and the Ionic framework for certain UI elements and especially to easily generate a mobile application for stores. Part of the app for verifying payments is made in Node.js and is hosted on Heroku. Finally the pwa and the analytics are hosted at Firebase.



## Starting the project

At first, my idea was purely personal. So I started by developing my tool for learning the notes on the neck via a web platform, in a very basic version developed in Typescript using Angular, hosted on Firebase, without any design element and very inaccessible. I shared it as is to the community of guitar players with whom I am used to discussing on REDDIT and it is thanks to their very positive feedback that I decided to go further . The encouragement was such that I left with a blank slate. I took over all of the code to clean it up and facilitate its maintenance over time and I enriched my concept by bringing a playful character and a lot more design to my tool.


<br>

If the addition of gamification was gonna give wings to my application, the implementation was going to be much less clear ... Indeed, I had to spend very long hours or even nights at documenting myself on the subtleties of the art of mobile games in order to understand them, master them and integrate them into my project. Among them: the implementation of a progression system, the definition of rewards, the possibility of unlocking levels, integrating animations, flashes and fun… Of course, all of this involved the necessary reflection around UX associated with these elements. World until then totally unknown to me. Indeed, thinking about the UX of a business application is one thing, doing it for a game is another. So there too I trained to be more relevant on the design, the choice of colors, the shape of the buttons, the icons… Icons that I even learned to create from scratch, not finding what I was looking for on the Internet. And I would say that it was they who fundamentally changed the spirit of the solution. Who would've believed that…?


## Monetization

There too, I discovered an area that was completely unknown to me until then! That of digital marketing and business models of apps on Apple. I finally opted for a fairly classic model: a free version of the application which allows access to all the functionalities and in particular the board allowing to follow its progress, 2 purchase options are possible: a monthly subscription or a one-shot purchase. Since March 2021, I have recorded more than 80 purchases, 80% of which have chosen the "one payment". I follow the evolution of subscriptions through Analytics which allows me to analyze the behavior and origin of my users (mainly located in the United States).

