document.addEventListener("DOMContentLoaded", function () {
    let noBtn = document.getElementById("noBtn");
    let yesBtn = document.getElementById("yesBtn");
    let heartsContainer = document.querySelector(".hearts-container");
    let finalMessage = document.getElementById("finalMessage");

    // Create Floating Hearts & Flowers (2x more)
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

    // No Button Moves Away (Opposite Direction from Cursor)
    if (noBtn) {
        noBtn.style.position = "absolute"; // Ensure position is absolute

        noBtn.addEventListener("mousemove", function (event) {
            moveButtonAway(event, noBtn);
        });

        function moveButtonAway(event, button) {
            const screenWidth = window.innerWidth;
            const screenHeight = window.innerHeight;
            const buttonWidth = button.clientWidth;
            const buttonHeight = button.clientHeight;

            let rect = button.getBoundingClientRect();
            let buttonX = rect.left + buttonWidth / 2;
            let buttonY = rect.top + buttonHeight / 2;

            let cursorX = event.clientX;
            let cursorY = event.clientY;

            // Calculate direction away from cursor
            let deltaX = buttonX - cursorX;
            let deltaY = buttonY - cursorY;
            let distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

            // Normalize direction
            let moveX = (deltaX / distance) * 100;
            let moveY = (deltaY / distance) * 100;

            // New Position
            let newX = buttonX + moveX;
            let newY = buttonY + moveY;

            // Ensure the button stays inside the screen
            newX = Math.max(10, Math.min(newX, screenWidth - buttonWidth - 10));
            newY = Math.max(10, Math.min(newY, screenHeight - buttonHeight - 10));

            // Apply new position with smooth transition
            button.style.transition = "left 0.2s ease-out, top 0.2s ease-out";
            button.style.left = `${newX}px`;
            button.style.top = `${newY}px`;
        }
    }

    // Yes Button Celebration Effect (4x More Celebration)
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
                showFinalMessage();
            }, 2000);
        });
    }

    // Show Final Message in Translucent Box
    function showFinalMessage() {
        finalMessage.style.display = "flex"; // Show the message
        finalMessage.classList.add("vibrant-effect");

        // Add extra confetti
        for (let i = 0; i < 60; i++) {
            let confetti = document.createElement("div");
            confetti.classList.add("confetti");
            confetti.innerText = ["✨", "🎊", "🎈", "💖", "💘"][Math.floor(Math.random() * 5)];
            confetti.style.left = `${Math.random() * 100}vw`;
            confetti.style.top = `${Math.random() * 100}vh`;
            document.body.appendChild(confetti);

            setTimeout(() => confetti.remove(), 1500);
        }
    }
});
x``