const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");
const categoriesSection = document.querySelector(".categories-section");

leftArrow.addEventListener("click", () => {
    categoriesSection.scrollBy({ left: -200, behavior: "smooth" });
});

rightArrow.addEventListener("click", () => {
    categoriesSection.scrollBy({ left: 200, behavior: "smooth" });
});

function toggleLoginModal() {
    const modal = document.getElementById("login-modal");
    if (modal.style.display === "flex") {
        modal.style.display = "none";
    } else {
        modal.style.display = "flex";
    }
}