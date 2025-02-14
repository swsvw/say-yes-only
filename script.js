document.addEventListener("DOMContentLoaded", function () {
    let floatingContainer = document.querySelector(".floating-container");

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
