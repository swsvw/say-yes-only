document.addEventListener("DOMContentLoaded", function () {
    let noBtn = document.getElementById("noBtn");
    let yesBtn = document.getElementById("yesBtn");
    let heartsContainer = document.querySelector(".hearts-container");

    console.log("JavaScript is running!");

    // Create Floating Hearts Animation
    function createFloatingHeart() {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = ["❤️", "💖", "🌹", "💗", "💘"][Math.floor(Math.random() * 5)];
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${3 + Math.random() * 3}s`;
        heartsContainer.appendChild(heart);

        setTimeout(() => heart.remove(), 6000);
    }

    // Start floating hearts every 500ms
    setInterval(createFloatingHeart, 500);

    // No Button Moves Away
    if (noBtn) {
        noBtn.addEventListener("mouseover", function () {
            let x = Math.random() * (window.innerWidth - 100);
            let y = Math.random() * (window.innerHeight - 50);
            noBtn.style.position = "absolute";
            noBtn.style.left = `${x}px`;
            noBtn.style.top = `${y}px`;
        });
    }

    // Yes Button Click Effect
    if (yesBtn) {
        yesBtn.addEventListener("click", function () {
            yesBtn.innerText = "YAYY HAHAHA U MADE MY DAY!! 😙🥰😍😳";

            console.log("Yes button clicked!");

            // Celebration Animation (Confetti Effect)
            for (let i = 0; i < 20; i++) {
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
                window.location.href = "flower.html";
            }, 2000);
        });
    }
});
