function impartire(nr1 : number, nr2 : number){
    return nr1 / nr2;
}

console.log(impartire(3,4));
// console.log(impartire('salut', 'pizza'));

class Produs{

    denumire: string;
    pret : number;

    constructor(denumire : string, pret : number){
        this.denumire = denumire;
        this.pret = pret;
    }
}

function produsScump(produs : Produs) {
    if(produs.pret > 500){
        return true;
    }
    return false;
}

var p1 = new Produs('xbox', 300);


console.log(produsScump(p1));
// console.log(produsScump('kek'));
