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
    console.log(elementX, element_width);
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

// const

// const nav_observe=new IntersectionObserver(,{root:null});
