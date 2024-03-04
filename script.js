window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.screen');
    const scrollPosition = window.pageYOffset;

    sections.forEach((section, index) => {
        if (section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
            // Change colors based on the section
            switch(index) {
                case 0:
                    document.body.style.backgroundColor = "#ffa07a"; // Light Salmon
                    break;
                case 1:
                    document.body.style.backgroundColor = "#20b2aa"; // Light Sea Green
                    break;
                case 2:
                    document.body.style.backgroundColor = "#778899"; // Light Slate Gray
                    break;
                default:
                    document.body.style.backgroundColor = "#fff";
            }
        }
    });
});
