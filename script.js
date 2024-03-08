document.addEventListener('DOMContentLoaded', () => {
    const customCursor = document.getElementById('custom-cursor');

    document.addEventListener('mousemove', (e) => {
        const cursorX = e.clientX;
        const cursorY = e.clientY;

        // Set position for custom cursor
        customCursor.style.left = cursorX + 'px';
        customCursor.style.top = cursorY + 'px';
    });

    // Invert color function
    const invertColor = (c) => 255 - parseInt(c, 10);

    // Get inverted RGB style
    const getInvertedRGBStyle = () => {
        const { color } = getComputedStyle(document.body);

        // Function to apply color inversion
        const invertRGB = (rgb) => rgb.replace(/\d+/g, invertColor);

        // Return inverted RGB style
        return {
            color: color ? invertRGB(color) : 'white'
        };
    };

    // Get inverted color styles
    const invertedStyles = getInvertedRGBStyle();

    // Set custom cursor inverted color
    customCursor.style.background = invertedStyles.color;

    // Show the default cursor
    document.body.style.cursor = 'auto';

    document.body.classList.add('animate');

    // Get the clickable elements
    const clickableElements = document.querySelectorAll('a, button');

    // Function to handle cursor size on hover over clickable elements
    const handleCursorSize = (e) => {
        // Increase cursor size by 60%
        customCursor.style.width = '6rem';
        customCursor.style.height = '6rem';
    };

    // Function to reset cursor size
    const resetCursorSize = () => {
        // Reset cursor size
        customCursor.style.width = '1rem';
        customCursor.style.height = '1rem';
    };

    // Add event listeners to clickable elements
    clickableElements.forEach((element) => {
        element.addEventListener('mouseenter', handleCursorSize);
        element.addEventListener('mouseleave', resetCursorSize);
    });
});
