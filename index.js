import { createServer } from "http";

const server = createServer(function (request, response) {
  // Routing
  switch (request.url) {
    case "/":
      response.writeHead(200, {
        "Content-Type": "text/plain; charset=utf-8",
      });
      response.end("Page d'accueil");
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
  console.log("Votre serveur est lancé");
});
