//
// @file
// Custom JavaScript File
// Copyright Lauren A Byrwa 2015
//

// set the date we're counting down to
var target_date = new Date('Sat Oct 08 2016 16:30:00 GMT-0600 (CST)').getTime();

// variables for time units
var days, hours, minutes, seconds;

// get tag element
var countdown = document.getElementById('countdown');

// update the tag with id "countdown" every 1 second
setInterval(function () {

  // find the amount of "seconds" between now and target
  var current_date = new Date().getTime();
  var seconds_left = (target_date - current_date) / 1000;

  // do some time calculations
  days = parseInt(seconds_left / 86400);
  seconds_left = seconds_left % 86400;

  hours = parseInt(seconds_left / 3600);
  seconds_left = seconds_left % 3600;

  minutes = parseInt(seconds_left / 60);
  seconds = parseInt(seconds_left % 60);

  // format countdown string + set tag value
  countdown.innerHTML = '<div class="center"><div class="countdown__period"><div class="countdown__period-time">' + days + '</div><div class="countdown__period-label"> Days</div></div><div class="countdown__period"><div class="countdown__period-time">' + hours + '</div><div class="countdown__period-label"> Hours</div></div><div class="countdown__period"><div class="countdown__period-time">' + minutes + '</div><div class="countdown__period-label"> Minutes</div></div><div class="countdown__period"><div class="countdown__period-time">' + seconds + '</div><div class="countdown__period-label"> Seconds</div></div></div>';

}, 1000);

;( function( $ ) {
  "use strict";

  // on scroll add fixed class to the header
  $(window).scroll(function() {
    if ($(this).scrollTop() > 1){
      $('.site__header').addClass("is-fixed");
    }
    else{
      $('.site__header').removeClass("is-fixed");
    }
  });

  // open and close mobile menu toggle
  $('.toggle--menu').click(function(e) {
    e.preventDefault();
    $(this).toggleClass('is-open');
    $(this).parent().toggleClass('is-open');
  });

} ) ( jQuery );
