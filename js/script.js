// Javascript Code.
$(document).ready(function () {
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


//this shows and hides the searchbox
  $("#search").click(function(){
    $("#input").show("slow");
  });
  $("#x").click(function(){
    $("#input").hide("slow");
  });


//this saves the buttons
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
  });

});

//this will search the words
$.expr[':'].icontains = function(obj, index, meta, stack){
    return (obj.textContent || obj.innerText || jQuery(obj).text() || '').toLowerCase().indexOf(meta[3].toLowerCase()) >= 0;
  };
  $(document).ready(function(){
    $('#searcher').keyup(function(){
      tosearch = $(this).val();
      $('#list div').removeClass('highlight');
        if(jQuery.trim(tosearch) != ''){
          $("#list div:icontains('" + tosearch + "')").addClass('highlight');
        }
    });
});