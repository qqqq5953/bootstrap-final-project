$(document).ready(function () {
  //點擊nav-item後將navbar收合
  $('.nav-item').click(function (event) {
    $(this).parent().parent().toggleClass("show");
  });
  //navbar打開時調整其與logo的距離
  $('.navbar-toggler').click(function (event) {
    $("#navbarSupportedContent").addClass("mt-5");
  });
  //點擊愛心效果
  $('.snackLikeBtn').click(function (event) {
    event.preventDefault();
    $(this).toggleClass('d-none');
    $(this).siblings('.snackLikeBtn-active').toggleClass('d-block');
  })
  $('.snackLikeBtn-active').click(function (event) {
    event.preventDefault();
    $(this).toggleClass('d-block');
    $(this).siblings('.snackLikeBtn').toggleClass('d-none');
  })

  $('.snackLikeBtn-product').click(function (event) {
    event.preventDefault();
    $(this).toggleClass('d-none');
    $(this).siblings('.snackLikeBtn-product-active').toggleClass('d-block');
  })
  $('.snackLikeBtn-product-active').click(function (event) {
    event.preventDefault();
    $(this).toggleClass('d-block');
    $(this).siblings('.snackLikeBtn-product').toggleClass('d-none');
  })
});
