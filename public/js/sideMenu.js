
/* Mobile nav button */
$('.js--nav-icon').click(function() {
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon ion-icon')
    var attr = $('.js--nav-icon ion-icon').attr('name')
    
    nav.slideToggle(200);
    if (attr == 'menu-outline') {
        icon.attr('name','close-outline')
        /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
        $('#mySidebar').css('width', '250px');
    } else {
        icon.attr('name','menu-outline')
        /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
        $('#mySidebar').css('width', '0');
    }
  });

