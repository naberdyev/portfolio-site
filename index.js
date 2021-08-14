$( document ).ready(function() {
    var hamburger = $('#hamburger-icon');
    hamburger.click(function() {
       hamburger.toggleClass('active');
       $('.mobile-menu').toggleClass('mobile-menu_active');
       $('.body').toggleClass('body_inactive');
       return false;
    });
  });
  
