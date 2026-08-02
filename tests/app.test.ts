import { szuletesnap } from "./szuletesnap";
import { szuletesnapKezelo } from "./szuletesnapKezelo";
import { szuletesnapTipus } from "./szuletesnapTipus";

test("résztvevő hozzáadása", () => {
    let tesztSzuletesnap = new szuletesnap(
        "Teszt születésnap",
        "Budapest",
        "2026-09-12",
        szuletesnapTipus.csaladi
    );
    tesztSzuletesnap.resztvevoHozzaadas("Anna");
    expect(tesztSzuletesnap.resztvevok.length).toBe(1);
    expect(tesztSzuletesnap.resztvevok[0]).toBe("Anna");
});

test("résztvevő törlése", () => {
    let tesztSzuletesnap = new szuletesnap(
        "Teszt születésnap",
        "Budapest",
        "2026-09-12",
        szuletesnapTipus.csaladi
    );
    tesztSzuletesnap.resztvevoHozzaadas("Anna");
    tesztSzuletesnap.resztvevoHozzaadas("Péter");

    tesztSzuletesnap.resztvevoTorles("Anna");

    expect(tesztSzuletesnap.resztvevok.length).toBe(1);
    expect(tesztSzuletesnap.resztvevok[0]).toBe("Péter");
});

test("születésnap dátumának szerkesztése", () => {
    let tesztSzuletesnap = new szuletesnap(
        "Tamás 28. születésnapja",
        "Törökbálint",
        "2026-09-05",
        szuletesnapTipus.felnott
    );

    let tesztKezelo = new szuletesnapKezelo();
    tesztKezelo.szuletesnapHozzaadas(tesztSzuletesnap);

    tesztKezelo.szuletesnapSzerkesztes(
        "Tamás 28. születésnapja",
        "Tamás 28. születésnapja",
        "Törökbálint",
        "2026-09-12",
        szuletesnapTipus.felnott
    );
    expect(tesztKezelo.szuletesnapok[0].datum).toBe("2026-09-12");
});

test("születésnap törlése", () => {
    let tesztSzuletesnap = new szuletesnap(
        "Törlendő születésnap",
        "Érd",
        "2026-10-20",
        szuletesnapTipus.meglepetes
    );
    let tesztKezelo = new szuletesnapKezelo();

    tesztKezelo.szuletesnapHozzaadas(tesztSzuletesnap);

    tesztKezelo.szuletesnapTorles("Törlendő születésnap");

    expect(tesztKezelo.szuletesnapok.length).toBe(0);
});
