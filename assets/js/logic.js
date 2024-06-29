// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const themeSwitcher = document.querySelector('#theme-switcher');
const container = document.querySelector('.container');

let mode = 'dark';

themeSwitcher.addEventListener('click', function () {
    if (mode === 'dark') {
        mode = 'light';
        container.setAttribute('class', 'light');
    }   else {
        mode = 'dark';
        container.setAttribute('class', 'dark');

        writeStorage('mode', mode);
    }
});
// TODO: Create functions to read and write from local storage
function writeStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function readStorage(key) {
    const data = localStorage.getItem(key);
    return JSON.parse(data);
}