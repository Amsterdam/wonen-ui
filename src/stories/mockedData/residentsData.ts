import dayjs from "dayjs"
import { ResidentsResponse } from "../../components/Residents/types"

export const residentsData: ResidentsResponse = {
  type: "RaadpleegMetBurgerservicenummer",
  personen: [
    // Katrien Duck
    {
      aNummer: "7153597828",
      burgerservicenummer: "999993008",
      geslacht: {
        code: "V",
        omschrijving: "vrouw"
      },
      naam: {
        voornamen: "Katrien",
        voorvoegsel: "",
        geslachtsnaam: "Duck",
        voorletters: "K.",
        volledigeNaam: "Katrien Duck"
      },
      leeftijd: 38,
      nationaliteiten: [
        {
          nationaliteit: {
            omschrijving: "Nederlandse"
          }
        }
      ],
      geboorte: {
        land: {
          omschrijving: "Marokko"
        },
        plaats: {
          omschrijving: "Tétouan"
        },
        datum: {
          datum: "1975-05-01",
          langFormaat: "1 mei 1975"
        }
      },
      adressering: {
        aanhef: "Geachte mevrouw Duck",
        aanschrijfwijze: {
          naam: "K. Duck"
        },
        gebruikInLopendeTekst: "mevrouw Duck",
        adresregel1: "Afrikanerplein 1",
        adresregel2: "1091 PN  AMSTERDAM"
      },
      verblijfplaats: {
        type: "Adres",
        functieAdres: {
          code: "W",
          omschrijving: "woonadres"
        },
        datumVan: {
          type: "Datum",
          datum: "1994-01-20",
          langFormaat: "20 januari 1994"
        }
      },
      kinderen: [
        {
          naam: {
            voornamen: "Kwik",
            geslachtsnaam: "Duck",
            voorletters: "K.",
            volledigeNaam: "Kwik Duck"
          },
          geboorte: {
            datum: {
              type: "Datum",
              datum: "2016-06-24",
              langFormaat: "24 juni 2016"
            }
          }
        },
        {
          naam: {
            voornamen: "Kwek",
            geslachtsnaam: "Duck",
            voorletters: "K.",
            volledigeNaam: "Kwek Duck"
          },
          geboorte: {
            datum: {
              type: "Datum",
              datum: "2016-06-24",
              langFormaat: "24 juni 2016"
            }
          }
        },
        {
          naam: {
            voornamen: "Kwak",
            geslachtsnaam: "Duck",
            voorletters: "K.",
            volledigeNaam: "Kwak Duck"
          },
          geboorte: {
            datum: {
              type: "Datum",
              datum: "2016-06-24",
              langFormaat: "24 juni 2016"
            }
          }
        }
      ],
      ouders: [
        {
          naam: {
            voornamen: "Hortense",
            geslachtsnaam: "Duck",
            voorletters: "H."
          },
          geboorte: {
            datum: {
              type: "Datum",
              datum: "1926-10-27",
              langFormaat: "27 oktober 1926"
            }
          },
          ouderAanduiding: "1"
        },
        {
          naam: {
            voornamen: "Dagobert",
            geslachtsnaam: "Duck",
            voorletters: "D."
          },
          geboorte: {
            datum: {
              type: "Datum",
              datum: "1923-04-12",
              langFormaat: "12 april 1923"
            }
          },
          ouderAanduiding: "2"
        }
      ],
      partners: [
        {
          naam: {
            voornamen: "Donald",
            geslachtsnaam: "Duck",
            voorletters: "D."
          },
          geboorte: {
            datum: {
              type: "Datum",
              datum: "1974-07-07",
              langFormaat: "7 juli 1974"
            }
          },
          aangaanHuwelijkPartnerschap: {
            datum: {
              type: "Datum",
              datum: "2023-08-11",
              langFormaat: "11 augustus 2023"
            }
          }
        },
        {
          naam: {
            voornamen: "Guus Johannes",
            geslachtsnaam: "Geluk",
            voorletters: "G.J."
          },
          geboorte: {
            datum: {
              type: "Datum",
              datum: "1979-12-07",
              langFormaat: "7 december 1979"
            }
          },
          aangaanHuwelijkPartnerschap: {
            datum: {
              type: "Datum",
              datum: "2010-12-08",
              langFormaat: "8 december 2010"
            }
          },
          ontbindingHuwelijkPartnerschap: {
            datum: {
              type: "Datum",
              datum: "2022-06-03",
              langFormaat: "3 juni 2022"
            }
          },
          soortVerbintenis: {
            code: "P",
            omschrijving: "geregistreerd partnerschap"
          }
        }
      ]
    },

    // Donald Duck
    {
      burgerservicenummer: "999996915",
      geboorte: {
        datum: {
          type: "Datum",
          datum: "1974-07-07",
          langFormaat: "7 juli 1974"
        }
      },
      geslacht: {
        code: "M",
        omschrijving: "man"
      },
      leeftijd: 48,
      naam: {
        voornamen: "Donald",
        geslachtsnaam: "Duck",
        voorletters: "D.",
        volledigeNaam: "Donald Duck"
      },
      adressering: {
        aanhef: "Geachte heer Duck",
        aanschrijfwijze: {
          naam: "D. Duck"
        },
        gebruikInLopendeTekst: "heer Duck"
      },
      verblijfplaats: {
        type: "Adres",
        functieAdres: {
          code: "W",
          omschrijving: "woonadres"
        },
        datumVan: {
          type: "Datum",
          datum: "1994-01-20",
          langFormaat: "20 januari 1994"
        }
      },
      kinderen: [
        {
          naam: {
            voornamen: "Kwik",
            geslachtsnaam: "Duck",
            voorletters: "K.",
            volledigeNaam: "Kwik Duck"
          },
          geboorte: {
            datum: {
              type: "Datum",
              datum: "2016-06-24",
              langFormaat: "24 juni 2016"
            }
          }
        },
        {
          naam: {
            voornamen: "Kwek",
            geslachtsnaam: "Duck",
            voorletters: "K.",
            volledigeNaam: "Kwek Duck"
          },
          geboorte: {
            datum: {
              type: "Datum",
              datum: "2016-06-24",
              langFormaat: "24 juni 2016"
            }
          }
        },
        {
          naam: {
            voornamen: "Kwak",
            geslachtsnaam: "Duck",
            voorletters: "K.",
            volledigeNaam: "Kwak Duck"
          },
          geboorte: {
            datum: {
              type: "Datum",
              datum: "2016-06-24",
              langFormaat: "24 juni 2016"
            }
          }
        }
      ],
      ouders: [
        {
          naam: {
            voornamen: "Hortense",
            geslachtsnaam: "Duck",
            voorletters: "H."
          },
          geboorte: {
            datum: {
              type: "Datum",
              datum: "1926-10-27",
              langFormaat: "27 oktober 1926"
            }
          },
          ouderAanduiding: "1"
        },
        {
          naam: {
            voornamen: "Dagobert",
            geslachtsnaam: "Duck",
            voorletters: "D."
          },
          geboorte: {
            datum: {
              type: "Datum",
              datum: "1923-04-12",
              langFormaat: "12 april 1923"
            }
          },
          ouderAanduiding: "2"
        }
      ],
      partners: [
        {
          naam: {
            voornamen: "Katrien",
            geslachtsnaam: "Duck",
            voorletters: "K."
          },
          geboorte: {
            datum: {
              type: "Datum",
              datum: "1975-05-01",
              langFormaat: "1 mei 1975"
            }
          },
          aangaanHuwelijkPartnerschap: {
            datum: {
              type: "Datum",
              datum: "2023-08-11",
              langFormaat: "11 augustus 2023"
            }
          }
        }
      ]
    },

    // Kwik Duck
    {
      burgerservicenummer: "999996952",
      geboorte: {
        datum: {
          type: "Datum",
          datum: "2016-06-24",
          langFormaat: "24 juni 2016"
        }
      },
      geslacht: {
        code: "M",
        omschrijving: "man"
      },
      leeftijd: 10,
      naam: {
        voornamen: "Kwik",
        geslachtsnaam: "Duck",
        voorletters: "K.",
        volledigeNaam: "Kwik Duck"
      },
      adressering: {
        aanhef: "Beste Kwik Duck",
        aanschrijfwijze: {
          naam: "K. Duck"
        },
        gebruikInLopendeTekst: "Kwik Duck",
        adresregel1: "Aalbersestraat 281",
        adresregel2: "1067 MD  AMSTERDAM"
      },
      verblijfplaats: {
        type: "Adres",
        functieAdres: {
          code: "W",
          omschrijving: "woonadres"
        },
        datumVan: {
          type: "Datum",
          datum: "2016-01-20",
          langFormaat: "20 januari 2016"
        }
      },
      ouders: [
        {
          naam: {
            voornamen: "Katrien",
            geslachtsnaam: "Duck",
            voorletters: "K."
          },
          geboorte: {
            datum: {
              type: "Datum",
              datum: "1975-05-01",
              langFormaat: "1 mei 1975"
            }
          },
          ouderAanduiding: "1"
        },
        {
          naam: {
            voornamen: "Donald",
            geslachtsnaam: "Duck",
            voorletters: "D."
          },
          geboorte: {
            datum: {
              type: "Datum",
              datum: "1974-07-07",
              langFormaat: "7 juli 1974"
            }
          },
          ouderAanduiding: "2"
        }
      ],
      partners: []
    },

    // Kwek Duck
    {
      burgerservicenummer: "999996940",
      geboorte: {
        datum: {
          type: "Datum",
          datum: "2016-06-24",
          langFormaat: "24 juni 2016"
        }
      },
      geslacht: {
        code: "M",
        omschrijving: "man"
      },
      leeftijd: 10,
      naam: {
        voornamen: "Kwek",
        geslachtsnaam: "Duck",
        voorletters: "K.",
        volledigeNaam: "Kwek Duck"
      },
      adressering: {
        aanhef: "Beste Kwek Duck",
        aanschrijfwijze: {
          naam: "K. Duck"
        },
        gebruikInLopendeTekst: "Kwek Duck",
        adresregel1: "Aalbersestraat 281",
        adresregel2: "1067 MD  AMSTERDAM"
      },
      verblijfplaats: {
        type: "Adres",
        functieAdres: {
          code: "W",
          omschrijving: "woonadres"
        },
        datumVan: {
          type: "Datum",
          datum: "2016-01-20",
          langFormaat: "20 januari 2016"
        }
      },
      ouders: [
        {
          naam: {
            voornamen: "Katrien",
            geslachtsnaam: "Duck",
            voorletters: "K."
          },
          geboorte: {
            datum: {
              type: "Datum",
              datum: "1975-05-01",
              langFormaat: "1 mei 1975"
            }
          },
          ouderAanduiding: "1"
        },
        {
          naam: {
            voornamen: "Donald",
            geslachtsnaam: "Duck",
            voorletters: "D."
          },
          geboorte: {
            datum: {
              type: "Datum",
              datum: "1974-07-07",
              langFormaat: "7 juli 1974"
            }
          },
          ouderAanduiding: "2"
        }
      ],
      partners: []
    },

    // Kwak Duck
    {
      burgerservicenummer: "999996964",
      geboorte: {
        datum: {
          type: "Datum",
          datum: "2016-06-24",
          langFormaat: "24 juni 2016"
        }
      },
      geslacht: {
        code: "M",
        omschrijving: "man"
      },
      leeftijd: 10,
      naam: {
        voornamen: "Kwak",
        geslachtsnaam: "Duck",
        voorletters: "K.",
        volledigeNaam: "Kwak Duck"
      },
      adressering: {
        aanhef: "Beste Kwak Duck",
        aanschrijfwijze: {
          naam: "K. Duck"
        },
        gebruikInLopendeTekst: "Kwak Duck",
        adresregel1: "Aalbersestraat 281",
        adresregel2: "1067 MD  AMSTERDAM"
      },
      verblijfplaats: {
        type: "Adres",
        functieAdres: {
          code: "W",
          omschrijving: "woonadres"
        },
        datumVan: {
          type: "Datum",
          datum: "2016-01-20",
          langFormaat: "20 januari 2016"
        }
      },
      ouders: [
        {
          naam: {
            voornamen: "Katrien",
            geslachtsnaam: "Duck",
            voorletters: "K."
          },
          geboorte: {
            datum: {
              type: "Datum",
              datum: "1975-05-01",
              langFormaat: "1 mei 1975"
            }
          },
          ouderAanduiding: "1"
        },
        {
          naam: {
            voornamen: "Donald",
            geslachtsnaam: "Duck",
            voorletters: "D."
          },
          geboorte: {
            datum: {
              type: "Datum",
              datum: "1974-07-07",
              langFormaat: "7 juli 1974"
            }
          },
          ouderAanduiding: "2"
        }
      ],
      partners: []
    },

    // Dagobert Duck
    {
      burgerservicenummer: "999996964",
      geboorte: {
        datum: {
          type: "Datum",
          datum: "1923-04-12",
          langFormaat: "12 april 1923"
        }
      },
      geslacht: {
        code: "M",
        omschrijving: "man"
      },
      leeftijd: 103,
      naam: {
        voornamen: "Dagobert",
        geslachtsnaam: "Duck",
        voorletters: "D.",
        volledigeNaam: "Dagobert Duck"
      },
      adressering: {
        aanhef: "Geachte heer Duck",
        aanschrijfwijze: {
          naam: "D. Duck"
        },
        gebruikInLopendeTekst: "heer Duck",
        adresregel1: "Aalbersestraat 281",
        adresregel2: "1067 MD  AMSTERDAM"
      },
      verblijfplaats: {
        type: "Adres",
        functieAdres: {
          code: "W",
          omschrijving: "woonadres"
        },
        datumVan: {
          type: "Datum",
          datum: "1906-01-20",
          langFormaat: "20 januari 2016"
        }
      },
      kinderen: [
        {
          naam: {
            voornamen: "Donald",
            geslachtsnaam: "Duck",
            voorletters: "D."
          },
          geboorte: {
            datum: {
              type: "Datum",
              datum: "1974-07-07",
              langFormaat: "7 juli 1974"
            }
          }
        },
        {
          naam: {
            voornamen: "Katrien",
            geslachtsnaam: "Duck",
            voorletters: "K."
          },
          geboorte: {
            datum: {
              type: "Datum",
              datum: "1975-05-01",
              langFormaat: "1 mei 1975"
            }
          }
        }
      ],
      partners: [
        {
          naam: {
            voornamen: "Hortense",
            geslachtsnaam: "Duck",
            voorletters: "H."
          },
          geboorte: {
            datum: {
              type: "Datum",
              datum: "1926-10-27",
              langFormaat: "27 oktober 1926"
            }
          },
          aangaanHuwelijkPartnerschap: {
            datum: {
              type: "Datum",
              datum: "1950-05-15",
              langFormaat: "15 mei 1950"
            }
          }
        }
      ],
      ouders: []
    },

    // Hortense Duck
    {
      burgerservicenummer: "999996999",
      geboorte: {
        datum: {
          type: "Datum",
          datum: "1926-10-27",
          langFormaat: "27 oktober 1926"
        }
      },
      geslacht: {
        code: "V",
        omschrijving: "vrouw"
      },
      leeftijd: 97,
      naam: {
        voornamen: "Hortense",
        geslachtsnaam: "Duck",
        voorletters: "H.",
        volledigeNaam: "Hortense Duck"
      },
      adressering: {
        aanhef: "Geachte mevrouw Duck",
        aanschrijfwijze: {
          naam: "H. Duck"
        },
        gebruikInLopendeTekst: "mevrouw Duck",
        adresregel1: "Aalbersestraat 281",
        adresregel2: "1067 MD  AMSTERDAM"
      },
      verblijfplaats: {
        type: "Adres",
        functieAdres: {
          code: "W",
          omschrijving: "woonadres"
        },
        datumVan: {
          type: "Datum",
          datum: "2016-01-20",
          langFormaat: "20 januari 2016"
        }
      },
      kinderen: [
        {
          naam: {
            voornamen: "Donald",
            geslachtsnaam: "Duck",
            voorletters: "D."
          },
          geboorte: {
            datum: {
              type: "Datum",
              datum: "1974-07-07",
              langFormaat: "7 juli 1974"
            }
          }
        },
        {
          naam: {
            voornamen: "Katrien",
            geslachtsnaam: "Duck",
            voorletters: "K."
          },
          geboorte: {
            datum: {
              type: "Datum",
              datum: "1975-05-01",
              langFormaat: "1 mei 1975"
            }
          }
        }
      ],
      partners: [
        {
          naam: {
            voornamen: "Dagobert",
            geslachtsnaam: "Duck",
            voorletters: "D."
          },
          geboorte: {
            datum: {
              type: "Datum",
              datum: "1923-04-12",
              langFormaat: "12 april 1923"
            }
          },
          aangaanHuwelijkPartnerschap: {
            datum: {
              type: "Datum",
              datum: "1950-05-15",
              langFormaat: "15 mei 1950"
            }
          }
        }
      ],
      ouders: []
    },

    // Guus Geluk
    {
      burgerservicenummer: "999996915",
      geboorte: {
        datum: {
          type: "Datum",
          datum: "1979-12-07",
          langFormaat: "7 december 1979"
        }
      },
      geslacht: {
        code: "M",
        omschrijving: "man"
      },
      leeftijd: 47,
      naam: {
        voornamen: "Guus Johannes",
        geslachtsnaam: "Geluk",
        voorletters: "G.J.",
        volledigeNaam: "Guus Johannes Geluk"
      },
      adressering: {
        aanhef: "Geachte heer Geluk",
        aanschrijfwijze: {
          naam: "G.J. Geluk"
        },
        gebruikInLopendeTekst: "heer Geluk",
        adresregel1: "Aalbersestraat 281",
        adresregel2: "1067 MD  AMSTERDAM"
      },
      verblijfplaats: {
        type: "Adres",
        functieAdres: {
          code: "W",
          omschrijving: "woonadres"
        },
        datumVan: {
          type: "Datum",
          datum: "2016-01-20",
          langFormaat: "20 januari 2016"
        }
      },
      kinderen: [],
      ouders: [],
      partners: [
        {
          naam: {
            voornamen: "Katrien",
            geslachtsnaam: "Duck",
            voorletters: "K."
          },
          geboorte: {
            datum: {
              type: "Datum",
              datum: "1975-05-01",
              langFormaat: "1 mei 1975"
            }
          },
          aangaanHuwelijkPartnerschap: {
            datum: {
              type: "Datum",
              datum: "2010-12-08",
              langFormaat: "8 december 2010"
            }
          },
          ontbindingHuwelijkPartnerschap: {
            datum: {
              type: "Datum",
              datum: "2022-06-03",
              langFormaat: "3 juni 2022"
            }
          },
          soortVerbintenis: {
            code: "P",
            omschrijving: "geregistreerd partnerschap"
          }
        }
      ]
    },

    // Guus de Gans
    {
      burgerservicenummer: "999996873",
      geboorte: {
        datum: {
          type: "Datum",
          datum: "1989-08-20",
          langFormaat: "20 augustus 1989"
        }
      },
      geslacht: {
        code: "M",
        omschrijving: "man"
      },
      leeftijd: 37,
      naam: {
        voornamen: "Guus",
        geslachtsnaam: "Gans",
        voorvoegsel: "de",
        voorletters: "G.",
        volledigeNaam: "Guus de Gans"
      },
      adressering: {
        aanhef: "Beste Guus de Gans",
        aanschrijfwijze: {
          naam: "G. de Gans"
        },
        gebruikInLopendeTekst: "Guus de Gans",
        adresregel1: "Aalbersestraat 281",
        adresregel2: "1067 MD  AMSTERDAM"
      },
      verblijfplaats: {
        type: "Adres",
        functieAdres: {
          code: "W",
          omschrijving: "woonadres"
        },
        datumVan: {
          type: "Datum",
          datum: "2016-01-20",
          langFormaat: "20 januari 2016"
        }
      },
      kinderen: [],
      ouders: [],
      partners: []
    },

    // Willem Beentjes
    {
      burgerservicenummer: "999996885",
      geboorte: {
        datum: {
          type: "Datum",
          datum: "1992-02-12",
          langFormaat: "12 februari 1992"
        }
      },
      geslacht: {
        code: "N",
        omschrijving: "non-binair"
      },
      leeftijd: 34,
      naam: {
        voornamen: "Willem",
        geslachtsnaam: "Beentjes",
        voorletters: "W.",
        volledigeNaam: "Willem Beentjes"
      },
      adressering: {
        aanhef: "Beste Willem Beentjes",
        aanschrijfwijze: {
          naam: "W. Beentjes"
        },
        gebruikInLopendeTekst: "Willem Beentjes",
        adresregel1: "Aalbersestraat 281",
        adresregel2: "1067 MD  AMSTERDAM"
      },
      verblijfplaats: {
        type: "Adres",
        functieAdres: {
          code: "W",
          omschrijving: "woonadres"
        },
        datumVan: {
          type: "Datum",
          datum: "2016-01-20",
          langFormaat: "20 januari 2016"
        }
      },
      kinderen: [],
      ouders: [],
      partners: []
    },

    // Buurvrouw Buis
    {
      burgerservicenummer: "999996939",
      geboorte: {
        datum: {
          type: "Datum",
          datum: "1988-07-24",
          langFormaat: "24 juli 1988"
        }
      },
      geslacht: {
        code: "V",
        omschrijving: "vrouw"
      },
      leeftijd: 38,
      naam: {
        voornamen: "Buurvrouw",
        geslachtsnaam: "Buis",
        voorletters: "B.",
        volledigeNaam: "Buurvrouw Buis"
      },
      adressering: {
        aanhef: "Beste Buurvrouw Buis",
        aanschrijfwijze: {
          naam: "B. Buis"
        },
        gebruikInLopendeTekst: "Buurvrouw Buis",
        adresregel1: "Aalbersestraat 281",
        adresregel2: "1067 MD  AMSTERDAM"
      },
      verblijfplaats: {
        type: "Adres",
        functieAdres: {
          code: "W",
          omschrijving: "woonadres"
        },
        datumVan: {
          type: "Datum",
          datum: "2016-01-20",
          langFormaat: "20 januari 2016"
        }
      },
      kinderen: [],
      ouders: [],
      partners: []
    },

    // Juffrouw Ans
    {
      burgerservicenummer: "999996903",
      geboorte: {
        datum: {
          type: "Datum",
          datum: "1984-02-23",
          langFormaat: "23 februari 1984"
        }
      },
      geslacht: {
        code: "V",
        omschrijving: "vrouw"
      },
      leeftijd: 42,
      naam: {
        voornamen: "Juffrouw",
        geslachtsnaam: "Ans",
        voorletters: "J.",
        volledigeNaam: "Juffrouw Ans"
      },
      adressering: {
        aanhef: "Beste Juffrouw Ans",
        aanschrijfwijze: {
          naam: "J. Ans"
        },
        gebruikInLopendeTekst: "Juffrouw Ans",
        adresregel1: "Aalbersestraat 281",
        adresregel2: "1067 MD  AMSTERDAM"
      },
      verblijfplaats: {
        type: "Adres",
        functieAdres: {
          code: "W",
          omschrijving: "woonadres"
        },
        datumVan: {
          type: "Datum",
          datum: "2016-01-20",
          langFormaat: "20 januari 2016"
        }
      },
      kinderen: [],
      ouders: [],
      partners: []
    },

    // Boris Boef
    {
      burgerservicenummer: "999996897",
      geboorte: {
        datum: {
          type: "Datum",
          datum: "1987-06-05",
          langFormaat: "5 juni 1987"
        }
      },
      geslacht: {
        code: "M",
        omschrijving: "man"
      },
      leeftijd: 39,
      naam: {
        voornamen: "Boris",
        geslachtsnaam: "Boef",
        voorletters: "B.",
        volledigeNaam: "Boris Boef"
      },
      adressering: {
        aanhef: "Beste Boris Boef",
        aanschrijfwijze: {
          naam: "B. Boef"
        },
        gebruikInLopendeTekst: "Boris Boef",
        adresregel1: "Aalbersestraat 281",
        adresregel2: "1067 MD  AMSTERDAM"
      },
      verblijfplaats: {
        type: "Adres",
        functieAdres: {
          code: "W",
          omschrijving: "woonadres"
        },
        datumVan: {
          type: "Datum",
          datum: "2016-01-20",
          langFormaat: "20 januari 2016"
        }
      },
      kinderen: [],
      ouders: [],
      partners: []
    },

    // Inspecteur van der Willighagen
    {
      burgerservicenummer: "999996927",
      geboorte: {
        datum: {
          type: "Datum",
          datum: "1993-11-12",
          langFormaat: "12 november 1993"
        }
      },
      geslacht: {
        code: "M",
        omschrijving: "man"
      },
      leeftijd: 33,
      naam: {
        voornamen: "Inspecteur",
        geslachtsnaam: "Willighagen",
        voorvoegsel: "van der",
        voorletters: "I.",
        volledigeNaam: "Inspecteur van der Willighagen"
      },
      adressering: {
        aanhef: "Beste Inspecteur van der Willighagen",
        aanschrijfwijze: {
          naam: "I. van der Willighagen"
        },
        gebruikInLopendeTekst: "Inspecteur van der Willighagen",
        adresregel1: "Aalbersestraat 281",
        adresregel2: "1067 MD  AMSTERDAM"
      },
      verblijfplaats: {
        type: "Adres",
        functieAdres: {
          code: "W",
          omschrijving: "woonadres"
        },
        datumVan: {
          type: "Datum",
          datum: "2016-01-20",
          langFormaat: "20 januari 2016"
        }
      },
      kinderen: [],
      ouders: [
        {
          naam: {
            voornamen: "Priscilla",
            geslachtsnaam: "Precise",
            voorletters: "P."
          },
          geboorte: {
            datum: {
              type: "Datum",
              datum: "1990-01-14",
              langFormaat: "14 januari 1990"
            }
          },
          ouderAanduiding: "1"
        }
      ],
      partners: []
    },

    // Priscilla Precise
    {
      burgerservicenummer: "999996998",
      geboorte: {
        datum: {
          type: "Datum",
          datum: "1990-01-14",
          langFormaat: "14 januari 1990"
        }
      },
      geslacht: {
        code: "V",
        omschrijving: "vrouw"
      },
      leeftijd: 36,
      naam: {
        voornamen: "Priscilla",
        geslachtsnaam: "Precise",
        voorletters: "P.",
        volledigeNaam: "Priscilla Precise"
      },
      adressering: {
        aanhef: "Beste Priscilla Precise",
        aanschrijfwijze: {
          naam: "P. Precise"
        },
        gebruikInLopendeTekst: "Priscilla Precise",
        adresregel1: "Aalbersestraat 281",
        adresregel2: "1067 MD  AMSTERDAM"
      },
      verblijfplaats: {
        type: "Adres",
        functieAdres: {
          code: "W",
          omschrijving: "woonadres"
        },
        datumVan: {
          type: "Datum",
          datum: "2016-01-20",
          langFormaat: "20 januari 2016"
        }
      },
      kinderen: [
        {
          naam: {
            voornamen: "Inspecteur",
            geslachtsnaam: "Willighagen",
            voorvoegsel: "van der",
            voorletters: "I."
          },
          geboorte: {
            datum: {
              type: "Datum",
              datum: "1993-11-12",
              langFormaat: "12 november 1993"
            }
          }
        }
      ],
      ouders: [],
      partners: []
    },

    // Professor Eppo Epsilon
    {
      burgerservicenummer: "999996861",
      geboorte: {
        datum: {
          type: "Datum",
          datum: "1991-03-08",
          langFormaat: "8 maart 1991"
        }
      },
      geslacht: {
        code: "M",
        omschrijving: "man"
      },
      overlijden: {
        datum: {
          jaar: 2025,
          langFormaat: dayjs().subtract(4, "month").format("MMMM YYYY")
        }
      },
      naam: {
        voornamen: "Professor",
        geslachtsnaam: "Eppo Epsilon",
        voorletters: "P.",
        volledigeNaam: "Professor Eppo Epsilon"
      },
      adressering: {
        aanhef: "Geachte Professor Eppo Epsilon",
        aanschrijfwijze: {
          naam: "P. Eppo Epsilon"
        },
        gebruikInLopendeTekst: "Professor Eppo Epsilon",
        adresregel1: "Aalbersestraat 281",
        adresregel2: "1067 MD  AMSTERDAM"
      },
      verblijfplaats: {
        type: "Adres",
        functieAdres: {
          code: "W",
          omschrijving: "woonadres"
        },
        datumVan: {
          type: "Datum",
          datum: "2016-01-20",
          langFormaat: "20 januari 2016"
        }
      },
      kinderen: [],
      ouders: [
        {
          naam: {
            voornamen: "Onbekend",
            geslachtsnaam: "Epsilon",
            voorletters: "O."
          },
          geboorte: {
            datum: {
              type: "Datum",
              datum: "1960-01-01",
              langFormaat: "1 januari 1960"
            }
          },
          ouderAanduiding: "1"
        },
        {
          naam: {
            voornamen: "Onbekend",
            geslachtsnaam: "Epsilon",
            voorletters: "O."
          },
          geboorte: {
            datum: {
              type: "Datum",
              datum: "1960-01-01",
              langFormaat: "1 januari 1960"
            }
          },
          ouderAanduiding: "2"
        }
      ],
      partners: []
    }
  ]
}

export default residentsData
