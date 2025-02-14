document.addEventListener("DOMContentLoaded", function () {
    let noBtn = document.getElementById("noBtn");
    let yesBtn = document.getElementById("yesBtn");
    let heartsContainer = document.querySelector(".hearts-container");
    let finalMessage = document.getElementById("finalMessage"); // Final message container

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

    // No Button Moves Away (Stays on Screen)
    if (noBtn) {
        noBtn.addEventListener("mouseenter", function (event) {
            moveButtonAway(event, noBtn);
        });

        function moveButtonAway(event, button) {
            const screenWidth = window.innerWidth;
            const screenHeight = window.innerHeight;
            const buttonWidth = button.clientWidth;
            const buttonHeight = button.clientHeight;

            let newX = event.clientX + (Math.random() * 100 - 50); // Move randomly away
            let newY = event.clientY + (Math.random() * 100 - 50);

            // Keep button inside screen
            newX = Math.max(10, Math.min(newX, screenWidth - buttonWidth - 10));
            newY = Math.max(10, Math.min(newY, screenHeight - buttonHeight - 10));

            button.style.position = "absolute";
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
