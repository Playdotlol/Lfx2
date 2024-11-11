// Function to create and insert the navbar
function insertNavbar() {
    // Define the HTML for the navbar
    const navbarHTML = `
        <style>
      body {
        font-family: Arial, Helvetica, sans-serif;
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

      .dropdown {
        float: left;
        overflow: hidden;
      }

      .dropdown .dropbtn {
        font-size: 16px;
        border: none;
        outline: none;
        color: white;
        padding: 14px 16px;
        background-color: inherit;
        font-family: inherit;
        margin: 0;
      }

      .navbar a:hover,
      .dropdown:hover .dropbtn {
        background-color: red;
      }

      .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 1;
      }

      .dropdown-content a {
        float: none;
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        text-align: left;
      }

      .dropdown-content a:hover {
        background-color: #ddd;
      }

      .dropdown:hover .dropdown-content {
        display: block;
      }
    </style>

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
