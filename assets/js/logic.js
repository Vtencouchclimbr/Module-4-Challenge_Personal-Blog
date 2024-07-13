// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const themeSwitcher = document.querySelector('#theme-switcher');
const container = document.querySelector('.container');

function applyMode() {
    if (mode === 'light') {
        container.setAttribute('class', 'container light');
        themeSwitcher.textContent = '🌞';
    } else {
        container.setAttribute('class', 'container dark');
        themeSwitcher.textContent = '🌙';
    }
    writeStorage('mode', mode);
}
let mode = readStorage('mode') || 'dark';
applyMode(mode);

themeSwitcher.addEventListener('click', function() {
    mode = (mode === 'dark') ? 'light' : 'dark';
    applyMode(mode);
});

// TODO: Create functions to read and write from local storage
function writeStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function readStorage(key) {
    const data = localStorage.getItem(key);
    return JSON.parse(data);
}