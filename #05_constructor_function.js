class utilisateur {
  constructor(noms, mail, ...amis) {
    this.noms;
    this.mail;
    this.amis;
    this.login = function () {
      console.log(`${mail} est connecté(e)`);
    };
    this.logout = function () {
      console.log(`${mail} est déconnecté(e)`);
    };
  }
}
// Une instance
const utilisateur1 = new utilisateur("Fabi", "fabi@gmail.com", "Sidy");
console.log(utilisateur1);
const utilisateur2 = new utilisateur("Mady", "mady@gmail.com", "Awa");

// Accès aux méthodes
login(utilisateur1);
login(utilisateur2);
