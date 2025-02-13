document.addEventListener("DOMContentLoaded", function() {
    const startScreen = document.getElementById("start-screen");
    const flowerPage = document.getElementById("flower-page");
    const yesBtn = document.getElementById("yes-btn");
    const noBtn = document.getElementById("no-btn");

    // Make the "No" button run away
    noBtn.addEventListener("mouseover", function() {
        const x = Math.random() * (window.innerWidth - 100);
        const y = Math.random() * (window.innerHeight - 50);
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    });

    // When "Yes" is clicked, transition to the next page
    yesBtn.addEventListener("click", function() {
        startScreen.style.display = "none";
        flowerPage.style.display = "block";
        document.body.style.background = "white";
    });
});
