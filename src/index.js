import { createBareServer } from "@tomphttp/bare-server-node";
import express from "express";
import { createServer } from "node:http";
import { join } from "node:path";
const publicPath = join(process.cwd(), "static/public");
import { uvPath } from "@titaniumnetwork-dev/ultraviolet";
import { hostname } from "node:os";

const bare = createBareServer("/bare/");
const app = express();

// Define custom routes first so they take precedence
app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <script src="/tabcloaker.js"></script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-JC8E4VJGL9"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag() { dataLayer.push(arguments); }
          gtag('js', new Date());
          gtag('config', 'G-JC8E4VJGL9');
        </script>
        <script>
          // Call cloakAll on page load
          window.onload = cloakAll;
        </script>
        <style>
          .iframe {
            position: fixed;
            top: 0px;
            bottom: 0px;
            right: 0px;
            width: 100%;
            border: none;
            margin: 0;
            padding: 0;
            overflow: hidden;
            z-index: 999999;
            height: 100%;
          }
        </style>
      </head>
      <body>
        <iframe class="iframe" src="/index.html">Iframes aren't supported in your browser.</iframe>
      </body>
    </html>
  `);
});

app.get("/g", (req, res) => {
  res.sendFile(join(publicPath, "g.html"));
});
app.get("/m", (req, res) => {
  res.sendFile(join(publicPath, "m.html"));
});
app.get("/tabs", (req, res) => {
  res.sendFile(join(publicPath, "tabs.html"));
});
app.get("/proxy", (req, res) => {
  res.sendFile(join(publicPath, "proxy.html"));
});

// After custom routes, use static middleware for static files
app.use(express.static(publicPath));
app.use("/l2x/", express.static(uvPath));

app.use((req, res) => {
  res.status(404);
  res.sendFile(join(publicPath, "404.html"));
});

const server = createServer();

server.on("request", (req, res) => {
  if (bare.shouldRoute(req)) {
    bare.routeRequest(req, res);
  } else {
    app(req, res);
  }
});

server.on("upgrade", (req, socket, head) => {
  if (bare.shouldRoute(req)) {
    bare.routeUpgrade(req, socket, head);
  } else {
    socket.end();
  }
});

const port = 3001;

server.on("listening", () => {
  const address = server.address();

  console.log("Listening on:");
  console.log(`\thttp://localhost:${address.port}`);
  console.log(`\thttp://${hostname()}:${address.port}`);
  console.log(
    `\thttp://${
      address.family === "IPv6" ? `[${address.address}]` : address.address
    }:${address.port}`
  );
});

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

function shutdown() {
  console.log("SIGTERM signal received: closing HTTP server");
  server.close();
  bare.close();
  process.exit(0);
}

server.listen({
  port,
});
