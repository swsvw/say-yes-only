document.addEventListener("DOMContentLoaded", function () {
    let noBtn = document.getElementById("noBtn");
    let yesBtn = document.getElementById("yesBtn");
    let floatingContainer = document.getElementById("floatingContainer");

    // Floating hearts generator
    function createFloatingElement() {
        const emojiArray = ["❤️", "🌸", "🌺", "💖", "🌹"];
        const element = document.createElement("div");
        element.classList.add("floating");
        element.innerText = emojiArray[Math.floor(Math.random() * emojiArray.length)];
        element.style.left = Math.random() * 100 + "vw";
        element.style.bottom = "0";
        element.style.animationDuration = Math.random() * 3 + 2 + "s";
        floatingContainer.appendChild(element);

        setTimeout(() => {
            element.remove();
        }, 5000);
    }

    setInterval(createFloatingElement, 300); // More floating elements now

    // No button moves away but stays on screen
    if (noBtn) {
        noBtn.addEventListener("mouseover", function (event) {
            let x = Math.random() * (window.innerWidth - 100);
            let y = Math.random() * (window.innerHeight - 50);
            noBtn.style.left = `${x}px`;
            noBtn.style.top = `${y}px`;
        });
    }

    // Confetti Celebration
    function createConfetti() {
        for (let i = 0; i < 100; i++) {  // Increased confetti
            let confetti = document.createElement("div");
            confetti.classList.add("confetti");
            confetti.style.setProperty("--color", getRandomColor());
            confetti.style.left = Math.random() * 100 + "vw";
            confetti.style.bottom = "0";
            confetti.style.animationDuration = Math.random() * 2 + 1 + "s";
            document.body.appendChild(confetti);

            setTimeout(() => {
                confetti.remove();
            }, 2000);
        }
    }

    function getRandomColor() {
        const colors = ["#FFD700", "#FF69B4", "#00FF7F", "#FF4500", "#1E90FF"];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    // Yes button action
    if (yesBtn) {
        yesBtn.addEventListener("click", function () {
            yesBtn.innerText = "YAYY HAHAHA U MADE MY DAY!! 😙🥰😍😳";
            createConfetti();

            setTimeout(() => {
                window.location.href = "flower.html";
            }, 3000);
        });
    }
});
