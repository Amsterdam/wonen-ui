import ResidentsType from "../../components/Residents/ResidentsType"

const residentsData: ResidentsType = {
  "_links": {
      "self": {
          "href": "https://acc.api.secure.amsterdam.nl/gob_stuf/brp/ingeschrevenpersonen?burgerservicenummer=307741928&expand=kinderen,ouders,partners"
      }
  },
  "_embedded": {
      "ingeschrevenpersonen": [
          {
              "geslachtsaanduiding": "vrouw",
              "naam": {
                  "aanhef": "Geachte mevrouw Van Zon",
                  "aanschrijfwijze": "W. van Zon",
                  "aanduidingNaamgebruik": "eigen",
                  "voornamen": "Wilma",
                  "voorletters": "W.",
                  "geslachtsnaam": "Zon",
                  "voorvoegsel": "van",
                  "adellijkeTitelPredikaat": {
                      "code": "JV",
                      "omschrijving": "jonkvrouw"
                  }
              },
              "burgerservicenummer": "307741928",
              "geboorte": {
                  "datum": {
                      "jaar": 1970
                  }
              },
              "verblijfplaats": {
                  "functieAdres": "woonadres",
                  "adresseerbaarObjectIdentificatie": "0363010000805808",
                  "identificatiecodeNummeraanduiding": "0363200000264604",
                  "naamOpenbareRuimte": "Schakelstraat",
                  "huisnummer": "16",
                  "postcode": "1014AW",
                  "woonplaatsnaam": "Amsterdam",
                  "straatnaam": "Schakelstraat",
                  "datumInschrijvingInGemeente": {
                      "datum": "2022-03-05",
                      "jaar": 2013,
                      "maand": 11,
                      "dag": 5
                  },
                  "gemeenteVanInschrijving": {
                      "code": "0363",
                      "omschrijving": "Amsterdam"
                  },
                  "vanuitVertrokkenOnbekendWaarheen": false
              },
              "_embedded": {
                  "partners": [
                      {
                          "naam": {
                              "voornamen": "Gerrit",
                              "voorletters": "G.",
                              "geslachtsnaam": "Braber",
                              "voorvoegsel": "den",
                              "adellijkeTitelPredikaat": {
                                  "code": "R",
                                  "omschrijving": "ridder"
                              }
                          },
                          "burgerservicenummer": "307741837",
                          "aangaanHuwelijkPartnerschap": {
                              "datum": {
                                  "datum": "2000-01-01",
                                  "jaar": 2000,
                                  "maand": 1,
                                  "dag": 1
                              }
                          },
                          "_links": {
                              "ingeschrevenPersoon": {
                                  "href": "https://acc.api.secure.amsterdam.nl/gob_stuf/brp/ingeschrevenpersonen/307741837"
                              },
                              "self": {
                                  "href": "https://acc.api.secure.amsterdam.nl/gob_stuf/brp/ingeschrevenpersonen/307741928/partners/1"
                              }
                          }
                      }
                  ],
                  "ouders": [],
                  "kinderen": [
                      {
                          "naam": {
                              "voornamen": "Anja",
                              "voorletters": "A.",
                              "geslachtsnaam": "Zon",
                              "voorvoegsel": "van"
                          },
                          "_links": {
                              "self": {
                                  "href": "https://acc.api.secure.amsterdam.nl/gob_stuf/brp/ingeschrevenpersonen/307741928/kinderen/1"
                              }
                          }
                      }
                  ]
              },
              "_links": {
                  "verblijfplaatsNummeraanduiding": {
                      "href": "https://api.data.amsterdam.nl/gob/bag/nummeraanduidingen/0363200000264604/"
                  },
                  "self": {
                      "href": "https://acc.api.secure.amsterdam.nl/gob_stuf/brp/ingeschrevenpersonen/307741928"
                  },
                  "partners": [
                      {
                          "href": "https://acc.api.secure.amsterdam.nl/gob_stuf/brp/ingeschrevenpersonen/307741928/partners/1"
                      }
                  ],
                  "kinderen": [
                      {
                          "href": "https://acc.api.secure.amsterdam.nl/gob_stuf/brp/ingeschrevenpersonen/307741928/kinderen/1"
                      }
                  ]
              }
          },
          {
              "geslachtsaanduiding": "man",
              "naam": {
                  "aanhef": "Geachte meneer Van Zon",
                  "aanschrijfwijze": "B. van Zon",
                  "aanduidingNaamgebruik": "eigen",
                  "voornamen": "Bert",
                  "voorletters": "B.",
                  "geslachtsnaam": "Zon",
                  "voorvoegsel": "van",
                  "adellijkeTitelPredikaat": {
                      "code": "JV",
                      "omschrijving": "jonkheer"
                  }
              },
              "burgerservicenummer": "307741929",
              "geboorte": {
                  "datum": {
                      "datum": "1972-12-31",
                      "jaar": 1972,
                      "maand": 12,
                      "dag": 31
                  }
              },
              "overlijden":{
                "indicatieOverleden":true,
                "datum":{
                   "datum":"2021-09-06",
                   "jaar":2021,
                   "maand":9,
                   "dag":6
                }
             },
              "verblijfplaats": {
                  "functieAdres": "woonadres",
                  "adresseerbaarObjectIdentificatie": "0363010000805808",
                  "identificatiecodeNummeraanduiding": "0363200000264604",
                  "naamOpenbareRuimte": "Schakelstraat",
                  "huisnummer": "16",
                  "postcode": "1014AW",
                  "woonplaatsnaam": "Amsterdam",
                  "straatnaam": "Schakelstraat",
                  "datumAanvangAdreshouding": {
                    "gemeenteVanInschrijving": {
                        "code": "0363",
                        "omschrijving": "Amsterdam"
                    }
                },
                  "vanuitVertrokkenOnbekendWaarheen": false
              },
              "_embedded": {
                  "partners": [
                      {
                          "naam": {
                              "voornamen": "Gerrit",
                              "voorletters": "G.",
                              "geslachtsnaam": "Braber",
                              "voorvoegsel": "den",
                              "adellijkeTitelPredikaat": {
                                  "code": "R",
                                  "omschrijving": "ridder"
                              }
                          },
                          "burgerservicenummer": "307741837",
                          "aangaanHuwelijkPartnerschap": {
                              "datum": {
                                  "datum": "2000-01-01",
                                  "jaar": 2000,
                                  "maand": 1,
                                  "dag": 1
                              }
                          },
                          "_links": {
                              "ingeschrevenPersoon": {
                                  "href": "https://acc.api.secure.amsterdam.nl/gob_stuf/brp/ingeschrevenpersonen/307741837"
                              },
                              "self": {
                                  "href": "https://acc.api.secure.amsterdam.nl/gob_stuf/brp/ingeschrevenpersonen/307741928/partners/1"
                              }
                          }
                      }
                  ],
                  "ouders": [],
                  "kinderen": [
                      {
                          "naam": {
                              "voornamen": "Anja",
                              "voorletters": "A.",
                              "geslachtsnaam": "Zon",
                              "voorvoegsel": "van"
                          },
                          "_links": {
                              "self": {
                                  "href": "https://acc.api.secure.amsterdam.nl/gob_stuf/brp/ingeschrevenpersonen/307741928/kinderen/1"
                              }
                          }
                      }
                  ]
              },
              "_links": {
                  "verblijfplaatsNummeraanduiding": {
                      "href": "https://api.data.amsterdam.nl/gob/bag/nummeraanduidingen/0363200000264604/"
                  },
                  "self": {
                      "href": "https://acc.api.secure.amsterdam.nl/gob_stuf/brp/ingeschrevenpersonen/307741928"
                  },
                  "partners": [
                      {
                          "href": "https://acc.api.secure.amsterdam.nl/gob_stuf/brp/ingeschrevenpersonen/307741928/partners/1"
                      }
                  ],
                  "kinderen": [
                      {
                          "href": "https://acc.api.secure.amsterdam.nl/gob_stuf/brp/ingeschrevenpersonen/307741928/kinderen/1"
                      }
                  ]
              }
          },
          {
              "geslachtsaanduiding": "man",
              "naam": {
                  "aanhef": "Geachte mevrouw Pop",
                  "aanschrijfwijze": "D. Pop",
                  "aanduidingNaamgebruik": "eigen",
                  "voornamen": "Diana",
                  "voorletters": "D.",
                  "geslachtsnaam": "Pop",
                  "adellijkeTitelPredikaat": {
                      "code": "JV",
                      "omschrijving": "jonkheer"
                  }
              },
              "leeftijd": 46,
              "burgerservicenummer": "307741929",
              "geboorte": {
                  "datum": {
                      "datum": "1975-09-02",
                      "jaar": 1975,
                      "maand": 9,
                      "dag": 2
                  }
              },
              "verblijfplaats": {
                  "functieAdres": "woonadres",
                  "adresseerbaarObjectIdentificatie": "0363010000805808",
                  "identificatiecodeNummeraanduiding": "0363200000264604",
                  "naamOpenbareRuimte": "Schakelstraat",
                  "huisnummer": "16",
                  "postcode": "1014AW",
                  "woonplaatsnaam": "Amsterdam",
                  "straatnaam": "Schakelstraat",
                  "datumAanvangAdreshouding": {
                      "datum": "2013-11-05",
                      "jaar": 2013,
                      "maand": 11,
                      "dag": 5
                  },
                  "datumInschrijvingInGemeente": {
                      "datum": "2008-03-17",
                      "jaar": 2008,
                      "maand": 3,
                      "dag": 17
                  },
                  "gemeenteVanInschrijving": {
                      "code": "0363",
                      "omschrijving": "Amsterdam"
                  },
                  "vanuitVertrokkenOnbekendWaarheen": false
              },
              "_embedded": {
                  "partners": [
                      {
                          "naam": {
                              "voornamen": "Gerrit",
                              "voorletters": "G.",
                              "geslachtsnaam": "Braber",
                              "voorvoegsel": "den",
                              "adellijkeTitelPredikaat": {
                                  "code": "R",
                                  "omschrijving": "ridder"
                              }
                          },
                          "burgerservicenummer": "307741837",
                          "aangaanHuwelijkPartnerschap": {
                              "datum": {
                                  "datum": "2000-01-01",
                                  "jaar": 2000,
                                  "maand": 1,
                                  "dag": 1
                              }
                          },
                          "_links": {
                              "ingeschrevenPersoon": {
                                  "href": "https://acc.api.secure.amsterdam.nl/gob_stuf/brp/ingeschrevenpersonen/307741837"
                              },
                              "self": {
                                  "href": "https://acc.api.secure.amsterdam.nl/gob_stuf/brp/ingeschrevenpersonen/307741928/partners/1"
                              }
                          }
                      }
                  ],
                  "ouders": [],
                  "kinderen": [
                      {
                          "naam": {
                              "voornamen": "Anja",
                              "voorletters": "A.",
                              "geslachtsnaam": "Zon",
                              "voorvoegsel": "van"
                          },
                          "_links": {
                              "self": {
                                  "href": "https://acc.api.secure.amsterdam.nl/gob_stuf/brp/ingeschrevenpersonen/307741928/kinderen/1"
                              }
                          }
                      }
                  ]
              },
              "_links": {
                  "verblijfplaatsNummeraanduiding": {
                      "href": "https://api.data.amsterdam.nl/gob/bag/nummeraanduidingen/0363200000264604/"
                  },
                  "self": {
                      "href": "https://acc.api.secure.amsterdam.nl/gob_stuf/brp/ingeschrevenpersonen/307741928"
                  },
                  "partners": [
                      {
                          "href": "https://acc.api.secure.amsterdam.nl/gob_stuf/brp/ingeschrevenpersonen/307741928/partners/1"
                      }
                  ],
                  "kinderen": [
                      {
                          "href": "https://acc.api.secure.amsterdam.nl/gob_stuf/brp/ingeschrevenpersonen/307741928/kinderen/1"
                      }
                  ]
              }
          },
          {
            "geslachtsaanduiding": "man",
            "naam": {
                "voorletters": "J.",
                "geslachtsnaam": "Doe"
            },
            "leeftijd": 24,
            "burgerservicenummer": "307741929",
            "geboorte": {
                "datum": {
                    "datum": "1998-09-02",
                    "jaar": 1998,
                    "maand": 9,
                    "dag": 2
                }
            },
            "verblijfplaats": {
                "functieAdres": "woonadres",
                "adresseerbaarObjectIdentificatie": "0363010000805808",
                "identificatiecodeNummeraanduiding": "0363200000264604",
                "naamOpenbareRuimte": "Schakelstraat",
                "huisnummer": "16",
                "postcode": "1014AW",
                "woonplaatsnaam": "Amsterdam",
                "straatnaam": "Schakelstraat",
                "datumAanvangAdreshouding": {
                    "datum": "2013-11-05",
                    "jaar": 2013,
                    "maand": 11,
                    "dag": 5
                },
                "datumInschrijvingInGemeente": {
                    "datum": "2008-03-17",
                    "jaar": 2008,
                    "maand": 3,
                    "dag": 17
                },
                "gemeenteVanInschrijving": {
                    "code": "0363",
                    "omschrijving": "Amsterdam"
                },
                "vanuitVertrokkenOnbekendWaarheen": false
            },
            "_embedded": {
                "partners": [],
                "ouders": [
                    {
                        "naam": {
                            "geslachtsnaam": "."
                        }

                    },
                    {
                        "naam": {
                            "voorletters": "A.",
                            "geslachtsnaam": "Zon",
                            "voorvoegsel": "van"
                        }
                    }
                ],
                "kinderen": []
            }

        }


      ]
  }
}

export default residentsData
