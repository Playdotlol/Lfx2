(async () => {
  try {
    const { default: BareServer } = await import("@tomphttp/bare-server-node");
    console.log("Module successfully imported:", BareServer);
    // Use BareServer here
  } catch (error) {
    console.error("Failed to import module:", error);
  }
})();
import http from "http";
import nodeStatic from "node-static";

const bare = new BareServer("/bare/", "");
const serve = new nodeStatic.Server("static/");

const server = http.createServer();

server.on("request", (request, response) => {
  if (bare.route_request(request, response)) return true;
  serve.serve(request, response);
});

server.on("upgrade", (req, socket, head) => {
  if (bare.route_upgrade(req, socket, head)) return;
  socket.end();
});

server.listen(process.env.PORT || 8080);
