document.getElementById('search-bar-open').addEventListener('click', function () {
    // Add 'open' class to nav.navsearch when the screen is <= 600px
    if (window.innerWidth <= 600) {
        document.querySelector('nav.navsearch').classList.add('open');
    }
});

document.getElementById('search-bar-close').addEventListener('click', function () {
    // Remove 'open' class from nav.navsearch
    document.querySelector('nav.navsearch').classList.remove('open');
});

// Event listener to handle screen width changes
window.addEventListener('resize', function () {
    // If the screen width is > 600px, hide nav.navsearch
    if (window.innerWidth > 600) {
        document.querySelector('nav.navsearch').style.display = 'none';
    }
});