$(document).ready(function(){

  // Code

  // Identifico il link contenente un sotto menu
  $('ul.menu-inline > li > a.sub').mouseenter(
    function() {
      $(this).next().show();
    }
  );
  $('ul.menu-inline > li > a.sub').mouseleave(
    function() {
      $(this).next().hide();
    }
  );

/////
}); // Document Ready
