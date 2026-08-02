import { rendezveny } from "./rendezveny";
import { szuletesnapTipus } from "./szuletesnapTipus";

export class szuletesnap implements rendezveny {
    public nev: string;
    public helyszin: string;
    public datum: string;
    public tipus: szuletesnapTipus;
    public resztvevok: string[];

    constructor(
        nev: string,
        helyszin: string,
        datum: string,
        tipus: szuletesnapTipus
    ) {
        this.nev = nev;
        this.helyszin = helyszin;
        this.datum = datum;
        this.tipus = tipus;
        this.resztvevok = [];
    }

    public resztvevoHozzaadas(nev: string): void {
        this.resztvevok.push(nev);
    }
    public resztvevoTorles(nev: string): void {
        let index = this.resztvevok.indexOf(nev);
        if (index !== -1) {
            this.resztvevok.splice(index, 1);
        }
    }
    public resztvevokListazasa(): void {
        console.log("A rendezvény résztvevői:");
        for (let i = 0; i < this.resztvevok.length; i++) {
            console.log(this.resztvevok[i]);
        }
    }
}