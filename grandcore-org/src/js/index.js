import popper from "popper.js"
import $ from "jquery"

$(document).ready(function() {
  // Открыть/закрыть меню на телефоне
  $("#burger-btn").on("click", function() {
    setTimeout(function() {
      $(".header-mobile-nav").removeClass("header-mobile-nav--hidden")
      $(".overlay").removeClass("overlay--hidden")
      $(".burger-toggle input").prop("checked", true)
    }, 1000)
  })
  $("#close-mobile-nav").on("click", function() {
    $(".header-mobile-nav").addClass("header-mobile-nav--hidden")
    $(".overlay").addClass("overlay--hidden")
    $(".burger-toggle input").prop("checked", false)
  })
  // Показать/скрыть поиск
  $("#search-btn").on("click", function() {
    console.log(1)
    $(".header-right__nav").addClass("header-right__nav--hide")
    $(".header-right-btns__search").addClass("header-right-btns__search--active")
    $(this).addClass("header-right-btns__search-btn--hide")
  })
  $("#close-search-field").on("click", function() {
    $(".header-right__nav").removeClass("header-right__nav--hide")
    $(".header-right-btns__search").removeClass("header-right-btns__search--active")
    $(".header-right-btns__search-btn").removeClass("header-right-btns__search-btn--hide")
  })
  // Показать/скрыть левое меню на планшете
  $("#show-more").on("click", function() {
    $(".header-right__nav").toggleClass("header-right__nav--active")
  })
})