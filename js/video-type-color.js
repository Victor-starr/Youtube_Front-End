const slideBar = document.querySelector('.slide-bar');

slideBar.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        // Reset styles for all links
        const allLinks = slideBar.querySelectorAll('a');
        allLinks.forEach((link) => {
            link.classList.remove('main');
            link.style.backgroundColor = '#272727';
            link.style.color = 'white';
        });

        // Set styles for the clicked link
        event.target.classList.add('main');
        event.target.style.backgroundColor = '#f1f1f1';
        event.target.style.color = 'black';
    }
});
