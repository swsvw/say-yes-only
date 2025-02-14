document.addEventListener("DOMContentLoaded", function () {
    let noBtn = document.getElementById("noBtn");
    let yesBtn = document.getElementById("yesBtn");
    let heartsContainer = document.querySelector(".hearts-container");

    console.log("JavaScript is running!");

    // Create Floating Hearts & Flowers
    function createFloatingElement() {
        let element = document.createElement("div");
        element.classList.add("floating-element");
        element.innerHTML = ["❤️", "💖", "🌹", "💗", "💘", "🌸", "🌷", "💐"][Math.floor(Math.random() * 8)];
        element.style.left = `${Math.random() * 100}vw`;
        element.style.animationDuration = `${6 + Math.random() * 3}s`;
        heartsContainer.appendChild(element);

        setTimeout(() => element.remove(), 6000);
    }

    // Start Floating Elements Every 300ms
    let floatingInterval = setInterval(createFloatingElement, 300); // Faster spawning

    // "No" Button Moves Away on Hover
    if (noBtn) {
        noBtn.addEventListener("mouseover", function () {
            let x = Math.random() * (window.innerWidth - 100);
            let y = Math.random() * (window.innerHeight - 50);
            noBtn.style.position = "absolute";
            noBtn.style.left = `${x}px`;
            noBtn.style.top = `${y}px`;
        });
    }

    // "Yes" Button Click Effect
    if (yesBtn) {
        yesBtn.addEventListener("click", function () {
            yesBtn.innerText = "YAYY HAHAHA U MADE MY DAY!! 😙🥰😍😳";

            console.log("Yes button clicked!");

            // Increase Animation Speed
            clearInterval(floatingInterval);
            floatingInterval = setInterval(createFloatingElement, 100); // Super fast floating

            // Celebration Animation (Confetti Effect)
            for (let i = 0; i < 30; i++) { // More confetti
                let celebration = document.createElement("div");
                celebration.classList.add("celebration");
                celebration.innerText = "🎉";
                celebration.style.left = `${Math.random() * 100}vw`;
                celebration.style.top = `${Math.random() * 100}vh`;
                document.body.appendChild(celebration);

                setTimeout(() => celebration.remove(), 1000);
            }

            // Redirect to flower.html after 2 seconds
            setTimeout(() => {
                console.log("Redirecting to flower.html...");

                // Normal redirect
                window.location.href = "flower.html";

                // Backup redirect if first fails
                setTimeout(() => {
                    window.location.assign("flower.html");
                }, 3000);
            }, 2000);
        });
    }
});
