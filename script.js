document.addEventListener("DOMContentLoaded", function () {
    let noBtn = document.getElementById("noBtn");
    let yesBtn = document.getElementById("yesBtn");

    // Floating hearts and flowers
    function createFloatingElements() {
        const icons = ["❤️", "🌸", "💐", "🌺", "😍"];
        let element = document.createElement("div");
        element.innerText = icons[Math.floor(Math.random() * icons.length)];
        element.classList.add("floating");
        element.style.left = Math.random() * 100 + "vw";
        element.style.animationDuration = Math.random() * 2 + 3 + "s";
        document.body.appendChild(element);

        setTimeout(() => element.remove(), 5000);
    }
    
    setInterval(createFloatingElements, 700);

    // Move "No" button randomly
    if (noBtn) {
        noBtn.addEventListener("mouseover", function () {
            let x = Math.random() * (window.innerWidth - 100);
            let y = Math.random() * (window.innerHeight - 50);
            noBtn.style.position = "absolute";
            noBtn.style.left = `${x}px`;
            noBtn.style.top = `${y}px`;
        });
    }

    // "Yes" button click event
    if (yesBtn) {
        yesBtn.addEventListener("click", function () {
            yesBtn.innerText = "YAYY HAHAHA U MADE MY DAY!! 😙🥰😍😳";
            
            // Trigger confetti
            for (let i = 0; i < 50; i++) {
                setTimeout(() => createConfetti(), i * 50);
            }

            setTimeout(() => {
                window.location.href = "flower.html";
            }, 2000);
        });
    }

    // Confetti Effect
    function createConfetti() {
        let confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = Math.random() * window.innerWidth + "px";
        confetti.style.top = "-10px";
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.animationDuration = Math.random() * 2 + 2 + "s";
        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 2000);
    }
});
