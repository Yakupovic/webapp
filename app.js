// Application DevSecOps - fonction de calcul

function calcul(a, b) {
  const inutilise = "cette variable ne sert a rien"; // code smell : variable inutilisee

  // if/else redondant : les deux branches font la meme chose
  if (a > b) {
    return a + b;
  } else {
    return a + b;
  }
}

module.exports = { calcul };

// Point d'entree
if (require.main === module) {
  console.log("Resultat calcul(1, 2) =", calcul(1, 2));
}
