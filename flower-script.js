let selectedFlowers = [];

function selectFlower(element) {
    if (selectedFlowers.includes(element.alt)) {
        selectedFlowers = selectedFlowers.filter(flower => flower !== element.alt);
        element.classList.remove("selected");
    } else {
        selectedFlowers.push(element.alt);
        element.classList.add("selected");
    }
}

document.getElementById("confirmSelection").addEventListener("click", function () {
    if (selectedFlowers.length > 0) {
        document.body.innerHTML = `<div class="final-message">
            <h1>Great choice, d. Would love to see you soon. xoxo 💕</h1>
        </div>`;
    } else {
        alert("Please select at least one flower! 🌸");
    }
});
