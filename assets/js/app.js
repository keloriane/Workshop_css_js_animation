import "../scss/app.scss";
import "jquery";
import { TimelineMax, TweenMax, Linear, Power1, TweenLite, Power4 } from 'gsap';
require('animation.gsap');
require('debug.addIndicators');
const TimelineMax = require('TimelineMax');
const ScrollMagic = require('ScrollMagic');
import {ScrollScene} from 'scrollmagic';
import axios from "axios"


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
  
  
  floatCard.css('top',-5+(wScroll*0.05)+'em')
  })
  
  