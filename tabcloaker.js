function Help() {
    var x = localStorage.getItem("TabImage");

    if (x) { // Check if x is not null or empty
        let link = document.createElement('link');
        link.rel = 'icon';
        link.type = 'image/png';
        link.href = x;

        // Remove any existing favicon
        var existingLink = document.querySelector('link[rel="icon"]');
        if (existingLink) {
            document.head.removeChild(existingLink);
        }

        // Add the new favicon
        document.head.appendChild(link);
        console.log("Favicon updated to:", x);
    } else {
        console.warn("No favicon URL found in localStorage.");
    }
}