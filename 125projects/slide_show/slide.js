/*Slide Show – Make an application that shows various pictures in a slide show format. For extra complexity try adding various effects like fade in/out, star wipe and window blinds transitions. */

function main(){
  $('.next_arrow').click(function(){
    
    var current_image = $('.active_image');
    var next_image = current_image.next();
    
    if (next_image.length == 0){
      next_image = $('.slide_image').first();
    }
    
    current_image.hide(600).removeClass('active_image');
    next_image.show(600).addClass('active_image');
  });
  
  $('.prev_arrow').click(function(){
    var current_image = $('.active_image');
    var prev_image = current_image.prev();
    
    if (prev_image.length == 0){
      prev_image = $('.slide_image').last();
    }
    
    current_image.hide(600).removeClass('active_image');
    prev_image.show(600).addClass('active_image');
  });

  $('#gallery').click(function(){
    
    var current_image = $('.active_image');
    var next_image = current_image.next();
    
    if (next_image.length == 0){
      next_image = $('.slide_image').first();
    }
    
    current_image.hide(600).removeClass('active_image');
    next_image.show(600).addClass('active_image');
  });
  
};

$(document).ready(main);
