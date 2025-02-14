document.addEventListener("DOMContentLoaded", function () {
    let noBtn = document.getElementById("noBtn");
    let yesBtn = document.getElementById("yesBtn");
    let floatingInterval;

    // Floating hearts and flowers
    function createFloatingElements(speedMultiplier = 1) {
        const icons = ["❤️", "🌸", "💐", "🌺", "😍"];
        for (let i = 0; i < 5 * speedMultiplier; i++) {  // Increase the count based on speedMultiplier
            let element = document.createElement("div");
            element.innerText = icons[Math.floor(Math.random() * icons.length)];
            element.classList.add("floating");
            element.style.left = Math.random() * 100 + "vw";
            element.style.animationDuration = Math.random() * 2 + 3 + "s";
            document.body.appendChild(element);

            setTimeout(() => element.remove(), 5000);
        }
    }
    
    // Start floating hearts and flowers every 700ms initially
    floatingInterval = setInterval(() => createFloatingElements(), 700);

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
            
            // Increase floating elements speed
            clearInterval(floatingInterval);
            floatingInterval = setInterval(() => createFloatingElements(5), 200);  // More hearts and flowers, faster

            // Trigger confetti
            for (let i = 0; i < 100; i++) {  // More confetti particles
                setTimeout(() => createConfetti(), i * 20);
            }

            setTimeout(() => {
                window.location.href = "flower.html";
            }, 3000);
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
