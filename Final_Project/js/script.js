document.querySelector('.nav-link[href="index.html"]').addEventListener('click', function (e) {
  window.location.href = 'index.html';
});

// Scroll Top Button
var topBtn = document.getElementById('scrollTopBtn')
var targetSection = document.getElementById('carouselExampleCaptions')
window.addEventListener('scroll', () => {
  var sectionTop = targetSection.offsetTop
  if (window.scrollY > (sectionTop)) {
    topBtn.classList.add('active')
  }
  else topBtn.classList.remove('active')
})

document.getElementById("scrollTopBtn").onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
// Counter Start on Scroll
let started = false;
let counters = document.querySelectorAll(".num");
let section = document.querySelector("#count-section");

function startCount(el, duration) {
  let goal = parseInt(el.dataset.goal);
  let count = 0;
  let steps = duration / 10;
  let increment = goal / steps;

  let counter = setInterval(() => {
    count += increment;
    if (count >= goal) {
      el.textContent = goal;
      clearInterval(counter);
    } else {
      el.textContent = Math.floor(count);
    }
  }, 10);
}

// our work filter 
var filterBtns = document.querySelectorAll(".filter-btn");
var products = document.querySelectorAll(".product");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    products.forEach(product => {
      const categories = product.dataset.category.split(" ");
      if (filter === "all" || categories.includes(filter)) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  });
});

// Pricing section

document.addEventListener("DOMContentLoaded", function () {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const pricingBlocks = document.querySelectorAll(".pricing-cards");
  pricingBlocks.forEach(block => {
    block.style.display = (block.dataset.category === "month") ? "flex" : "none";
  });

  filterBtns.forEach(btn => {
    btn.addEventListener("click", function () {
      const filterValue = this.dataset.filter;
      filterBtns.forEach(b => {
        b.classList.remove("btn-primary");
        b.classList.add("btn-outline-primary");
      });
      this.classList.remove("btn-outline-primary");
      this.classList.add("btn-primary");
      pricingBlocks.forEach(block => {
        if (block.dataset.category === filterValue) {
          block.style.display = "flex";
        } else {
          block.style.display = "none";
        }
      });
    });
  });
});

// Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let isValid = true;

  const nameInput = document.getElementById("name");
  const nameError = document.getElementById("nameError");
  if (nameInput.value.trim() === "") {
    nameError.classList.remove("opacity-0");
    isValid = false;
  } else {
    nameError.classList.add("opacity-0");
  }

  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    emailError.classList.remove("opacity-0");
    isValid = false;
  } else {
    emailError.classList.add("opacity-0");
  }

  const subjectInput = document.getElementById("subject");
  const subjectError = document.getElementById("subjectError");
  if (subjectInput.value.trim() === "") {
    subjectError.classList.remove("opacity-0");
    isValid = false;
  } else {
    subjectError.classList.add("opacity-0");
  }

  if (isValid) {
    this.submit();
  }
});

// Testomnials
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    margin: 16,
    nav: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      992: {
        items: 2
      }
    },
    navText: [
      '<i class="fa-solid fa-arrow-left"></i>',
      '<i class="fa-solid fa-arrow-right"></i>'
    ],

  });
});

