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
    wrapAround: true,
    prevNextButtons: false
  });

  // element argument can be a selector string
  //   for an individual element
  var flkty = new Flickity(".main-carousel", {
    // options
  });

  // Email validation / check email input using if statement alert if input is empty
  const subscribeForm = document.querySelector(".subscribe-form");
  const subscribeFormInput = document.querySelector(".subscribe-form input");

  subscribeForm.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("form submitted");
    const messageValue = subscribeFormInput.value;
    if (messageValue.length <= 0) {
      // similar to what you will do for Aloha
      alert("Please submit a valid email address.");
    } else {
      alert("Thanks for subscribing!");
    }
  });
}); // --------- end of doc ready
