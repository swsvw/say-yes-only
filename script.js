document.addEventListener("DOMContentLoaded", function () {
    let noBtn = document.getElementById("noBtn");
    let yesBtn = document.getElementById("yesBtn");

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
                alert("Thank you d. would love to see you soon. xoxo 💕");
            }
        });
    }
});
