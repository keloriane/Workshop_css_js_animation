# Workshop_css_js_animation

## First let's talk about css Animtation

The Goal of this workshop was to start by the ground up.
There was 20 motivated "students". 
That is why i've decided to remind people about css Anmation with media querys and timing function.

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
Here is the code pen link [https://codepen.io/Koriane/pen/BrXjEo]

## Then we took a step forward with javascript and jquery with GSAP library

To do so i've created a webpack config file that can reload the browser every time the is a change.
Also i have implemented axios to make AJAX request easier :)

### Installation

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

### First Exercices

* the first exercices was to play a little bit with TweenLite and just change the DOM.
* i have a very good method to explain how elements can move on a page :)
* 
* We play with opacity height width and control X & Y positions.

### Second Exercice play with the Timeline

* I just did a brief intoduction on how timelinemax works.
* Then i show them a timeline scene to reproduce and it went prety well for almost every one.

### Animation on Scroll

* So yes we did some greate animations with TweenLite TweenMax TimlineLite TimelineMax.
* But i want to show the animation on scroll.
* That is why i choose ScrollMagic.
* First Step: TriggerElement on when to start the animation
* Second Step: Add the tween we have created before. Just put de name of the animation * variable in the function :p
* third step: DEBUUUUG :p (part of the job and the workshop) ;)

### Third and last exercise
* i let you enjoy the header if you want to clone the repo.
* I've just pick the animation from awwwards webstie to proove that animations are not that hard ;)
#### enjoy ;)
