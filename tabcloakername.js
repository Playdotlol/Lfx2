function Help1() {
    var x = localStorage.getItem("TabText");

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