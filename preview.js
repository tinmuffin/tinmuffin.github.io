
// JavaScript code for scroll-triggered animations
const sections = document.querySelectorAll('.section');
let scrolledPastPreview = false;

function checkScroll() {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.75) { // Adjust this value as needed
            section.classList.add('visible');
        }
    });

    // Check if scrolled past the preview section
    const previewSection = document.getElementById('preview');
    const previewHeight = previewSection.offsetHeight;
    const scrollPosition = window.scrollY;

    if (scrollPosition >= previewHeight) {
        scrolledPastPreview = true;
    } else {
        scrolledPastPreview = false;
    }
}

window.addEventListener('scroll', function() {
    checkScroll();

    // If scrolled past preview section, prevent scrolling back up to it
    if (scrolledPastPreview) {
        const previewSection = document.getElementById('preview');
        const previewHeight = previewSection.offsetHeight;

        if (window.scrollY < previewHeight) {
            window.scrollTo(0, previewHeight);
        }
    }
});

window.addEventListener('resize', checkScroll);

// Initial check on page load
checkScroll();


