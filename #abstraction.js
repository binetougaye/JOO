// Abstraction: Se baser sur l'essentiel et non sur les détails
function employe(noms, age, sexe, salaire) {
  (this.noms = noms),
    (this.age = age),
    (this.sexe = sexe),
    (this.salaire = salaire),
    (this.infoEmploye = function () {
      console.log(`Noms : ${this.noms}`);
      console.log(`Age : ${this.age}`);
      console.log(`Sexe : ${this.sexe}`);
      console.log(`Salaire : ${this.salaire}`);
    });
}
const em1 = new employe("Mady", 24, "M", 200);
em1.infoEmploye();
