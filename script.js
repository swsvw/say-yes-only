body {
    font-family: Arial, sans-serif;
    text-align: center;
    background-color: #ffe6f2;
    padding: 20px;
}

.container, .flower-selection, #finalMessage {
    margin-top: 50px;
}

.hidden {
    display: none;
}

.btn {
    font-size: 20px;
    padding: 10px 20px;
    margin: 10px;
    border: none;
    cursor: pointer;
    transition: transform 0.2s;
}

#yesButton {
    background-color: #ff4da6;
    color: white;
}

#noButton {
    background-color: #333;
    color: white;
}

#noButton:hover {
    transform: translateX(calc(10px - 5px * (Math.random() * 2)));
}

.flowers img {
    width: 100px;
    margin: 10px;
    cursor: pointer;
    transition: transform 0.2s;
}

.flowers img:hover {
    transform: scale(1.1);
}
