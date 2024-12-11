function Help() {
    var x = localStorage.getItem("TabImage");
    if (!x) {
        x = '/static/images/clever.jpg'
    }
    var p = window.location.href
    var faviconUrl = x ; // Use the localStorage value if it exists, otherwise use the default

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

function Help1() {
    var x = localStorage.getItem("TabText");
    var p = window.location.href
    
    if (x && x !== "null") {
        document.title = x; // Set title to the value from localStorage
    } else {
        document.title = "Clever | Portal"; // Set default title if TabText doesn't exist or is "null"
    }

    console.log("Title set to: " + document.title);

    // Remove any existing favicon
    var existingLink = document.querySelector('link[rel="icon"], link[rel="shortcut icon"]');
    if (existingLink) {
        document.head.removeChild(existingLink);
    }
}
function Help2() {
// Check if the key "BackURL" exists in localStorage
const backURL = localStorage.getItem("BackURL");

// Get the body element
const body = document.body;

// Set the background based on the presence of "BackURL" in localStorage
if (backURL) {
    body.style.backgroundImage = `url('${backURL}')`;
} else {
    body.style.backgroundImage = "url('/static/images/equinox.webp')";
}

// Ensure the background does not repeat
body.style.backgroundRepeat = "no-repeat";
}
function cloakAll()  {
    Help1();
    Help();
    Help2();
}
