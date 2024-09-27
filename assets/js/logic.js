// Function to toggle light/dark mode styles for the page
function toggleMode() {
    const body = document.body;
    const currentMode = body.classList.contains('dark') ? 'dark' : 'light';

    if (currentMode === 'light') {
        body.classList.add('dark');
        saveMode('dark');
    } else {
        body.classList.remove('dark');
        saveMode('light');
    }
}

// Function to save mode to local storage
function saveMode(mode) {
    localStorage.setItem('mode', mode);
}

// Function to read mode from local storage
function getMode() {
    return localStorage.getItem('mode') || 'light';
}

// Initialize mode on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedMode = getMode();
    if (savedMode === 'dark') {
        document.body.classList.add('dark');
    }
});

// Event listener for toggling mode
document.getElementById('toggle-button').addEventListener('click', toggleMode);