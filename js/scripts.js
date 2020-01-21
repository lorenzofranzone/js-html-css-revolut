$(document).ready(function(){

  // Code

  // Identifico il link contenente un sotto menu
  $('ul.menu-inline > li.sub').mouseenter(
    function() {
      $(this).children('.menu-block').show();
    }
  );
  $('ul.menu-inline > li.sub').mouseleave(
    function() {
      $(this).children('.menu-block').hide();
    }
  );

/////
}); // Document Ready
