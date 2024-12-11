// Function to insert the navbar and other content
function insertNavbar() {
    // Define the HTML for the navbar
    const navbarHTML = `
        <style type="text/css">
            .secret-mode {
                color: red;
                animation: secret-glow 2s infinite alternate;
            }
            @keyframes secret-glow {
                0% {
                    text-shadow: 0 0 10px red;
                }
                100% {
                    text-shadow: 0 0 20px red;
                }
            }
            .navbar {
                overflow: hidden;
                background-color: #333;
            }
            .navbar a {
                float: left;
                font-size: 16px;
                color: white;
                text-align: center;
                padding: 14px 16px;
                text-decoration: none;
            }
            .navbar a:hover {
                background-color: red;
            }
        </style>

        <div class="navbar">
            <a href="/static/index.html">Home</a>
            <a href="/static/contact.html">Contact</a>
            <a href="/static/settings.html">Settings</a>
            <a href="/static/category/shooting.html">Shooting</a>
            <a href="/static/category/apps.html">Apps</a>
        </div>
    `;

    // Create a div element to hold the navbar
    const navbarDiv = document.createElement('div');
    navbarDiv.innerHTML = navbarHTML;

    // Insert the navbar at the top of the body
    const body = document.body;
    body.insertBefore(navbarDiv, body.firstChild);
}

// Secret code logic
let secretSequence = "";
const secretCode = "lounge"; // Change to your desired secret code

document.addEventListener("DOMContentLoaded", () => {
    insertNavbar();  // Insert navbar after DOM is ready

    // Secret code detection logic
    document.addEventListener("keydown", (event) => {
        secretSequence += event.key.toLowerCase();
        if (secretSequence.includes(secretCode)) {
            activateSecretMode();
            secretSequence = ""; // Reset sequence after activation
        }

        // Limit sequence length to avoid excessive memory usage
        if (secretSequence.length > secretCode.length) {
            secretSequence = secretSequence.slice(-secretCode.length);
        }
    });
});

function activateSecretMode() {
    const body = document.body; // Get the body element
    body.classList.add("secret-mode"); // Add the class to the body element
}
