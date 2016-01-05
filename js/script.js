// Javascript Code.
$(document).ready(function () {
//this shows and hides the searchbox
  $("#search").click(function(){
    $("#input").toggle("slow");
  });

//this saves the buttons
  $("#older").click(function(){
    $("#show").hide("slow");
    $("#show2").hide("slow");
    $("#hide").removeClass("hide");
    $("#hide2").removeClass("hide");
    $("#older").addClass("hide");
    $("#back").removeClass("hide");
  });

  $("#back").click(function(){
    $("#show").show("slow");
    $("#show2").show("slow");
    $("#hide").addClass("hide");
    $("#hide2").addClass("hide");
    $("#back").addClass("hide");
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
      $('#list div div').removeClass('highlight');
        if(jQuery.trim(tosearch) != ''){
          $("#list div div:icontains('" + tosearch + "')").addClass('highlight');
        }
    });
  });

$(document).ready(function () {
  //$.get("_posts/2014-11-09.json", function(data){
    //var posts = JSON.parse(data);
    //$(".posts").html(posts['posts'][0]['title']);
  //});

  $(this).load("_posts/posts.json", function(data){
    var posts = JSON.parse(data);
    //First post
    $("#post1").html(posts['posts'][0]['title']);
    $("#showlittle1").html(posts['posts'][0]['showlittle']);
    $(".date1").html(posts['posts'][0]['by'] + posts['posts'][0]['date']);

    $("#showlittle1").dblclick(function(){
      $("#content1").removeClass("hide");
      $("#content1").html(posts['posts'][0]['content']).slideToggle("slow");
    });

    $("#button1").click(function(){
      var toAdd = $('input[name=checkListItem1]').val();
      $("#list1").append('<div class="item">' + toAdd + '</div>');
    });

    //Second post
    $("#post2").html(posts['posts'][1]['title']);
    $("#showlittle2").html(posts['posts'][1]['showlittle']);
    $(".date1").html(posts['posts'][1]['by'] + posts['posts'][1]['date']);

    $("#showlittle2").dblclick(function(){
      $("#content2").removeClass("hide");
      $("#content2").html(posts['posts'][1]['content']).slideToggle("slow");
    });

    $("#button2").click(function(){
      var toAdd = $('input[name=checkListItem2]').val();
      $("#list2").append('<div class="item">' + toAdd + '</div>');
    });

    //Third post
    $("#post3").html(posts['posts'][2]['title']);
    $("#showlittle3").html(posts['posts'][2]['showlittle']);
    $(".date2").html(posts['posts'][2]['by'] + posts['posts'][2]['date']);

    $("#showlittle3").dblclick(function(){
      $("#content3").removeClass("hide");
      $("#content3").html(posts['posts'][2]['content']).slideToggle("slow");
    });

    $("#button3").click(function(){
      var toAdd = $('input[name=checkListItem3]').val();
      $("#list3").append('<div class="item">' + toAdd + '</div>');
    });

    //Fourth post
    $("#post4").html(posts['posts'][3]['title']);
    $("#showlittle4").html(posts['posts'][3]['showlittle']);
    $(".date2").html(posts['posts'][3]['by'] + posts['posts'][3]['date']);

    $("#showlittle4").dblclick(function(){
      $("#content4").removeClass("hide");
      $("#content4").html(posts['posts'][3]['content']).slideToggle("slow");
    });

    $("#button4").click(function(){
      var toAdd = $('input[name=checkListItem4]').val();
      $("#list4").append('<div class="item">' + toAdd + '</div>');
    });
  });
});

$(document).ready(function(){
  $("body").click(function(){
    $(".content").hide("slow");
  });
});

$(document).ready(function(){
  $(".showlittle").mouseenter(function(){
    $(this).css("color", "red");
  });
  $(".showlittle").mouseleave(function(){
    $(this).css("color", "#0080FF");
  });
});
