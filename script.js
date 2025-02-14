document.addEventListener("DOMContentLoaded", function () {
    let noBtn = document.getElementById("noBtn");
    let yesBtn = document.getElementById("yesBtn");
    let heartsContainer = document.querySelector(".hearts-container");
    let finalMessage = document.getElementById("finalMessage");

    // 💖 Create Floating Hearts (3x More, Goes to Top)
    function createFloatingHeart() {
        for (let i = 0; i < 30; i++) { // Increased to 3x more
            let heart = document.createElement("div");
            heart.classList.add("heart");
            heart.innerHTML = ["❤️", "💖", "🌹", "💗", "💘"][Math.floor(Math.random() * 5)];
            heart.style.left = `${Math.random() * 100}vw`;
            heart.style.animationDuration = `${2 + Math.random() * 2}s`; // Faster floating
            heartsContainer.appendChild(heart);

            setTimeout(() => heart.remove(), 5000);
        }
    }
    setInterval(createFloatingHeart, 300);

    // 😈 "No" Button Moves Away Smoothly But Stays Inside Screen
    if (noBtn) {
        noBtn.style.position = "absolute"; // Ensure it's movable

        noBtn.addEventListener("mouseover", function () {
            let btnRect = noBtn.getBoundingClientRect();
            let maxX = window.innerWidth - btnRect.width - 20; // Keep inside right boundary
            let maxY = window.innerHeight - btnRect.height - 20; // Keep inside bottom boundary

            let newX = Math.min(Math.max(Math.random() * window.innerWidth, 10), maxX);
            let newY = Math.min(Math.max(Math.random() * window.innerHeight, 10), maxY);

            noBtn.style.transition = "0.3s ease-in-out"; // Smooth movement
            noBtn.style.left = `${newX}px`;
            noBtn.style.top = `${newY}px`;
        });
    }

    // 🎉 "Yes" Button Celebration Effect + Redirect
    if (yesBtn) {
        yesBtn.addEventListener("click", function () {
            yesBtn.innerText = "YAYY HAHAHA U MADE MY DAY!! 😙🥰😍😳";
            yesBtn.style.backgroundColor = "#ff4081";

            // Speed Up Hearts
            document.querySelectorAll(".heart").forEach(heart => {
                heart.style.animationDuration = "1s";
            });

            // Celebration Animation (4x More)
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
                showFinalMessage();
                setTimeout(() => {
                    window.location.href = "flower.html"; // 🌸 Redirects after 2 sec
                }, 2000);
            }, 2000);
        });
    }

    // ✨ Show Final Message in Translucent Box
    function showFinalMessage() {
        finalMessage.style.display = "flex";
        finalMessage.classList.add("vibrant-effect");

        // Add extra confetti
        for (let i = 0; i < 60; i++) {
            let confetti = document.createElement("div");
            confetti.classList.add("confetti");
            confetti.innerText = ["✨", "🎊", "🎈", "💖", "💘"][Math.floor(Math.random() * 5)];
            document.body.appendChild(confetti);

            let x = Math.random() * window.innerWidth;
            let y = Math.random() * window.innerHeight;
            confetti.style.left = `${x}px`;
            confetti.style.top = `${y}px`;

            setTimeout(() => confetti.remove(), 1500);
        }
    }
});
