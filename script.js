(function($) {
    "use strict"; // Start of use strict

    new WOW().init(); 

    document.onreadystatechange = function() { 
      if (document.readyState !== "complete") { 
          document.querySelector( 
            "body").style.visibility = "hidden"; 
          document.querySelector( 
            "#loader").style.visibility = "visible"; 
      } else { 
          document.querySelector( 
            "#loader").style.display = "none"; 
          document.querySelector( 
            "body").style.visibility = "visible"; 
      } 
  }; 
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top)
          }, 1000, "easeInOutBack");
          return true;
        }
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#sideNav'
    });
  
  })(jQuery); // End of use strict
  