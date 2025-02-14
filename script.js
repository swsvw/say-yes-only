document.addEventListener("DOMContentLoaded", function () {
    let noBtn = document.getElementById("noBtn");
    let yesBtn = document.getElementById("yesBtn");
    let heartsContainer = document.querySelector(".hearts-container");

    console.log("JavaScript is running!");

    // Create More Floating Hearts Faster
    function createFloatingHeart() {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = ["❤️", "💖", "🌹", "💗", "💘"][Math.floor(Math.random() * 5)];
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${2 + Math.random() * 2}s`; // Faster movement
        heartsContainer.appendChild(heart);

        setTimeout(() => heart.remove(), 4000); // Shorter lifespan for more movement
    }

    // Increase Heart Frequency
    let heartInterval = setInterval(createFloatingHeart, 300); // More hearts per second

    // "No" Button Moves Away Faster
    if (noBtn) {
        noBtn.addEventListener("mouseover", function () {
            let x = Math.random() * (window.innerWidth - 100);
            let y = Math.random() * (window.innerHeight - 50);
            noBtn.style.position = "absolute";
            noBtn.style.left = `${x}px`;
            noBtn.style.top = `${y}px`;
        });
    }

    // "Yes" Button Click Effect
    if (yesBtn) {
        yesBtn.addEventListener("click", function () {
            yesBtn.innerText = "YAYYYY! 🎊💖🥰";
            yesBtn.style.backgroundColor = "#ff4081"; // Cute pink color

            console.log("Yes button clicked!");

            // Faster & More Hearts on Click
            clearInterval(heartInterval);
            heartInterval = setInterval(createFloatingHeart, 100); // Super fast hearts

            // Celebration Explosion
            for (let i = 0; i < 40; i++) { // More elements
                let celebration = document.createElement("div");
                celebration.classList.add("celebration");
                celebration.innerText = ["🎉", "✨", "🎆", "💞", "💓"][Math.floor(Math.random() * 5)];
                celebration.style.left = `${Math.random() * 100}vw`;
                celebration.style.top = `${Math.random() * 100}vh`;
                celebration.style.animationDuration = `${0.5 + Math.random()}s`; // Faster pop effect
                document.body.appendChild(celebration);

                setTimeout(() => celebration.remove(), 800);
            }

            // Redirect to flower.html After 1.5s (Faster)
            setTimeout(() => {
                console.log("Redirecting to flower.html...");
                window.location.href = "flower.html";
            }, 1500);
        });
    }
});
