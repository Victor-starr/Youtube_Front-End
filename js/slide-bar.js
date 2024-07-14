const scrollLeftButton = document.getElementById('scrollLeftButton');
const scrollRightButton = document.getElementById('scrollRightButton');
const followsContainer = document.querySelector('.slide-bar');

scrollLeftButton.addEventListener('click', () => {
    followsContainer.scrollBy({
        left: -200, // Adjust the scroll amount as needed
        behavior: 'smooth',
    });
});

scrollRightButton.addEventListener('click', () => {
    followsContainer.scrollBy({
        left: 200, // Adjust the scroll amount as needed
        behavior: 'smooth',
    });
});
