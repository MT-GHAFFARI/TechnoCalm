"use strict";

const nav_list = document.querySelectorAll(".li-odd");
const blueLine = document.querySelector(".header-nav-blueLine");
const first_place_blueline = document.querySelector(".first");
const nav = document.querySelector(".header-nav");

/////////////////////////////////////////////////

nav_list.forEach(function (li) {
  li.addEventListener("mouseenter", function (e) {
    const elementX =
      parseInt(e.currentTarget.getBoundingClientRect().left) - 50;
    const element_width =
      parseInt(getComputedStyle(e.currentTarget).width) + 40;
    blueLine.style.width = `${element_width + "px"}`;
    blueLine.style.transform = `translateX(${elementX + "px"})`;
  });
});

nav.addEventListener("mouseover", function (e) {
  if (
    e.target.classList.contains("yes") &&
    e.currentTarget.classList.contains("yes") &&
    e.target !== e.currentTarget
  )
    blueLine.classList.add("display");
});

nav.addEventListener("mouseout", function (e) {
  blueLine.classList.remove("display");
});

///////////////////////////////////////////

// const hero_section = document.querySelector(".hero_section");
// const hide_nav = function (entries, observer) {
//   console.log(entries);
//   console.log(observer);
// };

// const option = {
//   root: null,
// };

// const nav_observer = new IntersectionObserver(hide_nav, option);
// nav_observer.observe(hero_section);

/////////////////////////////////////////////////////
//add point per image in hero section

const hero_img = document.querySelectorAll(".hero-img");
const point_box = document.querySelector(".point-box");
hero_img.forEach((el) => {
  point_box.insertAdjacentHTML(
    "beforeend",
    `<div class="point" data-number="${el.dataset.number}"></div>`
  );
});

/////////////////////////////////////////////////////
//change hero-ing using  btn

const hero_img_array = [...hero_img];
const hero_btn_container = document.querySelector(".change-hero-pic-button");
const points = [...document.querySelectorAll(".point")];

const change_picture_container = function (e) {
  let dataset_number = +hero_img_array.find((el) =>
    el.classList.contains("display")
  ).dataset.number;

  !e || [...e.target.classList][1] === "Right"
    ? dataset_number++ && dataset_number === 7 && (dataset_number = 1)
    : dataset_number-- && dataset_number === 0 && (dataset_number = 6);
  hero_img_array.forEach((img) => img.classList.remove("display"));
  hero_img_array
    .find((el) => el.dataset.number == dataset_number)
    .classList.add("display");

  points.forEach((el) => el.classList.remove("change-width"));
  points
    .find((el) => +el.dataset.number === dataset_number)
    .classList.add("change-width");
};

hero_btn_container.addEventListener("click", change_picture_container);

///////////////////////////////////////////////////////////////////////////////////
// change picture per 5second

setInterval(change_picture_container, 3000);
