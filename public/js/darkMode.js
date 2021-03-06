
/* Dark Mode */
$('#darkModebtn').click(function() {

  var color= $('html').css('background-color')
  if (color == 'rgb(0, 0, 0)') {
      $('html').css('background-color', 'white')
      $('html').css('color', 'black')
      $('.header__title a').css('color', 'black')
      $('.header__nav li a').css('color', 'black')
      $('.sidebar h1').css('color', 'black')
      $('.sidebar__menu a').css('color', 'black')
      $('.sidebar__droplist-btn').css('color', 'black')
      $('.sidebar__droplist a').css('color', 'black')
      $('.sidebar__menu a:hover').css('color', '#3a3a3a')
      $('.sidebar--mobile').css('background-color', '#eeeeee')
      $('.sidebar--mobile-btn').css('background-color', '#eeeeee')
      $('.sidebar--mobile-btn ion-icon').css('color', 'black')
      $('.random-btn').css('background-color', 'black')
      $('.random-btn').css('color', 'white')
      $('.thankyou_message').css('color', 'black')
      $('.sendButton').css('background-color', 'black')
      $('.sendButton').css('color', 'white')
      $('#darkModebtn').css('background-color', 'black')
      $('#darkModebtn').css('color', 'white')
      $('#topScrollbtn').css('background-color', 'black')
      $('#topScrollbtn').css('color', 'white')
      $('.car-post img').css('filter', 'invert(100%)')
  } else {
      $('html').css('background-color', 'black')
      $('html').css('color', 'white')
      $('.header__title a').css('color', 'white')
      $('.header__nav li a').css('color', 'white')
      $('.sidebar h1').css('color', 'white')
      $('.sidebar__menu a').css('color', 'white')
      $('.sidebar__droplist-btn').css('color', 'white')
      $('.sidebar__droplist a').css('color', 'white')
      $('.sidebar__menu a:hover').css('color', '#ccc')
      $('.sidebar--mobile').css('background-color', '#111')
      $('.sidebar--mobile-btn').css('background-color', '#111')
      $('.sidebar--mobile-btn ion-icon').css('color', 'white')
      $('.random-btn').css('background-color', 'white')
      $('.random-btn').css('color', 'black')
      $('.thankyou_message').css('color', 'white')
      $('.sendButton').css('background-color', 'white')
      $('.sendButton').css('color', 'black')
      $('#darkModebtn').css('background-color', 'white')
      $('#darkModebtn').css('color', 'black')
      $('#topScrollbtn').css('background-color', 'white')
      $('#topScrollbtn').css('color', 'black')
      $('.car-post img').css('filter', 'invert(0%)')
  }
  
});