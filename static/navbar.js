// Function to create and insert the navbar
function insertNavbar() {
  // Define the HTML for the navbar
  const navbarHTML = `
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-JC8E4VJGL9"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-JC8E4VJGL9');
</script>
      <script src="/static/rightclick.js"></script>
  <div id="contextMenu" class="context-menu" style="display:none">
    <ul>
      <li onclick="openSettings('/')"><a>Home</a></li>
      <li onclick="openSettings('/static/proxy.html')"><a>Proxy</a></li>
      <li onclick="cloakAll()"><a>Cloak Tab</a></li>
    </ul>
  </div>
  <style type="text/css">
        .item {
    opacity: 0;
    transform: translateY(10px);
    animation: fadeIn 0.5s ease forwards;
    animation-delay: calc(var(--index) * 0.2s);
}
.games-content {
    overflow-y: auto !important;
    max-height: 500px !important;
    padding-right: 5px;
}
.game-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;
    overflow-y: auto;
    overflow-x: hidden;
    padding-right: 10px;
    width: 100%;
    scrollbar-color: transparent transparent;
}

.game-container a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    background-color: white
;
    color: white
    border: 2px solid red;
    border-radius: 5px;
    text-decoration: none;
    font-size: 1.1rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    width: 200px;
    text-align: center;
}

.game-container a:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px var(--accent-color);
}

@media (max-width: 600px) {
    .game-container a {
        width: 100%;
    }
}
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
      color: red;
    }
        .toggle-btn {
            position: absolute;
            top: 15px;
            left: 15px;
            padding: 10px 20px;
            background: #333;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 1em;
            z-index: 1000;
            transition: background 0.3s ease;
        }
        .navbar {
            width: 250px;
            height: 100%;
            background-color: #333;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            position: fixed;
            top: 0;
            left: -250px;
            box-shadow: 3px 0 5px rgba(0, 0, 0, 0.2);
            transition: left 0.4s ease;
        }

        .navbar.show {
            left: 0;
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



  <div class="navbar">
    <a href="/static/index.html">Home</a>
    <a href="/static/g.html">Games</a>
    <a href="/tabs.html">Tabs (WIP)</a>
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
        <a href="/static/page/taggame.html">Tag Game</a>
      </div>
    </div>
  </div>

  <script src='https://cdn.jsdelivr.net/npm/@widgetbot/crate@3' async defer>
    new Crate({
      server: '1262606858846208052',
      channel: '1262606858846208055'
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
    </script>
    <script>          const toggleBtn = document.querySelector('.toggle-btn');
        const sidebar = document.querySelector('.navbarr');

        toggleBtn.addEventListener('click', () => {
            sidebar.classList.toggle('show');
        });</script>
        <button class="toggle-btn"><i class="fa fa-bars"></i></button>
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
