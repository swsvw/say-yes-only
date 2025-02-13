document.addEventListener("DOMContentLoaded", () => {
    const yesButton = document.getElementById("yesButton");
    const noButton = document.getElementById("noButton");
    const responseText = document.getElementById("response");
    const flowerSection = document.getElementById("flower-section");
    const finalMessage = document.getElementById("finalMessage");
    const submitButton = document.getElementById("submitFlowers");
    let flowerChoices = [];

    // "Yes" button click
    yesButton.addEventListener("click", () => {
        responseText.innerText = "hahaha yay 😙🥰😍😳";
        responseText.classList.remove("hidden");
        setTimeout(() => {
            document.getElementById("choice-buttons").classList.add("hidden");
            flowerSection.classList.remove("hidden");
        }, 1000);
    });

    // "No" button moves away when hovered
    noButton.addEventListener("mouseover", () => {
        const maxX = window.innerWidth * 0.4; 
        const maxY = window.innerHeight * 0.4; 
        const newX = Math.random() * maxX;
        const newY = Math.random() * maxY;
        
        noButton.style.position = "absolute";
        noButton.style.left = `${newX}px`;
        noButton.style.top = `${newY}px`;
    });

    // Flower selection logic
    document.querySelectorAll(".flower").forEach(flower => {
        flower.addEventListener("click", (event) => {
            flowerChoices.push(event.target.dataset.flower);
            submitButton.classList.remove("hidden");
        });
    });

    // Submitting flower selection
    submitButton.addEventListener("click", () => {
        console.log("Selected flowers:", flowerChoices);
        flowerSection.classList.add("hidden");
        finalMessage.classList.remove("hidden");
    });
});
