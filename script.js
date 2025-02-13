const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");
const container = document.querySelector(".container");

yesButton.addEventListener("click", function() {
    container.innerHTML = "<h1>Yay! Can't wait! ❤️</h1>";
});

function moveNoButtonSmoothly(targetX, targetY) {
    let rect = noButton.getBoundingClientRect();
    let currentX = rect.left;
    let currentY = rect.top;

    let deltaX = (targetX - currentX) * 0.2;  // Controls smoothness
    let deltaY = (targetY - currentY) * 0.2;

    function animate() {
        currentX += deltaX;
        currentY += deltaY;

        noButton.style.transform = `translate(${currentX - rect.left}px, ${currentY - rect.top}px)`;

        // Stop moving when close enough to target
        if (Math.abs(currentX - targetX) > 1 || Math.abs(currentY - targetY) > 1) {
            requestAnimationFrame(animate);
        }
    }

    requestAnimationFrame(animate);
}

function moveNoButton() {
    let rect = noButton.getBoundingClientRect();
    let containerRect = container.getBoundingClientRect();

    // Small random movement within 80px range
    let offsetX = (Math.random() - 0.5) * 80;
    let offsetY = (Math.random() - 0.5) * 50;

    let newX = rect.left + offsetX;
    let newY = rect.top + offsetY;

    // Keep within container bounds
    newX = Math.max(containerRect.left + 20, Math.min(containerRect.right - 100, newX));
    newY = Math.max(containerRect.top + 40, Math.min(containerRect.bottom - 60, newY));

    moveNoButtonSmoothly(newX, newY);
}

// Move only when cursor is VERY close (less than 35px)
noButton.addEventListener("mousemove", function(event) {
    let rect = noButton.getBoundingClientRect();
    let distance = Math.sqrt((event.clientX - rect.left) ** 2 + (event.clientY - rect.top) ** 2);

    if (distance < 35) { 
        moveNoButton();
    }
});

// Move when clicked
noButton.addEventListener("click", function() {
    moveNoButton();
});
