document.addEventListener('mousemove', (e) => {
    const cursor = document.getElementById('custom-cursor');

    // Invert color function
    const invertColor = (c) => 255 - parseInt(c, 10);

    // Get inverted RGB style
    const getInvertedRGBStyle = () => {
        const { color, backgroundColor } = getComputedStyle(document.body);

        // Function to apply color inversion
        const invertRGB = (rgb) => rgb.replace(/\d+/g, invertColor);

        // Return inverted RGB style
        return {
            color: color ? invertRGB(color) : 'white',
            backgroundColor: backgroundColor ? invertRGB(backgroundColor) : 'black',
        };
    };

    // Get inverted color styles
    const invertedStyles = getInvertedRGBStyle();

    // Set cursor position and inverted color
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursor.style.background = invertedStyles.color;
});