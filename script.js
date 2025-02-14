document.addEventListener("DOMContentLoaded", function () {
    let noBtn = document.getElementById("noBtn");
    let yesBtn = document.getElementById("yesBtn");
    let heartsContainer = document.querySelector(".hearts-container");
    let speed = 1; // Speed of "No" button movement

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

    // No Button Runs Away
    if (noBtn) {
        noBtn.addEventListener("mouseover", function () {
            let x = Math.random() * (window.innerWidth - 100) * speed;
            let y = Math.random() * (window.innerHeight - 50) * speed;
            noBtn.style.left = `${x}px`;
            noBtn.style.top = `${y}px`;
            speed += 0.3; // Makes it move faster each time
        });
    }

    // Yes Button Click Effect
    if (yesBtn) {
        yesBtn.addEventListener("click", function () {
            yesBtn.innerText = "YAYY!! 💖😍";

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

                setTimeout(() => celebration.remove(), 1000);
            }

            setTimeout(() => {
                window.location.href = "flower.html";
            }, 2000);
        });
    }
});
