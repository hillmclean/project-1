document.addEventListener("DOMContentLoaded", function() {
  console.log("document is ready");
  // your code goes inside

  /*
   *
   * Flickity / add carousel js
   * */
  var elem = document.querySelector(".main-carousel");
  var flkty = new Flickity(elem, {
    // options
    cellAlign: "left",
    contain: true,
    wrapAround: true
  });

  // element argument can be a selector string
  //   for an individual element
  var flkty = new Flickity(".main-carousel", {
    // options
  });

  /*

  * Email validation / check email input using if statement alert if input is empty
  * 
  */
}); // --------- end of doc ready
