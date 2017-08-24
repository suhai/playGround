
$(document).ready(function(e) {
  
    $('#A').click(function(e) {
      $("#A").text('[' + e.pageX + ',  ' + e.pageY + ']');
    }); 
  
    $('#B').click(function(e) {
      var posX = $(this).offset().left; 
      var posY = $(this).offset().top;
      $("#B").text('[' + (e.pageX - posX) + ',  ' + (e.pageY - posY) + ']');
    });
  
    $('#C').click(function(e) {
      var posX = $(this).position().left;
      var posY = $(this).position().top;
      $("#C").text('[' + (e.pageX - posX) + ',  ' + (e.pageY - posY) + ']');
    });
  
    $(document).on( "mousemove", function( event ) {
      $("#log").text("[X-coord:  " + event.pageX + ", Y-coord:  " + event.pageY + ']');
    });
  });