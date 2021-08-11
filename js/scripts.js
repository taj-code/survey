$(document).ready(function() {
$("#iceCreamButton").click(function() {
  let radioValue = $("input[name='flavor']:checked".value());
  if(radioValue){
    alert("You like" + radioValue + "ice cream");
  }
});

  //   $("radio").submit(function(event) {
//     event.preventDefault();
//     const vanillaInput = $("input#vanilla").val();
//     const chocolateInput = $("input#chocolate").val();
//     const cookiedoughInput = $("input#cookiedough").val();
    

//     $(".vanilla").text(vanillaInput);
//     $(".chocolate").text(chocolateInput);
//     $(".cookiedough").text(cookiedoughInput);
//     $("#output").text();

//   });
});
