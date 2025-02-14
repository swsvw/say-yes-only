document.addEventListener("DOMContentLoaded", function () {
    let noBtn = document.getElementById("noBtn");
    let yesBtn = document.getElementById("yesBtn");
    let heartsContainer = document.querySelector(".hearts-container");

    // Create Floating Hearts (2x more)
    function createFloatingHeart() {
        for (let i = 0; i < 10; i++) {
            let heart = document.createElement("div");
            heart.classList.add("heart");
            heart.innerHTML = ["❤️", "💖", "🌹", "💗", "💘"][Math.floor(Math.random() * 5)];
            heart.style.left = `${Math.random() * 100}vw`;
            heart.style.animationDuration = `${3 + Math.random() * 3}s`;
            heartsContainer.appendChild(heart);

            setTimeout(() => heart.remove(), 6000);
        }
    }
    setInterval(createFloatingHeart, 500);

    // No Button Moves Away
    document.addEventListener("DOMContentLoaded", function () {
        const noButton = document.getElementById("no-btn");
    
        noButton.addEventListener("mouseenter", function () {
            moveButtonAway(noButton);
        });
    
        function moveButtonAway(button) {
            const screenWidth = window.innerWidth;
            const screenHeight = window.innerHeight;
    
            let newX = Math.random() * (screenWidth - button.clientWidth);
            let newY = Math.random() * (screenHeight - button.clientHeight);
    
            // Ensure the button doesn't go off-screen
            newX = Math.min(newX, screenWidth - button.clientWidth - 10);
            newY = Math.min(newY, screenHeight - button.clientHeight - 10);
            newX = Math.max(newX, 10);
            newY = Math.max(newY, 10);
    
            button.style.position = "absolute";
            button.style.left = `${newX}px`;
            button.style.top = `${newY}px`;
        }
    });
    

    // Yes Button Celebration Effect
    if (yesBtn) {
        yesBtn.addEventListener("click", function () {
            yesBtn.innerText = "YAYY HAHAHA U MADE MY DAY!! 😙🥰😍😳";

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
                window.location.href = "flower.html";
            }, 2000);
        });
    }
});
