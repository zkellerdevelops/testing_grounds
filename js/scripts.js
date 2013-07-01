$(document).ready(function() {
  $("#hero").hover(function(){
    $(this).animate({ height: "500px", width: "100%" }, 785);
      $("#headline").hide('slow', function(){
      });
  }, function(){
    $(this).animate({ height: "150px", width: "100%" }, 785);
      $("#headline").show('slow', function(){
      });
  });

});