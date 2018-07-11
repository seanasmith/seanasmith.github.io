//Script for Parallax Scrolling
//important to add data-speed= and data-type= to section element for the areas you want to have parallax scrolling

//for these scripts to work, don't use the slim version of JQuery on your pages. Use the current core min version from https://code.jquery.com/jquery/

$(document).ready(function(){
   // cache the window object
   $window = $(window);

   $('section[data-type="background"]').each(function(){
     // declare the variable to affect the defined data-type
     var $scroll = $(this);

      $(window).scroll(function() {
        // HTML5 proves useful for helping with creating JS functions!
        // also, negative value because we're scrolling upwards
        var yPos = -($window.scrollTop() / $scroll.data('speed'));

        // background position
        var coords = '50% '+ yPos + 'px';

        // move the background
        $scroll.css({ backgroundPosition: coords });
      }); // end window scroll
   });  // end section function
}); // close out script



/* Create HTML5 element for IE */



document.createElement("section");

//Script for Scroll to Anchor
//important to include the class name of your navbar, so that regular links don't try to scroll. can change number in animate to change speed

$(document).ready(function() {

    $('.navbar a[href^="#"]').click(function() {
          var target = $(this.hash);
          if (target.length == 0) target = $('a[name="' + this.hash.substr(1) + '"]');
          if (target.length == 0) target = $('html');

          $('html, body').animate({ scrollTop: target.offset().top }, 500);
          return false;
      });

  });
