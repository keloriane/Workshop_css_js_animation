# Workshop: animating the web with css and javascript

**This 4 hours hand-on workshop was the occasion for me to "play the teacher", and explore animations on the web for a group of 22 junior frontend developers at [BeCode](https://becode.org). It took place on 19 April 2018 in Brussels as part of a series of workshops called "[les pâturages d'été](https://inside.becode.org/paturages)".**

![](https://lh3.googleusercontent.com/S5wR7xfpi95idwQ9-_IIPnsi5YMWBQ8od6AbQtyvBo3VXjmYkMgRw4MyZbVLMKfj7RHs6pJ4sYqGRoWwwP_f5Lw2ngTzgMV2-Guffu-r1-ebUtqgRdyIv2tJ94ezSzQf7IMJ9fSJwvvfjfXoPi1NSUnaJMeTmHDTmpHMX8KEOyDKdvBcRDSphXk2Kc3O8Ajys0PZNe00rOV6ojJaJOVB9zSCX25sm1ifQM2wGyyQfr9pBfBTrxdL1s1mNqPj62jn2Jd33uGy_ku7-odFhRqOfW02Infybg5Cw1sxZrLfcmSUC-hM5Txiylp2TYRoUxFpsmYC1DDFrW-Ej8mfCD9qGXv1lAB7VeeL_1fm-Pjz_P3PIlKZg0zv-TYY7uPBNroGU7J6P5HAt4-2fsl8yZTk6f44FbdA5GIujEjOal0TPxmZT1K3zHYy0jNXnQAtMqcCyO2loWZA5fbGmN5qINkWL8ecZYp4l6eiPVoVQNu8sBj_XmCnv9KD3-ZZROPF6RY3lZSeqFTCIVJvRyX4RwbOCzLzWaKrHYjVvwMf0NkIlRFcX3K5e9b8wYU_zyYK7EU_6ldnFgLWVA3T2RDJmjayUjC_Nx1YAHWJOr_JbESZ=w1449-h753-no)

## Workshop ambitions : 
- understand when to use CSS keyframes and when to use libraries (like Greensock, my tender <3 )
- build a few animations on top of an HTML page, with CSS that I provided.
- understand the benefits of each and get a first grip.

## Feedbacks from the participants

> Très bon, WorkShop je suis sur que tu aurais pu faire une journée avec tout ce que tu connais déjà ! Mais c'était très bien expliqué et puis les exercices étaient une bonne idée !  – [Thomas Point](https://github.com/ThomasPnt)

> Super Workshop Kev.  J'ai enfin compris comment faire des animes facilement! Grand grand merci !  – [Valerian Thomas](https://github.com/ValerianThomas)

## The programme.
### CSS Animations

Let's start with the beginning: CSS animations with media queries and timing functions.

```
.box{
  width: 200px;
  height: 200px;
  background-color: #0ff203;
  border-radius:2em;
  animation:move 8s infinite ease-in-out;
}
@keyframes move{
  0%{}
  50%{
    transform: translate(200px, 0) rotate(360deg);
    background-color: #222;
    opacity:0.2;
    border-radius:0;
  }
  100%{
    background-color: #000;
  }
}
```
Here is the codepen link [https://codepen.io/Koriane/pen/BrXjEo]

### Then we took a step forward with javascript and jquery with GSAP library

To do so i've created a webpack config file that can reload the browser every time the is a change.
Also i have implemented axios to make AJAX request easier :)

#### Installation

You just have to clone the repo then go to the downloaded folder and run the command.

```
npm install
```
To watch the file in the workstation you need to run.

```
npm run watch 

```
* By default the browser will go in the public folder.
* In the URL you need to put a ``` /index.html```

#### First Exercices

* the first exercices was to play a little bit with TweenLite and just change the DOM.
* i have a very good method to explain how elements can move on a page :)
* 
* We play with opacity height width and control X & Y positions.

#### Second Exercice play with the Timeline

* I just did a brief intoduction on how timelinemax works.
* Then i show them a timeline scene to reproduce and it went prety well for almost every one.

#### Animation on Scroll

* So yes we did some greate animations with TweenLite TweenMax TimlineLite TimelineMax.
* But i want to show the animation on scroll.
* That is why i choose ScrollMagic.
* First Step: TriggerElement on when to start the animation
* Second Step: Add the tween we have created before. Just put de name of the animation * variable in the function :p
* third step: DEBUUUUG :p (part of the job and the workshop) ;)

#### Third and last exercise
* i let you enjoy the header if you want to clone the repo.
* I've just pick the animation from awwwards website to proove that animations are not that hard ;)

#### enjoy ;)
