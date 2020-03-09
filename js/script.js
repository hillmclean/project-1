document.addEventListener("DOMContentLoaded", function () {

  // Flickity --------- //
  var elem = document.querySelector(".main-carousel");
  var flkty = new Flickity(elem, {
    cellAlign: "left",
    contain: true,
    wrapAround: true,
    prevNextButtons: false,
    autoPlay: true
  });

  var flkty = new Flickity(".main-carousel", {});

  // Email validation ----------//
  const subscribeForm = document.querySelector(".subscribe-form");
  const subscribeFormInput = document.querySelector(".subscribe-form input");

  subscribeForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const messageValue = subscribeFormInput.value;
    if (messageValue.length <= 0) {
      alert("Please submit a valid email address.");
    } else {
      alert("Thanks for subscribing!");
    }
  });
}); // --------- end of doc ready
