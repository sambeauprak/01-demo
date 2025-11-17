import { readFile, writeFile } from "fs";

// Convertir une chaîne de caractère en json et l'afficher en tableau
function displayTable(err, data) {
  const response = JSON.parse(data);
  console.table(response);
  return this;
}
// Lire un fichier json
async function readJson() {
  readFile("demo.json", "utf8", displayTable);
}

// Écrire dans un fichier json
async function writeJson() {
  const newData = {
    id: 1,
    name: "Prrrt'",
    description: "No idea",
    active: false,
  };

  writeFile("demo.json", JSON.stringify(newData), "utf8", function () {});
  return this;
}

// Appelle de fonction
writeJson().then(readJson); // writeJson -> readJson -> displayTable
