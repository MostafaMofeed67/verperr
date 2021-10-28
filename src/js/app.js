import * as bootstrap from "bootstrap";
import AOS from "aos";

const navContainer = document.querySelector(".nav");

const navSlide = function () {
  const navList = document.querySelector(".nav__list");
  const overlay = document.querySelector(".nav__overlay");
  const burger = document.querySelector(".nav__burger");
  const close = document.querySelector(".nav__overlay--p");
  const dropDown = document.querySelector(".nav__dropdown");
  const navLink = document.querySelectorAll(".nav__link");

  burger.addEventListener("click", function () {
    navList.classList.add("active");
    overlay.classList.add("active");
    burger.classList.add("active");
    navContainer.classList.add("active");
  });

  close.addEventListener("click", function () {
    navList.classList.remove("active");
    overlay.classList.remove("active");
    burger.classList.remove("active");
    navContainer.classList.remove("active");
  });

  dropDown.addEventListener("click", function () {
    dropDown.classList.toggle("active");
  });

  // nav scroll
  window.addEventListener("scroll", () => {
    window.scrollY > 50
      ? navContainer.classList.add("active")
      : navContainer.classList.remove("active");
  });

  navLink.forEach((link) => {
    if (link.classList.contains("nav__link--dropdown")) return;

    link.addEventListener("click", () => {
      navList.classList.remove("active");
      overlay.classList.remove("active");
      burger.classList.remove("active");
      navContainer.classList.remove("active");
    });
  });
};
navSlide();

// Scroll to

const scrollTo = function () {
  const btnStarted = document.querySelectorAll(".btn--started");
  const about = document.querySelector(".about");

  btnStarted.forEach((btn) => {
    btn.addEventListener("click", () => {
      about.scrollIntoView({ behavior: "smooth" });
    });
  });

  navContainer.addEventListener("click", (e) => {
    e.preventDefault();

    if (e.target.classList.contains("nav__link")) {
      const id = e.target.getAttribute("href");

      if (id === null) return;

      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  });
};

scrollTo();

// start testmonail
(function () {
  new Swiper(".mySwiper", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 80,
      },

      1200: {
        slidesPerView: 2,
        spaceBetween: 200,
      },
    },
  });
})();
// end testmonail

// portfolio gallery

const galleryImg = function () {
  const portfolioContainer = document.querySelectorAll(".portfolio__container");
  const portfolioPreview = document.querySelector(".portfolio__preview");
  const previewImg = portfolioPreview.querySelector("img");
  const previewText = portfolioPreview.querySelector("p");
  const portfolioClose = document.querySelector(".portfolio__preview--close");

  portfolioContainer.forEach((image, index) => {
    const portfolioOpen = image.querySelector(".portfolio__open");

    portfolioOpen.addEventListener("click", function () {
      getLatestOpenImage = index + 1;

      const selectedImg = image.querySelector("img").src;
      const selectedtext = image.querySelector("h6").innerText;
      previewImg.src = selectedImg;
      previewText.innerText = selectedtext;

      portfolioPreview.classList.add("show");
    });
  });

  portfolioClose.addEventListener("click", function () {
    portfolioPreview.classList.remove("show");
  });

  // gallery buttions
  const galleryBtns = document.querySelectorAll(".portfolio__btn");
  const galleryItems = document.querySelectorAll(".portfolio .row .col-md-4");

  galleryBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelector(".portfolio__btn.portfolio__btn--active")
        .classList.remove("portfolio__btn--active");

      btn.classList.add("portfolio__btn--active");

      let target = btn.dataset.target;

      galleryItems.forEach((item) => {
        if (item.dataset.id !== target) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }

        if (target === "all") {
          item.classList.remove("active");
        }
      });
    });
  });
};

galleryImg();

// BTN SCROLL TO TOP
const btnToTop = document.querySelector(".btn--top");

window.addEventListener("scroll", () => {
  window.scrollY > 300
    ? btnToTop.classList.add("active")
    : btnToTop.classList.remove("active");
});

btnToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// AOS INIT
AOS.init();
