document.addEventListener("DOMContentLoaded", function () {
    let noBtn = document.getElementById("noBtn");
    let yesBtn = document.getElementById("yesBtn");
    let heartsContainer = document.createElement("div");
    heartsContainer.classList.add("hearts-container");
    document.body.appendChild(heartsContainer);

    console.log("JavaScript is running!");

    // Floating Hearts with Smooth Effect (Always Visible)
    function createFloatingHeart() {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${3 + Math.random() * 3}s`; // Random floating speed
        heart.style.fontSize = `${20 + Math.random() * 15}px`; // Random size
        heart.style.opacity = `${0.6 + Math.random() * 0.4}`; // Random transparency
        heartsContainer.appendChild(heart);

        setTimeout(() => heart.remove(), 6000);
    }

    // Start Floating Hearts Immediately
    for (let i = 0; i < 15; i++) {
        setTimeout(createFloatingHeart, i * 400); // Delayed start for natural effect
    }
    setInterval(createFloatingHeart, 500); // Hearts keep appearing

    // "No" Button Moves Away Smoothly
    if (noBtn) {
        noBtn.addEventListener("mouseover", function () {
            let x = Math.random() * (window.innerWidth - 100);
            let y = Math.random() * (window.innerHeight - 50);
            noBtn.style.position = "absolute";
            noBtn.style.transition = "0.3s ease-in-out"; // Smooth movement
            noBtn.style.left = `${x}px`;
            noBtn.style.top = `${y}px`;
        });
    }

    // "Yes" Button Click Effect
    if (yesBtn) {
        yesBtn.addEventListener("click", function () {
            yesBtn.innerText = "YAYY You Just Made My Day 🎊💖";
            yesBtn.style.backgroundColor = "#ff4081";

            console.log("Yes button clicked!");

            // Confetti & Heart Burst
            for (let i = 0; i < 30; i++) {
                let celebration = document.createElement("div");
                celebration.classList.add("celebration");
                celebration.innerText = ["🎉", "💖", "✨", "💘"][Math.floor(Math.random() * 4)];
                celebration.style.left = `${Math.random() * 100}vw`;
                celebration.style.top = `${Math.random() * 100}vh`;
                celebration.style.animationDuration = `${0.7 + Math.random()}s`;
                document.body.appendChild(celebration);

                setTimeout(() => celebration.remove(), 1000);
            }

            // Redirect after 2s
            setTimeout(() => {
                window.location.href = "flower.html";
            }, 2000);
        });
    }
});
