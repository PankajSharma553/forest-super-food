
// banner section slider code
$('.perfectSlider').slick({
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 1,
  autoplay: true,
  arrows: true,
  dots: false,
  speed: 500,
  autoplaySpeed: 1000000,

});

// Product slider code
$(document).ready(function () {
  $('.productSlider').slick({
    centerMode: false,
    centerPadding: '30px',
    slidesToShow: 3.5,
    autoplay: true,
    arrows: true,
    dots: false,
    speed: 500,
    autoplaySpeed: 100000,
    infinite: false,
    rtl: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
          centerPadding: '16px',
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: '10px',
        }
      }
    ]
  });
});

// toggle menu 
const navbar = document.querySelector(".navbar");
const humburger = document.querySelector(".humburger_menu");
const close = document.querySelector(".close");

humburger.addEventListener("click", function () {
  navbar.classList.add("active");
});
close.addEventListener("click", function () {
  navbar.classList.remove("active");
});

// accordion script
const accoundion_head = document.querySelectorAll(".accoundion_head");
const accoundion_answer = document.querySelectorAll(".accoundion_answer");
accoundion_head.forEach((accoundion_head, index) => {
  accoundion_head.addEventListener("click", function () {

    accoundion_answer.forEach((answer, i) => {
      if (i !== index) {
        answer.classList.remove("active");
      }
    });

    accoundion_answer[index].classList.toggle("active");
  });
});

// fAQ section

const accoundions_question = document.querySelectorAll(".accoundions_question");
const accoundions_answers = document.querySelectorAll(".accoundions_answers");
accoundions_question.forEach((accoundions_question, index) => {
  accoundions_question.addEventListener("click", function () {

    accoundion_answer.forEach((answer, i) => {
      if (i !== index) {
        answer.classList.remove("active");
      }
    });

    accoundions_answers[index].classList.toggle("active");
  });
});


