document.getElementById("yesButton").addEventListener("click", function() {
    document.querySelector(".container").innerHTML = "<h1>Yay! Can't wait! ❤️</h1>";
});

document.getElementById("noButton").addEventListener("mouseover", function() {
    let button = document.getElementById("noButton");
    
    // Get the container dimensions
    let container = document.querySelector(".container");
    let containerRect = container.getBoundingClientRect();
    
    // Set movement range (stays near the box)
    let minX = containerRect.left - 50; // Left bound
    let maxX = containerRect.right - 50; // Right bound
    let minY = containerRect.top + 50; // Stay close to bottom of box
    let maxY = containerRect.bottom + 80; // A bit lower

    let randomX = Math.random() * (maxX - minX) + minX;
    let randomY = Math.random() * (maxY - minY) + minY;

    // Apply smooth transition for movement
    button.style.transition = "transform 0.6s ease-in-out, left 0.6s ease-in-out, top 0.6s ease-in-out";
    button.style.position = "absolute";
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
});
