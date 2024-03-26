$("document").ready(function () {
  $(".btn-menu").on("click", (e) => {
    e.preventDefault();

    $(".nav-menu-mobile").toggleClass("active");
    $(".btn-menu").find("i").toggleClass("fa-x");
  });

  const hearts = $(".dish-heart i");

  hearts.each(function () {
    $(this).on("click", () => {
      $(this).toggleClass("favorite");
    });
  });
});
