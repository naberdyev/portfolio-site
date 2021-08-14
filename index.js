$( document ).ready(function() {
    $('#hamburger-icon').click(function() {
       $('#hamburger-icon').toggleClass('active')
       $('.mobile-menu').toggleClass('mobile-menu_active')
       $('.mobile-menu__change-language').toggleClass('change-language_active');
       $('.body').toggleClass('body_inactive')
       return false;
    });
  });
  
$(document).ready(function () {
    $('.mobile-menu__link').click(function (e) { 
        $('.body').toggleClass('body_inactive')
        $('.mobile-menu').toggleClass('mobile-menu_active')
        $('.mobile-menu__change-language').toggleClass('change-language_active');
        $('#hamburger-icon').toggleClass('active')
    });
});