document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const aboutSection = document.getElementById('about');

    // Hide all sections except the About Me section
    sections.forEach(section => {
        section.style.display = 'none';
    });
    aboutSection.style.display = 'block';

    function toggleTab(e) {
        e.preventDefault();
        const id = this.getAttribute('href').replace('#', '');
        sections.forEach(section => {
            section.style.display = 'none';
        });
        document.getElementById(id).style.display = 'block';
    }

    document.querySelectorAll('nav a').forEach(navLink => {
        navLink.addEventListener('click', toggleTab);
    });
});