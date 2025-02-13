function showMessage() {
    document.getElementById('message').style.display = 'block';
}

function moveNoButton() {
    const btn = document.querySelector('.no');
    btn.style.top = Math.random() * window.innerHeight + 'px';
    btn.style.left = Math.random() * window.innerWidth + 'px';
}

function createHearts() {
    for (let i = 0; i < 20; i++) {
        let heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }
}

setInterval(createHearts, 500);
