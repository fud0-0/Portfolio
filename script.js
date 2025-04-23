// script.js
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("show", entry.isIntersecting);
  });
}, {
  threshold: 0.1
});

sections.forEach((section) => {
  observer.observe(section);
});

function resizeAllGridItems() {
  const gallery = document.querySelector(".gallery");
  const rowHeight = parseInt(getComputedStyle(gallery).getPropertyValue("grid-auto-rows"));
  const rowGap = parseInt(getComputedStyle(gallery).getPropertyValue("gap"));
  const items = document.querySelectorAll(".gallery-item");

  items.forEach(item => {
    const content = item.querySelector("img");
    const rowSpan = Math.ceil((content.offsetHeight + rowGap) / (rowHeight + rowGap));
    item.style.gridRowEnd = `span ${rowSpan}`;
  });
}

window.addEventListener("load", resizeAllGridItems);
window.addEventListener("resize", resizeAllGridItems);





