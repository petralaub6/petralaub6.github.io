"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.szuletesnap = void 0;
class szuletesnap {
    constructor(nev, helyszin, datum, tipus) {
        this.nev = nev;
        this.helyszin = helyszin;
        this.datum = datum;
        this.tipus = tipus;
        this.resztvevok = [];
    }
    resztvevoHozzaadas(nev) {
        this.resztvevok.push(nev);
    }
    resztvevoTorles(nev) {
        let index = this.resztvevok.indexOf(nev);
        if (index !== -1) {
            this.resztvevok.splice(index, 1);
        }
    }
    resztvevokListazasa() {
        console.log("A rendezvény résztvevői:");
        for (let i = 0; i < this.resztvevok.length; i++) {
            console.log(this.resztvevok[i]);
        }
    }
}
exports.szuletesnap = szuletesnap;
//# sourceMappingURL=szuletesnap.js.map