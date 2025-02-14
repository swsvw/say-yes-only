document.addEventListener("DOMContentLoaded", function () {
    let noBtn = document.getElementById("noBtn");
    let yesBtn = document.getElementById("yesBtn");
    let floatingContainer = document.createElement("div");
    floatingContainer.classList.add("floating-container");
    document.body.appendChild(floatingContainer);

    if (noBtn) {
        noBtn.addEventListener("mouseover", function () {
            let x = Math.random() * (window.innerWidth - 100);
            let y = Math.random() * (window.innerHeight - 50);
            noBtn.style.position = "absolute";
            noBtn.style.left = `${x}px`;
            noBtn.style.top = `${y}px`;
        });
    }

    if (yesBtn) {
        yesBtn.addEventListener("click", function () {
            yesBtn.innerText = "YAYY HAHAHA U MADE MY DAY!! 😙🥰😍😳";
            setTimeout(() => {
                window.location.href = "flower.html";
            }, 2000);
        });
    }

    let flowers = document.querySelectorAll(".flower");
    let selectedFlowers = [];

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

    function createFloatingElement() {
        let element = document.createElement("div");
        element.classList.add("floating-element");
        element.innerHTML = ["❤️", "💖", "🌹", "💗", "💘", "🌸", "🌷", "💐"][Math.floor(Math.random() * 8)];
        element.style.left = `${Math.random() * 100}vw`;
        element.style.animationDuration = `${4 + Math.random() * 3}s`;
        floatingContainer.appendChild(element);

        setTimeout(() => element.remove(), 6000);
    }

    // Start Floating Elements Every 250ms
    setInterval(createFloatingElement, 250);
});
