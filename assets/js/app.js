import "../scss/app.scss";
import "jquery";
import { TimelineMax, TweenMax, Linear, Power1, TweenLite, Power4, TimelineLite } from 'gsap';
require('animation.gsap');
require('debug.addIndicators');
const TimelineMax = require('TimelineMax');
const ScrollMagic = require('ScrollMagic');
import {ScrollScene} from 'scrollmagic';
import axios from "axios"

$(document).ready(function(){
var show = ('.show');
var square = ('.square');
var logo = ('.logo-img');
var controller = new ScrollMagic.Controller();
var flip = new ScrollMagic.Scene({
  triggerElement: '.flyers',
  reverse:true
})


.setClassToggle('.cover', 'fall')
.addTo(controller)
.addIndicators({
  colorStart: 'blue', 
  colorTrigger: 'red'
 })

 var header = new TimelineMax();
    header
    .from($('.left'),0.5,{height:0})
    .from($('.right'),0.5,{y:'100%'})
    .from($('.cardXL'),1,{height:0})
    .from($('.tag'),1,{y:100, autoAlpha:0});
 

 
 var blockAnimation = new TimelineMax();

   blockAnimation
    .staggerFrom(square,0.5,{y:150,opacity:0, ease:Power2.easeOut,yoyo:true},0.1)
    .staggerFrom(logo,0.5,{y:50,opacity:0, ease:Power2.easeOut,yoyo:true},0.1)
 
  
  var block = new ScrollMagic.Scene({
    triggerElement:show,
    reverse:false
 
  })
  .setTween(blockAnimation)
  .addTo(controller)
  .addIndicators({
    colorStart:'orange'
  })



  var boldTitle = $('.boldTitle');
  var textStation = $('.textStation');
  var zoom = new TimelineLite();
  var national = new ScrollMagic.Scene({
    triggerElement:'.titleContent',
    reverse:false
  })
  .setTween(zoom)
  .addTo(controller)
  .addIndicators({
    colorStart:'purple'
  })
  zoom
  .from(boldTitle,1,{opacity:0,y:150})
  .from(textStation,1,{opacity:0,x:-150},'-=0.5')
  .from($('.inner-img'),0.5,{height:0, delay:-0.5,x:-150});




  var content = new TimelineMax();
  var sceneContent = new ScrollMagic.Scene({
    triggerElement:'.content',
    reverse:false
  })
  .setTween(content)
  .addTo(controller)
  .addIndicators({
    colorStart:'green'
  })
  content
  .to($('.second'),0.75,{width:0,opcaity:0,  ease:
    Expo. easeOut,})
  .to($('.first'),0.75,{width:0,opacity:0,  ease:
    Expo. easeOut,},'-=0.25')
  // .from($('.subtitle'),0.5,{y:50, autoAlpha:0, ease:
  //   Expo. easeOut,},"-=0.25")
  .from($('.img-content'),0.5,{width:0, ease:Circ})
  .from($('.content-text'),0.5,{autoAlpha:0,y:50});

})








//card animation //

$(window).scroll(function(){
  var wScroll = $(this).scrollTop();
  var card = $('.card'),
      floatCard = $('.float-card');
  
    if(wScroll > card.offset(). top -($(window).height()/1.5)){
      card.each(function(i){
        
        setTimeout(function(){
          card.eq(i).addClass('show');
        },/*150  *(i+1))*/ (700 * (Math.exp(i*0.14))) -700)
        
      })
    }
  if(wScroll > $('.scope').offset().top - $(window).height()){
      // TweenMax.fromTo($('.scope'),1,{height:0},{height:500})
  }
  //150 is the time for tje animation
  
  
  floatCard.css('top',-5+(wScroll*0.05)+'em');

  //zoom Animation

   var scroll = $(window).scrollTop();

   
   $('.station').css({
     transform:'translate3d(-50%,-' + (scroll/100)+'%, 0) scale('+(100 + scroll/35)/100+')'
    })
  });
  
  