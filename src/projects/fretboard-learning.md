---
title: Fretboard Learning
image: https://theangularguy.com/assets/fretboard.png
imageAlt: Blog cover representing Fretboard Learning app logo
description: Fretboard learning is a true guitar companion. It offers the best educational games to learn the notes on your guitar, chords and scales.
---

Fretboard learning is a true guitar companion. It offers the best educational games to learn the notes on your guitar.
<br>
<br>


<iframe width="560" height="auto" src="https://www.youtube-nocookie.com/embed/x8gsRTMO_FA?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<small>
Even if the app doesn't seem smooth in the video, I guarantee that it is. On the other hand, my skills in video editing...
<a href="https://twitter.com/TheAngularGuy/status/1205481460624429057">Here is the lighthouse audit of the app</a>.
</small>

<br>
<br>

The app [available in the App Store](https://apps.apple.com/fr/app/fretboard-learning/id1554316449), some of its features are:
- Learn the fretboard by playing the different games with different levels
- Practice the musical ear
- Explore more than 500 chords all over the fretboard
- Explore all scales in all the different boxes
- Use a Metronome in the background while you play
- Learn the Circle of fifths: an interactive and fun tool to explore music harmony
- Customize the experience by selecting between different tunings or create a custom one
- Use different notes notation (german, japanease, ...and more)
- Set a left handed mode
- Have custom statistics of your progression
- Consult a detailed heat map of the fretboard (note by note)
- Or consult a global heat map of all the notes


---




## The stack

The application is developed in Angular with ngxs for state management and the Ionic framework for certain UI elements 
and especially to easily generate a mobile application for stores. Part of the app for verifying payments is made 
in Node.js and is hosted on Heroku. Finally the pwa and the analytics are hosted at Firebase.



## Starting the project

At first, my idea was purely personal. I started developing my tool for learning the notes present in the fretboard via a 
web application (leveraging my skills), in a very basic version developed in Typescript using Angular, hosted on Firebase, 
without any design element (simple Angular material).
I shared it as is to a community of guitar players with whom I am used to discussing on reddit and it is thanks to their very positive 
feedback that I decided to go further.

The encouragement was such that I started the project again with a blank sheet. I took over all the code to 
refactor it to facilitate __maintenance and scalability__. Also, I enriched my concept by bringing some 
gamification concepts and a unique design to my app.


<br>

If the addition of gamification was going to enable my app to have some retention and playfulness, the implementation was going to be much less clear ... 
Indeed, I had to spend very long hours or even nights at documenting myself on the subject of gamification and mobile games, 
master them and integrate them into my project. Among the gamification elements: the implementation of a progression system, rewards, the possibility of 
unlocking levels, integrating animations, sounds, illustrations and more… Of course, all of this involved the necessary thinking around the UX of these elements. 

<br>
I was fortunate to work on the front-end apps of some of the big companies in France (Ricoh, Bosch, Total, SNCF, Le Crédit Agricole, Enedis...). 
But thinking about the UX of a business application is one thing, doing it for a game is another.
So there too I trained to be more relevant on the design, the choice of colors, the shape of the buttons, the icons… Icons that I even learned to create 
from scratch, not finding what I was looking for on the Internet. And I would say that it was these elements that fundamentally changed the user perception of the app. 
It wasn't a tool anymore, it was a game!


## Monetization

There too, I discovered an area that was completely unknown to me until then! That of digital marketing and business models of apps on the Apple App store. 
I finally opted for a fairly classic model: a free version of the application which allows access to some of the functionalities. For the rest, 2 purchase options 
are available: a monthly subscription or a one-shot purchase. Since March 2021, I have recorded more than 100 purchases, 80% of which have chosen the "one payment".

<br>

![Revenue from Fretboard Learning app](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/bztog43tiiadlq7b27eg.png)
<figcaption>Revenue from Fretboard Learning app</figcaption>

<br>

I follow the evolution of subscriptions through Analytics which allows me to analyze the behavior and origin of my users (mainly located in the United States).



<br>

Learn more about the method I used to finish (or at least publish) my project [in this post](/articles/2021-11-01-5-tips-to-finish-your-side-projects/).
