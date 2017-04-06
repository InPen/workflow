//select button
//*button on click
//makes top three sections turn blue
$( "button" ).on( "click", function() {
  console.log("working");
  $(".tres").toggleClass("blue");
});
