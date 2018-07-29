(function() {
  "use strict";

  // Scroll

  $("a.scroll").on("click", function(e) {
    let addres = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(addres.attr("href")).offset().top - 50
        },
        1500
      );
    e.preventDefault();
  });
  // Navigation
  $(window).on("scroll", function() {
    if ($(window).scrollTop() > 100) {
      $(".menu-nav").addClass("menu-show");
    } else {
      $(".menu-nav").removeClass("menu-show");
    }
  });

  //   Mixitup
  $("#produk-group").mixItUp();
})(jQuery);
