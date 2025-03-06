// Function to create and insert the navbar
function insertNavbar() {
  // Define the HTML for the navbar
  const navbarHTML = `
        <script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"></script>
  <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-JC8E4VJGL9"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-JC8E4VJGL9');
</script>
      <script src="/rightclick.js"></script>
  <div id="contextMenu" class="context-menu" style="display:none">
    <ul>
      <li onclick="openSettings('/')"><a>Home</a></li>
      <li onclick="openSettings('/proxy.html')"><a>Proxy</a></li>
      <li onclick="cloakAll()"><a>Cloak Tab</a></li>
    </ul>
  </div>
  <style type="text/css">
  #particles-js {
    position: fixed;  /* Keeps it full-screen even when scrolling */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    z-index: -1;  /* Ensures it stays behind everything */
}

#main {
    position: relative;  /* Ensures content appears above the particles */
    z-index: 1;  /* Moves content in front of particles */
}

        .item {
    opacity: 0;
    transform: translateY(10px);
    animation: fadeIn 0.5s ease forwards;
    animation-delay: calc(var(--index) * 0.2s);
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
      z-index: 1000;
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
      #main {
      margin: 100px;
      }
.navbar {
    position: fixed;  /* Keeps it stuck at the top */
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 70px;
    background-color: #333;
    display: flex;  /* Uses flexbox for better alignment */
    align-items: center;
    justify-content: space-between; /* Ensures left & right sections stay apart */
    padding: 0 16px;
    z-index: 10000000000000000;
}

.navbar .left-section {
    display: flex;
    align-items: center;
    gap: 10px; /* Space between logo & text */
}

.navbar .right-section {
    display: flex;
    align-items: center;
    gap: 10px; /* Space between buttons */
}

  .right-section a {
    font-size: 16px;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    transition: background 0.3s;
    cursor: pointer;
}
.navbar .left-section a {
  font-size: 16px;
    color: red;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    transition: background 0.3s;
}
.right-section a:hover {
    background-color: red;
}

.navbar img {
    width: 40px;  /* Resize logo */
    height: auto;  /* Keep aspect ratio */
    object-fit: contain;
}

.navbar p {
    font-size: 20px;
    color: red;
}

.dropdown {
    position: relative;
    display: inline-block;
    float: right;
}

.dropdown .dropbtn {
    font-size: 16px;
    border: none;
    outline: none;
    color: white;
    padding: 14px 16px;
    background-color: inherit;
    font-family: inherit;
    cursor: pointer;
}

.right-section a:hover,
.dropdown:hover .dropbtn {
    background-color: red;
}
.dropdown-content {
    display: none;
    position: absolute;
    top: 100%;  /* Ensures it appears below the navbar */
    left: 0;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    z-index: 1000;  /* Ensures it stays above other content */
}

.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: flex;  /* Enables flexbox */
    justify-content: center;  /* Centers text horizontally */
    align-items: center;  /* Centers text vertically */
    text-align: center;  /* Ensures text stays centered */
    height: 40px;  /* Adjust height to control vertical centering */
}

.dropdown-content a:hover {
    background-color: #ddd;
}

.dropdown:hover .dropdown-content {
    display: block;
}

  </style>

  <div class="navbar">
      <div class="left-section">
    <a href="/"><img src="/images/l2x.png"></a>
    <a href="/"><p>LoungeF2X</p></a>
    </div>
    <div class="right-section">
    <a href="/index.html">Home</a>
    <a href="/g.html">Games</a>
    <a href="/m.html">Movies</a>
    <a href="/tabs.html">Browser</a>
    <a href="/ia.html">AI</a>        
    <a href="/settings.html">Settings</a>
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

