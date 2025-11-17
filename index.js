import { readFile } from "fs";
import { createServer } from "http";
// import json from "./demo.json" with { type: "json" };

const server = createServer(function (request, response) {
  // Routing
  switch (request.url) {
    case "/":
      readFile("demo.json", "utf8", function (err, data) {
        response.writeHead(200, {
          "Content-Type": "application/json; charset=utf-8",
        });
        response.end(data);
      });

      break;

    default:
      response.writeHead(404, {
        "Content-Type": "text/plain; charset=utf-8",
      });
      response.end("Page non trouvée");
      break;
  }
});

const port = 3000;
server.listen(port, function () {
  console.log("Votre serveur est lancé sur http://localhost:" + 3000);
});
