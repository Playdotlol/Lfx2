function Help() {
    var x = localStorage.getItem("TabImage");
    var faviconUrl = x || "/images/clever.jpg"; // Use the localStorage value if it exists, otherwise use the default

    let link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/png';
    link.href = faviconUrl;

    // Remove any existing favicon
    var existingLink = document.querySelector('link[rel="icon"]');
    if (existingLink) {
        document.head.removeChild(existingLink);
    }

    // Add the new favicon
    document.head.appendChild(link);

    console.log("Favicon updated to:", faviconUrl);
}



