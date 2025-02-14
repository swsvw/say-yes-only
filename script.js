document.addEventListener("DOMContentLoaded", function () {
    let noBtn = document.getElementById("noBtn");
    let yesBtn = document.getElementById("yesBtn");
    let flowers = document.querySelectorAll(".flower");
    let selectedFlowers = [];

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
            floatingInterval = setInterval(() => createFloatingElements(5), 200);

            // Trigger confetti
            for (let i = 0; i < 100; i++) {
                setTimeout(() => createConfetti(), i * 20);
            }

            setTimeout(() => {
                window.location.href = "flower.html";
            }, 3000);
        });
    }

    // Flower selection logic
    if (flowers.length > 0) {
        flowers.forEach(flower => {
            flower.addEventListener("click", function () {
                if (selectedFlowers.includes(flower)) {
                    flower.classList.remove("selected");
                    selectedFlowers = selectedFlowers.filter(f => f !== flower);
                } else {
                    flower.classList.add("selected");
                    selectedFlowers.push(flower);
                }
            });
        });

        // Press "Enter" to finalize
        document.addEventListener("keydown", function (event) {
            if (event.key === "Enter" && selectedFlowers.length > 0) {
                document.body.innerHTML = `
                    <div class="container">
                        <h1>Thank you d. would love to see you soon. xoxo 💕</h1>
                    </div>
                `;
            }
        });
    }

    // Floating hearts and flowers
    function createFloatingElements(speedMultiplier = 1) {
        const icons = ["❤️", "🌸", "💐", "🌺", "😍"];
        for (let i = 0; i < 15 * speedMultiplier; i++) {
            let element = document.createElement("div");
            element.innerText = icons[Math.floor(Math.random() * icons.length)];
            element.classList.add("floating");
            element.style.left = Math.random() * 100 + "vw";
            element.style.animationDuration = Math.random() * 2 + 3 + "s";
            document.body.appendChild(element);

            setTimeout(() => element.remove(), 5000);
        }
    }

    let floatingInterval = setInterval(() => createFloatingElements(), 700);

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
