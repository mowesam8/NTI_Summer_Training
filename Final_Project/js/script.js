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

var filterBtns = document.querySelectorAll(".filter-btn");
var products = document.querySelectorAll(".product");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
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


