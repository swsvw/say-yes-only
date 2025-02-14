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
        sessionStorage.setItem("chosenFlowers", JSON.stringify(selectedFlowers));
        window.location.href = "final-message.html";  // 🌸 Redirect to Final Message
    } else {
        alert("Please select at least one flower! 🌸");
    }
});
