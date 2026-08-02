import { szuletesnap } from "./szuletesnap";
import { szuletesnapTipus } from "./szuletesnapTipus";

export class szuletesnapKezelo {
    public szuletesnapok: szuletesnap[];
    constructor() {
        this.szuletesnapok = [];
    }
    public szuletesnapHozzaadas(
        ujSzuletesnap: szuletesnap
    ): void {
        this.szuletesnapok.push(ujSzuletesnap);
    }
    public szuletesnapSzerkesztes(
        regiNev: string,
        ujNev: string,
        ujHelyszin: string,
        ujDatum: string,
        ujTipus: szuletesnapTipus
    ): void {
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
    public szuletesnapTorles(nev: string): void {
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

    public tipusSzerintiKereses(
        tipus: szuletesnapTipus
    ): void {
        console.log(
            "Keresett típus: " + szuletesnapTipus[tipus]
        );

        for (let i = 0; i < this.szuletesnapok.length; i++) {
            if (this.szuletesnapok[i].tipus === tipus) {
                console.log(this.szuletesnapok[i]);
            }
        }
    }

    public szuletesnapokListazasa(): void {
        console.log("Az összes születésnap:");
        for (let i = 0; i < this.szuletesnapok.length; i++) {
            console.log(this.szuletesnapok[i]);
        }
    }
}