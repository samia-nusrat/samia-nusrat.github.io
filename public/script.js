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

// Initialize the tabs as hidden when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.style.display = 'none'); // Hide all tabs initially
});
