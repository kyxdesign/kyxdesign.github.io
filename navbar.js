
function loadNavbar() {
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
        }
    };
 // Send the request to load the navbar HTML
    xhr.send();
}

// Call the loadNavbar function to load the navbar onto the page
loadNavbar();