// Function to load the navbar onto the page
function loadNavbar(callback) {
    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    // Specify the file path of the navbar HTML
    xhr.open('GET', 'navbar.html', true);

    // On successful loading of the navbar HTML
    xhr.onload = function() {
        // Check if the status is OK
        if (xhr.status === 200) {
            // Get the navbar HTML content
            var navbarHtml = xhr.responseText;

            // Insert the navbar HTML into the header element of the current page
            document.querySelector('header').innerHTML = navbarHtml;

            // Call the function to set up event listeners
            setupEventListeners();

            // Call the callback function to execute additional actions
            if (typeof callback === 'function') {
                callback();
            }
        }
    };
    
    // Send the request to load the navbar HTML
    xhr.send();
}

// Function to set up event listeners for the navbar
function setupEventListeners() {
    // Function to toggle the fullscreen menu
    function toggleFullscreenMenu() {
        var fullscreenMenu = document.getElementById('fullscreen-menu');
        var overlay = document.getElementById('fullscreen-overlay');
        if (fullscreenMenu.style.display === 'block') {
            // If the menu is currently open, close it with animation
            fullscreenMenu.style.transform = 'translateY(-100%)';
            overlay.style.opacity = 0;
            setTimeout(function() {
                fullscreenMenu.style.display = 'none';
                overlay.style.display = 'none';
            }, 500); // Adjust the duration as needed
        } else {
            // If the menu is currently closed, open it with animation
            fullscreenMenu.style.display = 'block';
            overlay.style.display = 'block';
            setTimeout(function() {
                fullscreenMenu.style.transform = 'translateY(0)';
                overlay.style.opacity = 0.5; // Adjust the opacity as needed
            }, 50); // Adjust the delay as needed
        }
    }

    // Function to close the fullscreen menu
    function closeFullscreenMenu() {
        var fullscreenMenu = document.getElementById('fullscreen-menu');
        var overlay = document.getElementById('fullscreen-overlay');
        // Hide the fullscreen menu and overlay
        fullscreenMenu.style.display = 'none';
        overlay.style.display = 'none';
    }

    // Add event listener to the "MENU ☰" icon
    var menuIcon = document.querySelector('header ul li:last-child a');
    if (menuIcon) {
        menuIcon.addEventListener('click', toggleFullscreenMenu);
    }

    // Add event listener to the exit button
    var exitButton = document.getElementById('exit-menu');
    if (exitButton) {
        exitButton.addEventListener('click', closeFullscreenMenu);
    }

    // Add event listener to the escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            // Close the fullscreen menu when the escape key is pressed
            closeFullscreenMenu();
        }
    });

    // Add event listener to the "PROJECTS" link
    var projectsLink = document.querySelector('header ul li:nth-child(2) a');
    if (projectsLink) {
        projectsLink.addEventListener('click', function(event) {
            event.preventDefault();
            // Check if the current page is the index page
            if (window.location.pathname === '/index.html') {
                // Scroll to the project container with an offset
                var projectContainer = document.getElementById('project-container');
                var navbarHeight = document.querySelector('header').offsetHeight;
                projectContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
                window.scrollBy(0, -navbarHeight); // Adjust the offset as needed
            } else {
                // Redirect to the index page and scroll to the project container
                window.location.href = '/index.html#project-container';
            }
            // Close the fullscreen menu after clicking on a link
            closeFullscreenMenu();
        });
    }
}

// Call the loadNavbar function to load the navbar onto the page
loadNavbar();
