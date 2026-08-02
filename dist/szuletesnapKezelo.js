"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.szuletesnapKezelo = void 0;
const szuletesnapTipus_1 = require("./szuletesnapTipus");
class szuletesnapKezelo {
    constructor() {
        this.szuletesnapok = [];
    }
    szuletesnapHozzaadas(ujSzuletesnap) {
        this.szuletesnapok.push(ujSzuletesnap);
    }
    szuletesnapSzerkesztes(regiNev, ujNev, ujHelyszin, ujDatum, ujTipus) {
        let index = -1;
        for (let i = 0; i < this.szuletesnapok.length; i++) {
            if (this.szuletesnapok[i].nev === regiNev) {
                index = i;
            }
        }
        if (index !== -1) {
            this.szuletesnapok[index].nev = ujNev;
            this.szuletesnapok[index].helyszin = ujHelyszin;
            this.szuletesnapok[index].datum = ujDatum;
            this.szuletesnapok[index].tipus = ujTipus;
        }
    }
    szuletesnapTorles(nev) {
        let index = -1;
        for (let i = 0; i < this.szuletesnapok.length; i++) {
            if (this.szuletesnapok[i].nev === nev) {
                index = i;
            }
        }
        if (index !== -1) {
            this.szuletesnapok.splice(index, 1);
        }
    }
    tipusSzerintiKereses(tipus) {
        console.log("Keresett típus: " + szuletesnapTipus_1.szuletesnapTipus[tipus]);
        for (let i = 0; i < this.szuletesnapok.length; i++) {
            if (this.szuletesnapok[i].tipus === tipus) {
                console.log(this.szuletesnapok[i]);
            }
        }
    }
    szuletesnapokListazasa() {
        console.log("Az összes születésnap:");
        for (let i = 0; i < this.szuletesnapok.length; i++) {
            console.log(this.szuletesnapok[i]);
        }
    }
}
exports.szuletesnapKezelo = szuletesnapKezelo;
//# sourceMappingURL=szuletesnapKezelo.js.map