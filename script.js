document.addEventListener("DOMContentLoaded", function () {
    // Floating hearts animation
    function createFloatingEmoji() {
        const floatingContainer = document.getElementById("floatingContainer");
        const emoji = document.createElement("div");
        emoji.classList.add("heart");
        emoji.innerHTML = "❤️";

        // Random position
        emoji.style.left = Math.random() * window.innerWidth + "px";
        emoji.style.top = window.innerHeight + "px";

        floatingContainer.appendChild(emoji);

        setTimeout(() => emoji.remove(), 4000);
    }

    setInterval(createFloatingEmoji, 500);

    // Button click event for "Yes"
    document.getElementById("yesBtn").addEventListener("click", function () {
        triggerPartyAnimation();
        setTimeout(() => {
            window.location.href = "flower.html";
        }, 1500);
    });

    // No button movement
    const noBtn = document.getElementById("noBtn");
    noBtn.addEventListener("mouseover", function () {
        noBtn.style.position = "absolute";
        noBtn.style.left = Math.random() * (window.innerWidth - 100) + "px";
        noBtn.style.top = Math.random() * (window.innerHeight - 50) + "px";
    });

    // Party pop-up effect on "Yes"
    function triggerPartyAnimation() {
        for (let i = 0; i < 20; i++) {
            const popper = document.createElement("div");
            popper.classList.add("party");
            popper.innerHTML = ["🎉", "🎊", "🥳", "💖"][Math.floor(Math.random() * 4)];

            popper.style.left = Math.random() * window.innerWidth + "px";
            popper.style.top = Math.random() * window.innerHeight + "px";

            document.body.appendChild(popper);
            setTimeout(() => popper.remove(), 1000);
        }
    }

    // "Enter" key to go to the next page
    document.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            window.location.href = "flower.html";
        }
    });
});
