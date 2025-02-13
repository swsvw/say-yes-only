document.getElementById('yesButton').addEventListener('click', function() {
    document.querySelector('.container').innerHTML = `
        <h1>Yay! 💕 I can't wait! 🥰</h1>
    `;
});

document.getElementById('noButton').addEventListener('click', function() {
    document.querySelector('.container').innerHTML = `
        <h1>Oh no! 😔 Maybe next time?</h1>
    `;
});
