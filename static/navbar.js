// Function to create and insert the navbar
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
    .context-menu {
      position: absolute;
      text-align: center;
      background: lightgray;
      border: 1px solid black;
      border-radius: 25px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, .1);
      padding: 10px;
    }

    .context-menu ul {
      padding: 0px;
      margin: 0px;
      min-width: 150px;
      list-style: none;
    }

    .context-menu ul li {
      padding-bottom: 7px;
      border-radius: 100px;
      padding-top: 7px;
      border: 1px solid black;
    }

    .context-menu ul li a {
      text-decoration: none;
      color: black;
    }

    .context-menu ul li:hover {
      background: darkgray;
    }

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
      z-index: 1;
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

  <div id="contextMenu" class="context-menu" style="display:none">
    <ul>
      <li onclick="openSettings('/')"><a>Home</a></li>
      <li onclick="openSettings('/static/proxy.html')"><a>Proxy</a></li>
      <li onclick="cloakAll()"><a>Cloak Tab</a></li>
    </ul>
  </div>

  <div class="navbar">
    <a href="/static/index.html">Home</a>
    <a href="/static/contact.html">Contact</a>
    <a href="/static/settings.html">Settings</a>
    <a href="/static/category/shooting.html">Shooting</a>
    <a href="/static/category/apps.html">Apps</a>
    <div class="dropdown">
      <button class="dropbtn">
        Popular Games
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <a href="/static/page/1v1lol.html">1v1.lol</a>
        <a href="/static/app/geforce.html">Fortnite</a>
        <a href="/static/page/bloxro.html">Roblox</a>
        <a href="/static/page/dogmine.html">Doge Miner</a>
        <a href="/static/page/shotpixel.html">Pixel Shooter</a>
        <a href="/static/page/snowrider.html">Snow Rider</a>
        <a href="/static/page/googlehiphop.html">Google Hip Hop</a>
        <a href="/static/page/taggame.html">Tag Game</a>
      </div>
    </div>
  </div>

  <script src='https://cdn.jsdelivr.net/npm/@widgetbot/crate@3' async defer>
    new Crate({
      server: '1308263296511512647', // School Heaven
      channel: '1308263296981270552' // #general
    })
  </script>
  <script>
    function goFullscreen(id) {
      var element = document.getElementById(id);

      if (element.requestFullscreen) {
        element.requestFullscreen().catch((err) => {
          console.error(\Failed to enter fullscreen mode: \${err.message}\);
        });
      } else if (element.mozRequestFullScreen) { // Firefox
        element.mozRequestFullScreen().catch((err) => {
          console.error(\Failed to enter fullscreen mode: \${err.message}\);
        });
      } else if (element.webkitRequestFullscreen) { // Older WebKit
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) { // IE/Edge
        element.msRequestFullscreen();
      } else {
        console.error("Fullscreen API is not supported on this browser.");
      }
    }
  `;
  const navbarDiv = document.createElement('div');
  navbarDiv.innerHTML = navbarHTML;

  // Insert the navbar at the top of the body
  const body = document.body;
  body.insertBefore(navbarDiv, body.firstChild);

}

document.addEventListener("DOMContentLoaded", () => {
    insertNavbar();  // Insert navbar after DOM is ready
});

function activateSecretMode() {
    const body = document.body; // Get the body element
    body.classList.add("secret-mode"); // Add the class to the body element
}
