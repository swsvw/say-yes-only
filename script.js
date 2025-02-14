document.addEventListener("DOMContentLoaded", function () {
    let floatingContainer = document.getElementById("floatingContainer");
    
    function createFloatingEmoji() {
        let emojiArray = ["❤️", "🌸", "💐", "🌹", "🌷"];
        let emoji = document.createElement("div");
        emoji.innerText = emojiArray[Math.floor(Math.random() * emojiArray.length)];
        emoji.classList.add("floating");
        emoji.style.left = Math.random() * 100 + "vw";
        emoji.style.animationDuration = Math.random() * 3 + 2 + "s"; // Random speed
        floatingContainer.appendChild(emoji);

        setTimeout(() => emoji.remove(), 4000);
    }

    setInterval(createFloatingEmoji, 500);

    // "Enter" key event to move forward
    document.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            window.location.href = "nextPage.html"; // Change this to the actual next page URL
        }
    });
});
