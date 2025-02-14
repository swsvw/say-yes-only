document.addEventListener("DOMContentLoaded", function () {
    let noBtn = document.getElementById("noBtn");
    let yesBtn = document.getElementById("yesBtn");

    // Move "No" button randomly when hovered
    noBtn.addEventListener("mouseover", function () {
        let x = Math.random() * (window.innerWidth - 100);
        let y = Math.random() * (window.innerHeight - 50);
        noBtn.style.position = "absolute";
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    });

    // "Yes" button click event
    yesBtn.addEventListener("click", function () {
        yesBtn.innerText = "YAYYY! HAHAHA U MADE MY DAY!! 😙🥰😍😳";
        yesBtn.style.pointerEvents = "none";

        startCelebration();

        setTimeout(() => {
            window.location.href = "flower.html";
        }, 5000);
    });

    // Floating hearts and flowers
    function createFloatingElements() {
        const icons = ["❤️", "🌸", "🌺", "😍", "💖", "🌹", "🌷"];
        let element = document.createElement("div");
        element.innerText = icons[Math.floor(Math.random() * icons.length)];
        element.classList.add("floating");
        element.style.left = Math.random() * 100 + "vw";
        element.style.animationDuration = Math.random() * 2 + 4 + "s";
        element.style.fontSize = Math.random() * 20 + 20 + "px";
        document.body.appendChild(element);

        setTimeout(() => element.remove(), 6000);
    }

    setInterval(createFloatingElements, 200);

    // Confetti Celebration
    function startCelebration() {
        for (let i = 0; i < 200; i++) {
            setTimeout(createConfetti, i * 10);
        }
    }

    function createConfetti() {
        let confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = Math.random() * window.innerWidth + "px";
        confetti.style.top = "-10px";
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.animationDuration = Math.random() * 1.5 + 1 + "s";
        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 1500);
    }
});
