$(".menu-toggle").on("click", function() {
    $(".mobile-menu-wrapper").toggleClass("d-none").toggleClass("d-flex")
    return false
  })

  $(".menu-toggle").on("click", function() {
    $("body").toggleClass("hidden")
    return false
  })
