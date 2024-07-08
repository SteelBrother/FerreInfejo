const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId);

    toggle.addEventListener('click', () => {
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu');

        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon');
    });
};

const toggleDropdown = (dropdownClass) => {
    const dropdownLinks = document.querySelectorAll(`.${dropdownClass}`);

    dropdownLinks.forEach(link => {
        link.addEventListener('click', () => {
            const parentItem = link.parentElement;
            parentItem.classList.toggle('show-dropdown');

            // Close other open dropdowns (optional)
            dropdownLinks.forEach(otherLink => {
                if (otherLink !== link && otherLink.parentElement.classList.contains('show-dropdown')) {
                    otherLink.parentElement.classList.remove('show-dropdown');
                }
            });
        });
    });
};

showMenu('nav-toggle', 'nav-menu');
toggleDropdown('dropdown__link');
