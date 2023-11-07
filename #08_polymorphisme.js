// Polymorphisme: capacité d'un objet à prendre plusieurs formes
class User {
  constructor(noms) {
    this.noms = noms;
  }
  login() {
    console.log(`${this.noms} connecté(e)`);
  }
  logout() {
    console.log(`${this.noms} déconnecté(e)`);
  }
}
class Admin extends User {
  login() {
    console.log(`${this.noms} connecté(e)`);
  }
}
const user1 = new User("Fabi");
const admin = new Admin("Louise");
user1.login();
admin.login();
