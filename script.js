document.getElementById("yesButton").addEventListener("click", function() {
    document.querySelector(".container").innerHTML = "<h1>Yay! Can't wait! ❤️</h1>";
});

document.getElementById("noButton").addEventListener("mouseover", function() {
    let button = document.getElementById("noButton");

    // Get the container dimensions
    let container = document.querySelector(".container");
    let containerRect = container.getBoundingClientRect();

    // Define a limited movement range (stays near the box)
    let minX = containerRect.left + 20;  // Closer left
    let maxX = containerRect.right - 120; // Closer right
    let minY = containerRect.top + 40;  // Slightly below box
    let maxY = containerRect.bottom - 20; // Not too low

    let randomX = Math.random() * (maxX - minX) + minX;
    let randomY = Math.random() * (maxY - minY) + minY;

    // Reduce lag: Move only using 'transform' (smoother performance)
    button.style.transition = "transform 0.4s ease-in-out";
    button.style.position = "absolute";
    button.style.transform = `translate(${randomX}px, ${randomY}px)`;
});
