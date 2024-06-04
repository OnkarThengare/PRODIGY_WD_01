document.addEventListener('DOMContentLoaded', () => {
    // Sidebar Button Toggle
    const btn = document.querySelector('.sidebar-button');
    const sidebarDropdown = document.querySelector('.sidebar-dropdown');
    let click = 0;

    if (btn && sidebarDropdown) {
        btn.addEventListener('click', () => {
            click++;
            if (click % 2 === 0) {
                sidebarDropdown.style.right = "-100%"; // Slide out to the right
                sidebarDropdown.style.opacity = "0"; // Fade out
            } else {
                sidebarDropdown.style.visibility = "visible"; // Make visible
                setTimeout(() => {
                    sidebarDropdown.style.right = "0"; // Slide in from the right
                    sidebarDropdown.style.opacity = "1"; // Fade in
                }, 50); // Adding a small delay before showing to ensure visibility change occurs first
            }
        });
    } else {
        console.error('Sidebar button or sidebar dropdown element not found.');
    }

    // Anchor Glow Effect
    const anchors = document.querySelectorAll('.glow-anchor');

    if (anchors.length > 0) {
        anchors.forEach(anchor => {
            anchor.addEventListener('mouseenter', () => {
                anchor.classList.add('glow');
            });

            anchor.addEventListener('mouseleave', () => {
                anchor.classList.remove('glow');
            });
        });
    } else {
        console.error('No elements with class .glow-anchor found.');
    }

    // Color Picker
    const colorPicker = document.getElementById('color-picker');
    const colorPreview = document.getElementById('navbar');

    if (colorPicker && colorPreview) {
        colorPicker.addEventListener('input', (event) => {
            const selectedColor = event.target.value;
            colorPreview.style.backgroundColor = selectedColor;
        });
    } else {
        console.error('Color picker or navbar element not found.');
    }

    // Smooth Scrolling
    const links = document.querySelectorAll('a[href^="#"]');

    if (links.length > 0) {
        links.forEach(link => {
            link.addEventListener('click', function (event) {
                event.preventDefault();

                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                } else {
                    console.error(`Element with ID ${targetId} not found.`);
                }
            });
        });
    } else {
        console.error('No anchor links starting with # found.');
    }
});
