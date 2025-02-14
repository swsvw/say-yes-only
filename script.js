document.addEventListener("DOMContentLoaded", function() {
    const noButton = document.getElementById("noButton");
    const yesButton = document.getElementById("yesButton");

    if (noButton && yesButton) {
        // Make "No" button move away
        noButton.addEventListener("mouseover", function() {
            const x = Math.random() * (window.innerWidth - 100);
            const y = Math.random() * (window.innerHeight - 50);
            noButton.style.position = "absolute";
            noButton.style.left = `${x}px`;
            noButton.style.top = `${y}px`;
        });

        // "Yes" button click event
        yesButton.addEventListener("click", function() {
            document.body.innerHTML = "<h1>YAYY HAHAHA U MADE MY DAY!!😙🥰😍😳</h1>";

            // Redirect to flower page after 2 seconds
            setTimeout(function() {
                window.location.href = "flower.html";
            }, 2000);
        });
    }

    // Flower Selection Page Logic
    if (document.body.id === "flowerScreen") {
        const flowers = document.querySelectorAll(".flower");
        let selectedFlowers = [];

        flowers.forEach(flower => {
            flower.addEventListener("click", function() {
                this.classList.toggle("selected");

                // Add or remove flower from selection
                const flowerName = this.getAttribute("alt");
                if (selectedFlowers.includes(flowerName)) {
                    selectedFlowers = selectedFlowers.filter(name => name !== flowerName);
                } else {
                    selectedFlowers.push(flowerName);
                }
            });
        });

        // Press Enter to display message
        document.addEventListener("keydown", function(event) {
            if (event.key === "Enter" && selectedFlowers.length > 0) {
                alert("Thank you d. would love to see you soon. xoxo 💕");
            }
        });
    }
});
