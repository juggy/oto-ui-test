$(".collapse").collapse({toggle:false});

$(".measurements-popover").popover({
  content: function(){
    return $("#popover").html();
  }
});