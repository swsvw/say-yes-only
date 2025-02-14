document.addEventListener("DOMContentLoaded", function () {
    let noBtn = document.getElementById("noBtn");
    let yesBtn = document.getElementById("yesBtn");
    let heartsContainer = document.querySelector(".hearts-container");

    function createFloatingHeart() {
        for (let i = 0; i < 30; i++) { 
            let heart = document.createElement("div");
            heart.classList.add("heart");
            heart.innerHTML = ["❤️", "💖", "🌹", "💗", "💘"][Math.floor(Math.random() * 5)];
            heart.style.left = `${Math.random() * 100}vw`;
            heart.style.animationDuration = `${2 + Math.random() * 2}s`;
            heartsContainer.appendChild(heart);

            setTimeout(() => heart.remove(), 5000);
        }
    }
    setInterval(createFloatingHeart, 300);

    if (noBtn) {
        noBtn.style.position = "absolute";

        noBtn.addEventListener("mouseover", function () {
            let btnRect = noBtn.getBoundingClientRect();
            let maxX = window.innerWidth - btnRect.width - 20;
            let maxY = window.innerHeight - btnRect.height - 20;

            let newX = Math.min(Math.max(Math.random() * window.innerWidth, 10), maxX);
            let newY = Math.min(Math.max(Math.random() * window.innerHeight, 10), maxY);

            noBtn.style.transition = "0.3s ease-in-out";
            noBtn.style.left = `${newX}px`;
            noBtn.style.top = `${newY}px`;
        });
    }

    if (yesBtn) {
        yesBtn.addEventListener("click", function () {
            yesBtn.innerText = "YAYY HAHAHA U MADE MY DAY!! 😙🥰😍😳";
            yesBtn.style.backgroundColor = "#ff4081";

            document.querySelectorAll(".heart").forEach(heart => {
                heart.style.animationDuration = "1s";
            });

            for (let i = 0; i < 40; i++) {
                let celebration = document.createElement("div");
                celebration.classList.add("celebration");
                celebration.innerText = "🎉";
                celebration.style.left = `${Math.random() * 100}vw`;
                celebration.style.top = `${Math.random() * 100}vh`;
                document.body.appendChild(celebration);

                setTimeout(() => celebration.remove(), 1000);
            }

            setTimeout(() => {
                window.location.href = "flower.html";  // 🌸 Redirects to flower.html
            }, 2000);
        });
    }
});
