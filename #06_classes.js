// classe: c'est une maquette ou un modéle pour créer des objets
class Utilisateur {
  // constructeur: c'est une fonction qui implémente les propriétés  d'un objet
  constructor(noms, mail, amis) {
    (this.noms = noms), (this.mail = mail), (this.amis = amis);
  }
  login() {
    console.log(`${this.email} est connecté(e)`);
  }
  logout() {
    console.log(`${this.email} est déconnecté(e)`);
  }
}
