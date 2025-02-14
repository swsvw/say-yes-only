document.addEventListener("DOMContentLoaded", function () {
    const yesBtn = document.getElementById("yes-btn");
    const noBtn = document.getElementById("no-btn");

    // Make "No" button run away
    noBtn.addEventListener("mouseover", function () {
        const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
        const y = Math.random() * (window.innerHeight - noBtn.clientHeight);
        noBtn.style.position = "absolute";
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    });

    // Clicking "Yes" shows message and redirects
    yesBtn.addEventListener("click", function () {
        document.body.innerHTML = `<h1 class="message">YAYY HAHAHA U MADE MY DAY!! 😙🥰😍😳</h1>`;
        setTimeout(() => {
            window.location.href = "flower.html";
        }, 2000);
    });
});
