document.getElementById("yes-btn").addEventListener("click", function() {
    document.getElementById("flower-section").classList.remove("hidden");
});

document.getElementById("no-btn").addEventListener("click", function() {
    alert("Aww, maybe next time! 💔");
});

document.querySelectorAll(".flower").forEach(flower => {
    flower.addEventListener("click", function() {
        document.getElementById("final-message").classList.remove("hidden");
    });
});
