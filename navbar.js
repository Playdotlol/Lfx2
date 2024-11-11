// Function to create and insert the navbar
function insertNavbar() {
    // Define the HTML for the navbar
    const navbarHTML = `
    <div class="navbar">   
        <a href="/">Home</a>
        <a href="/proxy.html">Proxy</a>
        <a href="/contact.html">Contact</a>
        <a href="/settings.html">Settings</a>
        <a href="/category/shooting.html">Shooting</a>
        <a href="/category/apps.html">Apps</a>
        <div class="dropdown">
            <button class="dropbtn">
                Popular Games
                <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
                <a href="/page/1v1lol.html">1v1.lol</a>
                <a href="/app/geforce.html">Fortnite</a>
                <a href="/page/bloxro.html">Roblox</a>
                <a href="/page/dogmine.html">Doge Miner</a>
                <a href="/page/shotpixel.html">Pixel Shooter</a>
                <a href="/page/snowrider.html">Snow Rider</a>
                <a href="/page/googlehiphop.html">Google Hip Hop</a>
                <a href="/page/taggame.html">Tag Game</a>
            </div>
        </div>
    </div>
    `;

    // Create a div element to hold the navbar
    const navbarDiv = document.createElement('div');
    navbarDiv.innerHTML = navbarHTML;

    // Insert the navbar at the top of the body
    const body = document.body;
    body.insertBefore(navbarDiv, body.firstChild);
}

// Invoke the function to insert the navbar when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', insertNavbar);
