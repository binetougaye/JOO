// Factory Function
const utilisateur = (noms, mail, ...amis) => {
  return {
    noms,
    mail,
    amis,
    login() {
      console.log(`${mail}` + " est connecté(e)");
    },
    logout() {
      console.log(`${mail}` + " est déconnecté(e)");
    },
  };
};
const utilisateur1 = utilisateur("Fabi", "fabi@gmail.com", "Sidy", "Mady");
console.log(utilisateur1);
