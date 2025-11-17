function first(name, second) {
  return second(name);
}

function hello(name) {
  // On déclare la function hello (stocké en mémoire)
  console.log("Hello " + name);
}

first("Votre prénom", hello); // On fait d'abord un appel de fonction first()
// On donne comme argument à name = "Votre prénom" puis on passe hello en référence à la fonction first
