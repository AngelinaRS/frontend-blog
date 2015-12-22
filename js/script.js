// Javascript Code.
$(document).ready(function () {
  $("#search").click(function(){
    $("#input").show("slow");
  });
  $("#x").click(function(){
    $("#input").hide("slow");
  });

  $("#older").click(function(){
    $("#show").hide("slow");
    $("#show2").hide("slow");
    $(".hide").removeClass("hide");
    $("#older").addClass("hide");
  });

  $("#newer").click(function(){
    $("#show").show("slow");
    $("#show2").show("slow");
    $("#hide").addClass("hide");
    $("#hide2").addClass("hide");
    $("#newer").addClass("hide");
    $("#older").removeClass("hide");
  })


  // $.get("_posts/2014-11-09.json", function(data){
  //
  //   var posts = JSON.parse(data);
  //   $(".posts").html(posts['posts'][0]['title']);
  //
  // });

  //$(this).load("_posts/posts.json", function(data){
   //var posts = JSON.parse(data);
   //$(".posts").html(posts['posts'][0]['title']);
    //
  //});

});
