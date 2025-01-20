const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");
const categoriesSection = document.querySelector(".categories-section");

leftArrow.addEventListener("click", () => {
    categoriesSection.scrollBy({ left: -200, behavior: "smooth" });
});

rightArrow.addEventListener("click", () => {
    categoriesSection.scrollBy({ left: 200, behavior: "smooth" });
});

