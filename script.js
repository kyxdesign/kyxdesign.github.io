document.addEventListener('mousemove', (e) => {
    const cursor = document.getElementById('custom-cursor');
    const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);

    if (hoveredElement) {
        const { color, backgroundColor } = getComputedStyle(hoveredElement);

        // Helper function to invert color
        const invertColor = (c) => 255 - parseInt(c, 10);

        // Function to apply color inversion
        const invertRGB = (rgb) => rgb.replace(/\d+/g, invertColor);

        // Set cursor position and inverted color
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        cursor.style.background = color ? invertRGB(color) : invertRGB(backgroundColor);
    }
});
