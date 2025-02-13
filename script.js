document.getElementById("yesButton").addEventListener("click", function() {
    document.querySelector(".container").innerHTML = "<h1>Yay! Can't wait! ❤️</h1>";
});

document.getElementById("noButton").addEventListener("mouseover", function() {
    let button = document.getElementById("noButton");
    let randomX = Math.random() * (window.innerWidth - 100);
    let randomY = Math.random() * (window.innerHeight - 50);
    
    button.style.position = "absolute";
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
});
