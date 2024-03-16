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

            // Function to open the fullscreen menu
            function openFullscreenMenu() {
                var fullscreenMenu = document.getElementById('fullscreen-menu');
                // Remove the display: none property
                fullscreenMenu.style.display = 'block';
            }

            // Function to close the fullscreen menu
            function closeFullscreenMenu() {
                var fullscreenMenu = document.getElementById('fullscreen-menu');
                // Add the display: none property
                fullscreenMenu.style.display = 'none';
            }

            // Add event listener to the open button
            var openButton = document.getElementById('button-open');
            if (openButton) {
                openButton.addEventListener('click', openFullscreenMenu);
            }

            // Add event listener to the exit button
            var exitButton = document.getElementById('exit-menu');
            if (exitButton) {
                exitButton.addEventListener('click', closeFullscreenMenu);
            }

            // Call the callback function to execute additional actions
            if (typeof callback === 'function') {
                callback();
            }
        }
    };
    
    // Send the request to load the navbar HTML
    xhr.send();
}

// Call the loadNavbar function to load the navbar onto the page
loadNavbar();
