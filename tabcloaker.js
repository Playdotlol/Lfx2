function Help() {
    var x = localStorage.getItem("TabImage");
    var p = window.location.href
    var faviconUrl = x || 'https://cdn.dribbble.com/users/21816793/avatars/normal/23c2a6938838eff1c5843fcbe7b8e964.jpg?1724705026'; // Use the localStorage value if it exists, otherwise use the default

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



