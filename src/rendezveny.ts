import { szuletesnapTipus } from "./szuletesnapTipus";

export interface rendezveny {
    nev: string;
    helyszin: string;
    datum: string;
    tipus: szuletesnapTipus;
    resztvevok: string[];
}