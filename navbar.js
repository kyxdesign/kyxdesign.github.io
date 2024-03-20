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

function setupEventListeners() {
    // Function to open the fullscreen menu
    function openFullscreenMenu() {
        var fullscreenMenu = document.getElementById('fullscreen-menu');
        var overlay = document.getElementById('fullscreen-overlay');
        // Show the fullscreen menu and overlay
        fullscreenMenu.style.display = 'block';
        overlay.style.display = 'block';
    }

    // Function to close the fullscreen menu
    function closeFullscreenMenu() {
        var fullscreenMenu = document.getElementById('fullscreen-menu');
        var overlay = document.getElementById('fullscreen-overlay');
        // Hide the fullscreen menu and overlay
        fullscreenMenu.style.display = 'none';
        overlay.style.display = 'none';
    }

    // Add event listener to all elements on the page
    document.addEventListener('click', function(event) {
        // Check if the clicked element contains the icon "☰"
        if (event.target.textContent.includes('☰')) {
            // Open the fullscreen menu
            openFullscreenMenu();
        }
    });

    // Add event listener to the exit button
    var exitButton = document.getElementById('exit-menu');
    if (exitButton) {
        exitButton.addEventListener('click', closeFullscreenMenu);
    }
}

// Call the loadNavbar function to load the navbar onto the page
loadNavbar();
