const clickButton = document.getElementById('click-btn');
const clickCount = document.getElementById('click-count');

let count = 0;

clickButton.addEventListener('click', () => {
    count++;
    clickCount.textContent = `Clics: ${count}`;
});