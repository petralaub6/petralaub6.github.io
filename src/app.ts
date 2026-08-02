import { szuletesnapTipus } from "./szuletesnapTipus";
import { szuletesnap } from "./szuletesnap";
import { szuletesnapKezelo } from "./szuletesnapKezelo";

let szuletesnap1 = new szuletesnap(
    "Petra 25. születésnapja",
    "Balatonfüred",
    "2026-09-29",
    szuletesnapTipus.csaladi
);
let szuletesnap2 = new szuletesnap(
    "Tamás 28. születésnapja",
    "Törökbálint",
    "2026-09-05",
    szuletesnapTipus.felnott
);

let szuletesnap3 = new szuletesnap(
    "Luca 30. születésnapja (meglepetés)",
    "Érd",
    "2026-10-03",
    szuletesnapTipus.meglepetes
);
szuletesnap1.resztvevoHozzaadas("Regina");
szuletesnap1.resztvevoHozzaadas("Lili");
szuletesnap1.resztvevoHozzaadas("Kata");
szuletesnap1.resztvevoHozzaadas("Flóra");
szuletesnap1.resztvevoHozzaadas("Dávid");
szuletesnap1.resztvevoHozzaadas("Balázs");

szuletesnap1.resztvevoTorles("Lili");

szuletesnap2.resztvevoHozzaadas("Tamás");
szuletesnap2.resztvevoHozzaadas("Máté");
szuletesnap2.resztvevoHozzaadas("Bence");
szuletesnap2.resztvevoHozzaadas("Lili");
szuletesnap2.resztvevoHozzaadas("Laura");

szuletesnap3.resztvevoHozzaadas("Luca");
szuletesnap3.resztvevoHozzaadas("Dóra");
szuletesnap3.resztvevoHozzaadas("Nóra");
szuletesnap3.resztvevoHozzaadas("Anna");

let kezelo = new szuletesnapKezelo();

kezelo.szuletesnapHozzaadas(szuletesnap1);
kezelo.szuletesnapHozzaadas(szuletesnap2);
kezelo.szuletesnapHozzaadas(szuletesnap3);

kezelo.szuletesnapSzerkesztes(
    "Tamás 28. születésnapja",
    "Tamás 28. születésnapja",
    "Törökbálint",
    "2026-09-12",
    szuletesnapTipus.felnott
);

kezelo.szuletesnapTorles("Luca 30. születésnapja (meglepetés)");

kezelo.tipusSzerintiKereses(
    szuletesnapTipus.csaladi
);

console.log(szuletesnap1);
console.log("Rendezvény neve: " + szuletesnap1.nev);
console.log("Helyszín: " + szuletesnap1.helyszin);
console.log("Dátum: " + szuletesnap1.datum);
console.log("Típus: " + szuletesnapTipus[szuletesnap1.tipus]);
console.log("Résztvevők:", szuletesnap1.resztvevok);
console.log("Az összes születésnap:");
console.log(kezelo.szuletesnapok);