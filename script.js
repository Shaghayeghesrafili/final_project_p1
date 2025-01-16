const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");
const categoriesSection = document.querySelector(".categories-section");

// تابع برای اسکرول به چپ
leftArrow.addEventListener("click", () => {
    categoriesSection.scrollLeft -= 200;
});

// تابع برای اسکرول به راست
rightArrow.addEventListener("click", () => {
    categoriesSection.scrollLeft += 200;
});

// غیرفعال‌کردن دکمه‌ها در صورت رسیدن به ابتدا یا انتها
categoriesSection.addEventListener("scroll", () => {
    leftArrow.disabled = categoriesSection.scrollLeft === 0;
    rightArrow.disabled = 
        categoriesSection.scrollLeft + categoriesSection.offsetWidth >= 
        categoriesSection.scrollWidth;
});