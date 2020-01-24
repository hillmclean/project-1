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

  // Email validation / check email input using if statement alert if input is empty
  const subscribeForm = document.getElementsByClassName("subscribe-Form");
  const formSubmit = document.querySelector(".subscribe-form input");

  subscribeForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const messageValue = messageInput.value;
    if (messageValue.length <= 0) {
      // similar to what you will do for Aloha
      alert("You have not entered an email address.");
    }
  });
}); // --------- end of doc ready
