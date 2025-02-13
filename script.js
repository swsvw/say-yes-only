const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");
const container = document.querySelector(".container");

yesButton.addEventListener("click", function() {
    container.innerHTML = "<h1>Yay! Can't wait! ❤️</h1>";
});

function moveNoButton() {
    let rect = noButton.getBoundingClientRect();
    let containerRect = container.getBoundingClientRect();

    // Move within a small controlled area near its original position
    let offsetX = (Math.random() - 0.5) * 120; // Moves left or right by ±60px
    let offsetY = (Math.random() - 0.5) * 60;  // Moves up or down by ±30px

    let newX = rect.left + offsetX;
    let newY = rect.top + offsetY;

    // Keep the button within the container bounds
    newX = Math.max(containerRect.left + 20, Math.min(containerRect.right - 100, newX));
    newY = Math.max(containerRect.top + 40, Math.min(containerRect.bottom - 60, newY));

    noButton.style.transition = "transform 0.3s ease-in-out";
    noButton.style.position = "absolute";
    noButton.style.transform = `translate(${newX - rect.left}px, ${newY - rect.top}px)`;
}

// Move when mouse is very close (within 30px)
noButton.addEventListener("mousemove", function(event) {
    let rect = noButton.getBoundingClientRect();
    let distance = Math.sqrt((event.clientX - rect.left) ** 2 + (event.clientY - rect.top) ** 2);

    if (distance < 40) {  // Only move if cursor is very close
        moveNoButton();
    }
});

// Also move when clicked
noButton.addEventListener("click", function(event) {
    moveNoButton();
});
