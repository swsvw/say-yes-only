document.addEventListener("DOMContentLoaded", function () {
    const flowers = document.querySelectorAll(".flower");

    // Click to select/deselect flowers
    flowers.forEach(flower => {
        flower.addEventListener("click", function () {
            flower.classList.toggle("selected");
        });
    });

    // Press Enter to show thank-you message
    document.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            if (document.querySelectorAll(".selected").length > 0) {
                document.body.innerHTML = `<h1 class="message">Thank you d. would love to see you soon. xoxo 💕</h1>`;
            }
        }
    });
});
