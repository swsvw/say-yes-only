document.addEventListener("DOMContentLoaded", function() {
    const noButton = document.getElementById("noButton");
    const yesButton = document.getElementById("yesButton");

    if (noButton && yesButton) {
        // Make "No" button run away from the cursor
        noButton.addEventListener("mouseover", function() {
            const x = Math.random() * window.innerWidth - 100;
            const y = Math.random() * window.innerHeight - 50;
            noButton.style.position = "absolute";
            noButton.style.left = `${x}px`;
            noButton.style.top = `${y}px`;
        });

        // "Yes" button click event
        yesButton.addEventListener("click", function() {
            document.body.innerHTML = "<h1>YAYY HAHAHA U MADE MY DAY!!😙🥰😍😳</h1>";

            // Wait 2 seconds, then move to flower page
            setTimeout(function() {
                window.location.href = "flower.html";
            }, 2000);
        });
    }

    // Flower selection page logic
    const flowers = document.querySelectorAll(".flower");

    if (flowers.length > 0) {
        // Toggle selection on click
        flowers.forEach(flower => {
            flower.addEventListener("click", function() {
                this.classList.toggle("selected");
            });
        });

        // Show message when Enter is pressed
        document.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                alert("Thank you d. would love to see you soon. xoxo 💕");
            }
        });
    }
});
