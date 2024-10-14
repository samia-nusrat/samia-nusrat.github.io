// Function to toggle the selected tab's visibility and hide others
function showTab(tabId) {
    // Get the selected tab content element
    const selectedTab = document.getElementById(tabId);

    // Check if the selected tab is currently visible
    const isVisible = selectedTab.style.display === 'block';

    // Hide all tabs
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.style.display = 'none';
    });

    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    // If the selected tab was not visible, show it and set its button as active
    if (!isVisible) {
        selectedTab.style.display = 'block'; // Show the selected tab

        // Set the corresponding button as active
        const activeButton = Array.from(buttons).find(button => button.getAttribute('onclick').includes(tabId));
        if (activeButton) {
            activeButton.classList.add('active');
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const projectCards = document.querySelectorAll('.project-card');
    const projectsSection = document.getElementById('portfolio');

    function handleScroll() {
        const sectionTop = projectsSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop - windowHeight < -50) { // Adjusted calculation to trigger earlier
            projectCards.forEach((card, index) => {
                card.style.animationDelay = `${index * 0.5}s`; // Maintain increased delay
                card.classList.add('animate'); // Trigger animation class
                card.style.transform = "translateX(0)"; // Move to final position
            });
            window.removeEventListener('scroll', handleScroll); // Remove listener once animation triggers
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on load in case the section is already visible
});

