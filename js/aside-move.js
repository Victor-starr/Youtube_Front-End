document.addEventListener('DOMContentLoaded', function () {
    var asideTwo = document.querySelector('aside.two');
    var asideOpenBtn = document.getElementById('asideOpen');
    var asideCloseBtn = document.getElementById('asideClose');
    var coverDiv = document.querySelector('div.cover');

    function openAside() {
        asideTwo.style.left = '0px';
        coverDiv.style.display = 'block';
    }

    function closeAside() {
        asideTwo.style.left = '-229px';
        coverDiv.style.display = 'none';
    }

    asideOpenBtn.addEventListener('click', openAside);
    asideCloseBtn.addEventListener('click', closeAside);

    // Check window width before applying animation
    function checkWindowSize() {
        if (window.innerWidth < 1305) {
            // Enable animation
            asideOpenBtn.addEventListener('click', openAside);
            asideCloseBtn.addEventListener('click', closeAside);
        } else {
            // Remove animation if window width is greater than or equal to 1305px
            asideOpenBtn.removeEventListener('click', openAside);
            asideCloseBtn.removeEventListener('click', closeAside);
        }

        // Automatically close the aside if the window width is greater than 1310px
        if (window.innerWidth > 1310) {
            closeAside();
        }
    }

    // Initial check on page load
    checkWindowSize();

    // Listen for window resize events
    window.addEventListener('resize', checkWindowSize);
});