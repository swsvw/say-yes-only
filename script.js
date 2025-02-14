document.addEventListener("DOMContentLoaded", function () {
    let noBtn = document.getElementById("noBtn");
    let yesBtn = document.getElementById("yesBtn");
    let heartsContainer = document.querySelector(".hearts-container");

    // Create Floating Hearts
    function createFloatingHeart() {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = ["❤️", "💖", "🌹", "💗", "💘"][Math.floor(Math.random() * 5)];
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${3 + Math.random() * 3}s`;
        heartsContainer.appendChild(heart);

        setTimeout(() => heart.remove(), 6000);
    }

    setInterval(createFloatingHeart, 500);

    // No Button Runs Away (Stays Inside Screen)
    if (noBtn) {
        noBtn.addEventListener("mouseover", function () {
            let maxX = window.innerWidth - noBtn.clientWidth - 20;
            let maxY = window.innerHeight - noBtn.clientHeight - 20;
            
            let x = Math.random() * maxX;
            let y = Math.random() * maxY;
            
            noBtn.style.position = "absolute";
            noBtn.style.left = `${x}px`;
            noBtn.style.top = `${y}px`;
        });
    }

    // Yes Button Click Effect
    if (yesBtn) {
        yesBtn.addEventListener("click", function () {
            yesBtn.innerText = "YAYY HAHAHA U MADE MY DAY!! 😙🥰😍😳";

            // Speed Up Hearts
            document.querySelectorAll(".heart").forEach(heart => {
                heart.style.animationDuration = "1s";
            });

            // Celebration Animation
            for (let i = 0; i < 10; i++) {
                let celebration = document.createElement("div");
                celebration.classList.add("celebration");
                celebration.innerText = "🎉";
                celebration.style.left = `${Math.random() * 100}vw`;
                celebration.style.top = `${Math.random() * 100}vh`;
                document.body.appendChild(celebration);

                setTimeout(() => celebration.remove(), 2000);
            }

            setTimeout(() => {
                window.location.href = "flower.html";
            }, 2000);
        });
    }
});
