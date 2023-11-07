// Object literal [encapsulation]
const utilisateur = {
  noms: "Fabi gaye",
  email: "fabi@gmail.com",
  amis: ["Boubacar", "As7"],
  login() {
    console.log(this.email + " est connectée");
  },
};

//   logout() {
//     console.log(this.email + " est déconnectée");
//   }
console.log(utilisateur);
// Accès aux prop de l'objet
