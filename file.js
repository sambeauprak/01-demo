import { readFile, writeFile } from "fs";
// const { readFile, writeFile } =  require("fs"); // ancienne méthode

// Convertir une chaîne de caractère en json et l'afficher en tableau
function displayTable(err, data) {
  const response = JSON.parse(data);
  console.table(response);
}
// Lire un fichier json
function readJson() {
  readFile("demo.json", "utf8", displayTable);
}

// Écrire dans un fichier json
function writeJson() {
  const newData = {
    id: 1,
    name: "Prrrt'",
    description: "No idea",
    active: false,
  };

  writeFile("demo.json", JSON.stringify(newData), "utf8", readJson);
}

// Appelle de fonction
writeJson(); // writeJson -> readJson -> displayTable
