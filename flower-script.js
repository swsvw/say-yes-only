document.addEventListener("DOMContentLoaded", function () {
    let heartsContainer = document.querySelector(".hearts-container");

    function createFloatingElement() {
        let element = document.createElement("div");
        element.classList.add("floating-element");
        element.innerHTML = ["❤️", "💖", "🌹", "💗", "💘", "🌸", "🌷", "💐"][Math.floor(Math.random() * 8)];
        element.style.left = `${Math.random() * 100}vw`;
        element.style.animationDuration = `${4 + Math.random() * 3}s`;
        element.style.filter = "drop-shadow(0px 0px 15px rgba(255, 20, 147, 1))"; // Glow effect
        heartsContainer.appendChild(element);

        setTimeout(() => element.remove(), 6000);
    }

    // Start Floating Elements Every 300ms
    setInterval(createFloatingElement, 300);
});
