import { ResidentsResponse } from "../../components/ResidentsV2/types"

const residentsData: ResidentsResponse = {
  "type": "RaadpleegMetBurgerservicenummer",
  "personen": [
    {
      "aNummer": "7153597828",
      "burgerservicenummer": "999993008",
      "geslacht": {
        "code": "V",
        "omschrijving": "vrouw"
      },
      "naam": {
        "aanduidingNaamgebruik": {
          "code": "E",
          "omschrijving": "eigen geslachtsnaam"
        },
        "voornamen": "Katrien",
        "voorvoegsel": "",
        "geslachtsnaam": "Duck",
        "voorletters": "K.",
        "volledigeNaam": "Katrien Duck"
      },
      "nationaliteiten": [
        {
          "type": "Nationaliteit",
          "nationaliteit": {
            "code": "0001",
            "omschrijving": "Nederlandse"
          },
          "redenOpname": {
            "code": "027",
            "omschrijving": "Rijkswet op het Nederlanderschap 1984, art. 7"
          },
          "datumIngangGeldigheid": {
            "type": "Datum",
            "datum": "2005-03-16",
            "langFormaat": "16 maart 2005"
          }
        }
      ],
      "geboorte": {
        "land": {
          "code": "5022",
          "omschrijving": "Marokko"
        },
        "plaats": {
          "omschrijving": "Tétouan"
        },
        "datum": {
          "type": "Datum",
          "datum": "1975-05-01",
          "langFormaat": "1 mei 1975"
        }
      },
      "opschortingBijhouding": {
        "datum": {
          "type": "JaarMaandDatum",
          "jaar": 2008,
          "maand": 7,
          "langFormaat": "juli 2008"
        },
        "reden": {
          "code": "O",
          "omschrijving": "overlijden"
        }
      },
      "overlijden": {
        "datum": {
          "type": "JaarMaandDatum",
          "jaar": 2008,
          "maand": 7,
          "langFormaat": "juli 2008"
        }
      },
      "verblijfplaats": {
        "type": "Adres",
        "verblijfadres": {
          "korteStraatnaam": "Afrikanerplein",
          "huisnummer": 1,
          "postcode": "1091PN"
        },
        "functieAdres": {
          "code": "W",
          "omschrijving": "woonadres"
        },
        "datumVan": {
          "type": "Datum",
          "datum": "2005-08-11",
          "langFormaat": "11 augustus 2005"
        }
      },
      "immigratie": {
        "datumVestigingInNederland": {
          "type": "Datum",
          "datum": "1980-06-13",
          "langFormaat": "13 juni 1980"
        }
      },
      "gemeenteVanInschrijving": {
        "code": "0363",
        "omschrijving": "Amsterdam"
      },
      "datumInschrijvingInGemeente": {
        "type": "Datum",
        "datum": "1980-06-13",
        "langFormaat": "13 juni 1980"
      },
      "adressering": {
        "aanhef": "Geachte mevrouw Duck",
        "aanschrijfwijze": {
          "naam": "K. Duck"
        },
        "gebruikInLopendeTekst": "mevrouw Duck",
        "adresregel1": "Afrikanerplein 1",
        "adresregel2": "1091 PN  AMSTERDAM"
      },
      "kinderen": [],
      "ouders": [
        {
          "naam": {
            "voornamen": "Hortense",
            "geslachtsnaam": "Duck",
            "voorletters": "H."
          },
          "geboorte": {
            "datum": {
              "type": "JaarDatum",
              "jaar": 1946,
              "langFormaat": "1946"
            }
          },
          "ouderAanduiding": "1"
        },
        {
          "naam": {
            "voornamen": "Dagobert",
            "voorvoegsel": "",
            "geslachtsnaam": "Duck",
            "voorletters": "D."
          },
          "geboorte": {
            "datum": {
              "type": "JaarDatum",
              "jaar": 1945,
              "langFormaat": "1945"
            }
          },
          "ouderAanduiding": "2"
        }
      ],
      "partners": [
        {
          "naam": {
            "voornamen": "Donald",
            "geslachtsnaam": "Duck",
            "voorletters": "D."
          },
          "geboorte": {
            "datum": {
              "type": "Datum",
              "datum": "1974-07-07",
              "langFormaat": "7 juli 1974"
            }
          },
          "aangaanHuwelijkPartnerschap": {
            "datum": {
              "type": "Datum",
              "datum": "2005-08-11",
              "langFormaat": "11 augustus 2005"
            }
          },
          "ontbindingHuwelijkPartnerschap": {
            "datum": {
              "type": "Datum",
              "datum": "2005-12-18",
              "langFormaat": "18 december 2005"
            }
          }
        }
      ]
    },
    {
      "burgerservicenummer": "999996915",
      "geboorte": {
        "datum": {
          "type": "Datum",
          "datum": "1994-03-31",
          "langFormaat": "31 maart 1994"
        }
      },
      "geslacht": {
        "code": "M",
        "omschrijving": "man"
      },
      "leeftijd": 31,
      "naam": {
        "voornamen": "Kwik",
        "geslachtsnaam": "Duck",
        "voorletters": "K.",
        "volledigeNaam": "Kwik Duck"
      },
      "adressering": {
        "adresregel1": "Aalbersestraat 281",
        "adresregel2": "1067 MD  AMSTERDAM"
      }
    },
    {
      "burgerservicenummer": "999996952",
      "geboorte": {
        "datum": {
          "type": "Datum",
          "datum": "1998-03-09",
          "langFormaat": "9 maart 1998"
        }
      },
      "geslacht": {
        "code": "M",
        "omschrijving": "man"
      },
      "leeftijd": 27,
      "naam": {
        "voornamen": "Kwek",
        "geslachtsnaam": "Duck",
        "voorletters": "K.",
        "volledigeNaam": "Kwek Duck"
      },
      "adressering": {
        "adresregel1": "Aalbersestraat 281",
        "adresregel2": "1067 MD  AMSTERDAM"
      }
    },
    {
      "burgerservicenummer": "999996940",
      "geboorte": {
        "datum": {
          "type": "Datum",
          "datum": "1995-12-08",
          "langFormaat": "8 december 1995"
        }
      },
      "geslacht": {
        "code": "M",
        "omschrijving": "man"
      },
      "leeftijd": 29,
      "naam": {
        "voornamen": "Kwak",
        "geslachtsnaam": "Duck",
        "voorletters": "K.",
        "volledigeNaam": "Kwak Duck"
      },
      "adressering": {
        "adresregel1": "Aalbersestraat 281",
        "adresregel2": "1067 MD  AMSTERDAM"
      }
    },
    {
      "burgerservicenummer": "999996873",
      "geboorte": {
        "datum": {
          "type": "Datum",
          "datum": "1989-08-20",
          "langFormaat": "20 augustus 1989"
        }
      },
      "geslacht": {
        "code": "M",
        "omschrijving": "man"
      },
      "leeftijd": 36,
      "naam": {
        "voornamen": "Guus",
        "geslachtsnaam": "Gans",
        "voorletters": "G.",
        "volledigeNaam": "Guus Gans"
      },
      "adressering": {
        "adresregel1": "Aalbersestraat 281",
        "adresregel2": "1067 MD  AMSTERDAM"
      }
    },
    {
      "burgerservicenummer": "999996964",
      "geboorte": {
        "datum": {
          "type": "Datum",
          "datum": "2000-09-16",
          "langFormaat": "16 september 2000"
        }
      },
      "geslacht": {
        "code": "M",
        "omschrijving": "man"
      },
      "leeftijd": 25,
      "naam": {
        "voornamen": "Dagobert",
        "geslachtsnaam": "Duck",
        "voorletters": "D.",
        "volledigeNaam": "Dagobert Duck"
      },
      "adressering": {
        "adresregel1": "Aalbersestraat 281",
        "adresregel2": "1067 MD  AMSTERDAM"
      }
    },
    {
      "burgerservicenummer": "999996885",
      "geboorte": {
        "datum": {
          "type": "Datum",
          "datum": "1992-02-12",
          "langFormaat": "12 februari 1992"
        }
      },
      "geslacht": {
        "code": "M",
        "omschrijving": "man"
      },
      "leeftijd": 33,
      "naam": {
        "voornamen": "Willem",
        "geslachtsnaam": "Beentjes",
        "voorletters": "W.",
        "volledigeNaam": "Willem Beentjes"
      },
      "adressering": {
        "adresregel1": "Aalbersestraat 281",
        "adresregel2": "1067 MD  AMSTERDAM"
      }
    },
    {
      "burgerservicenummer": "999996939",
      "geboorte": {
        "datum": {
          "type": "Datum",
          "datum": "1988-07-24",
          "langFormaat": "24 juli 1988"
        }
      },
      "geslacht": {
        "code": "M",
        "omschrijving": "man"
      },
      "leeftijd": 37,
      "naam": {
        "voornamen": "Buurman",
        "geslachtsnaam": "Buis",
        "voorletters": "B.",
        "volledigeNaam": "Buurman Buis"
      },
      "adressering": {
        "adresregel1": "Aalbersestraat 281",
        "adresregel2": "1067 MD  AMSTERDAM"
      }
    },
    {
      "burgerservicenummer": "999996903",
      "geboorte": {
        "datum": {
          "type": "Datum",
          "datum": "1984-02-23",
          "langFormaat": "23 februari 1984"
        }
      },
      "geslacht": {
        "code": "M",
        "omschrijving": "man"
      },
      "leeftijd": 41,
      "naam": {
        "voornamen": "Juffrouw",
        "geslachtsnaam": "Ans",
        "voorletters": "J.",
        "volledigeNaam": "Juffrouw Ans"
      },
      "adressering": {
        "adresregel1": "Aalbersestraat 281",
        "adresregel2": "1067 MD  AMSTERDAM"
      }
    },
    {
      "burgerservicenummer": "999996897",
      "geboorte": {
        "datum": {
          "type": "Datum",
          "datum": "1987-06-05",
          "langFormaat": "5 juni 1987"
        }
      },
      "geslacht": {
        "code": "M",
        "omschrijving": "man"
      },
      "leeftijd": 38,
      "naam": {
        "voornamen": "Boris",
        "geslachtsnaam": "Boef",
        "voorletters": "B.",
        "volledigeNaam": "Boris Boef"
      },
      "adressering": {
        "adresregel1": "Aalbersestraat 281",
        "adresregel2": "1067 MD  AMSTERDAM"
      }
    },
    {
      "burgerservicenummer": "999996927",
      "geboorte": {
        "datum": {
          "type": "Datum",
          "datum": "1993-11-12",
          "langFormaat": "12 november 1993"
        }
      },
      "geslacht": {
        "code": "M",
        "omschrijving": "man"
      },
      "leeftijd": 31,
      "naam": {
        "voornamen": "Inspecteur",
        "geslachtsnaam": "Willighagen",
        "voorletters": "I.",
        "volledigeNaam": "Inspecteur Willighagen"
      },
      "adressering": {
        "adresregel1": "Aalbersestraat 281",
        "adresregel2": "1067 MD  AMSTERDAM"
      }
    },
    {
      "burgerservicenummer": "999996861",
      "geboorte": {
        "datum": {
          "type": "Datum",
          "datum": "1991-03-08",
          "langFormaat": "8 maart 1991"
        }
      },
      "geslacht": {
        "code": "M",
        "omschrijving": "man"
      },
      "leeftijd": 34,
      "naam": {
        "voornamen": "Professor",
        "geslachtsnaam": "Eppo Epsilon",
        "voorletters": "P.",
        "volledigeNaam": "Professor Eppo Epsilon"
      },
      "adressering": {
        "adresregel1": "Aalbersestraat 281",
        "adresregel2": "1067 MD  AMSTERDAM"
      }
    }

  ]
}

export default residentsData