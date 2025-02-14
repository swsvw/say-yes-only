document.addEventListener("DOMContentLoaded", function () {
    let noBtn = document.getElementById("noBtn");
    let yesBtn = document.getElementById("yesBtn");
    let floatingContainer = document.getElementById("floatingContainer");

    // Floating hearts and flowers generator
    function createFloatingElement() {
        const emojiArray = ["❤️", "🌸", "💐", "🌺", "💖", "🌹"];
        const element = document.createElement("div");
        element.classList.add("floating");
        element.innerText = emojiArray[Math.floor(Math.random() * emojiArray.length)];
        element.style.left = Math.random() * 100 + "vw";
        element.style.top = "100vh";
        element.style.animationDuration = Math.random() * 3 + 2 + "s";
        element.style.fontSize = Math.random() * 10 + 20 + "px";
        floatingContainer.appendChild(element);

        setTimeout(() => {
            element.remove();
        }, 5000);
    }

    setInterval(createFloatingElement, 500); // Create floating elements every 500ms

    // No button moves away
    if (noBtn) {
        noBtn.addEventListener("mouseover", function () {
            let x = Math.random() * (window.innerWidth - 100);
            let y = Math.random() * (window.innerHeight - 50);
            noBtn.style.position = "absolute";
            noBtn.style.left = `${x}px`;
            noBtn.style.top = `${y}px`;
        });
    }

    // Confetti Animation Function
    function createConfetti() {
        for (let i = 0; i < 50; i++) {
            let confetti = document.createElement("div");
            confetti.classList.add("confetti");
            confetti.style.setProperty("--color", getRandomColor());
            confetti.style.left = Math.random() * 100 + "vw";
            confetti.style.top = Math.random() * -10 + "vh";
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
