export const mockAirportsResponse = {
  status: true,
  timestamp: 1691008938320,
  data: [
    {
      presentation: {
        title: 'New York',
        suggestionTitle: 'New York (Any)',
        subtitle: 'United States',
      },
      navigation: {
        entityId: '27537542',
        entityType: 'CITY',
        localizedName: 'New York',
        relevantFlightParams: {
          skyId: 'NYCA',
          entityId: '27537542',
          flightPlaceType: 'CITY',
          localizedName: 'New York',
        },
        relevantHotelParams: {
          entityId: '27537542',
          entityType: 'CITY',
          localizedName: 'New York',
        },
      },
    },
    {
      presentation: {
        title: 'New York Newark',
        suggestionTitle: 'New York Newark (EWR)',
        subtitle: 'United States',
      },
      navigation: {
        entityId: '95565059',
        entityType: 'AIRPORT',
        localizedName: 'New York Newark',
        relevantFlightParams: {
          skyId: 'EWR',
          entityId: '95565059',
          flightPlaceType: 'AIRPORT',
          localizedName: 'New York Newark',
        },
        relevantHotelParams: {
          entityId: '27537542',
          entityType: 'CITY',
          localizedName: 'New York',
        },
      },
    },
    {
      presentation: {
        title: 'New York John F. Kennedy',
        suggestionTitle: 'New York John F. Kennedy (JFK)',
        subtitle: 'United States',
      },
      navigation: {
        entityId: '95565058',
        entityType: 'AIRPORT',
        localizedName: 'New York John F. Kennedy',
        relevantFlightParams: {
          skyId: 'JFK',
          entityId: '95565058',
          flightPlaceType: 'AIRPORT',
          localizedName: 'New York John F. Kennedy',
        },
        relevantHotelParams: {
          entityId: '27537542',
          entityType: 'CITY',
          localizedName: 'New York',
        },
      },
    },
    {
      presentation: {
        title: 'New York LaGuardia',
        suggestionTitle: 'New York LaGuardia (LGA)',
        subtitle: 'United States',
      },
      navigation: {
        entityId: '95565057',
        entityType: 'AIRPORT',
        localizedName: 'New York LaGuardia',
        relevantFlightParams: {
          skyId: 'LGA',
          entityId: '95565057',
          flightPlaceType: 'AIRPORT',
          localizedName: 'New York LaGuardia',
        },
        relevantHotelParams: {
          entityId: '27537542',
          entityType: 'CITY',
          localizedName: 'New York',
        },
      },
    },
    {
      presentation: {
        title: 'Stewart International',
        suggestionTitle: 'Stewart International (SWF)',
        subtitle: 'United States',
      },
      navigation: {
        entityId: '95566280',
        entityType: 'AIRPORT',
        localizedName: 'Stewart International',
        relevantFlightParams: {
          skyId: 'SWF',
          entityId: '95566280',
          flightPlaceType: 'AIRPORT',
          localizedName: 'Stewart International',
        },
        relevantHotelParams: {
          entityId: '27537542',
          entityType: 'CITY',
          localizedName: 'New York',
        },
      },
    },
  ],
};

export const mockFlightsResponse = {
  status: true,
  timestamp: 1691008981566,
  sessionId: '25cee707-a873-4d0a-aeb2-4128a7ca0258',
  data: {
    context: {
      status: 'incomplete',
      totalResults: 10,
    },
    itineraries: [
      {
        id: '13542-2402201235--30598-0-12712-2402201550|12712-2402221810--30598-0-13542-2402230600',
        price: {
          raw: 419.18,
          formatted: '$420',
        },
        legs: [
          {
            id: '13542-2402201235--30598-0-12712-2402201550',
            origin: {
              id: 'LGW',
              name: 'London Gatwick',
              displayCode: 'LGW',
              city: 'London',
              isHighlighted: false,
            },
            destination: {
              id: 'JFK',
              name: 'New York John F. Kennedy',
              displayCode: 'JFK',
              city: 'New York',
              isHighlighted: false,
            },
            durationInMinutes: 495,
            stopCount: 0,
            isSmallestStops: false,
            departure: '2024-02-20T12:35:00',
            arrival: '2024-02-20T15:50:00',
            timeDeltaInDays: 0,
            carriers: {
              marketing: [
                {
                  id: -30598,
                  logoUrl: 'https://logos.skyscnr.com/images/airlines/favicon/I%29.png',
                  name: 'Norse Atlantic Airways (UK)',
                },
              ],
              operationType: 'fully_operated',
            },
            segments: [
              {
                id: '13542-12712-2402201235-2402201550--30598',
                origin: {
                  flightPlaceId: 'LGW',
                  displayCode: 'LGW',
                  parent: {
                    flightPlaceId: 'LOND',
                    displayCode: 'LON',
                    name: 'London',
                    type: 'City',
                  },
                  name: 'London Gatwick',
                  type: 'Airport',
                },
                destination: {
                  flightPlaceId: 'JFK',
                  displayCode: 'JFK',
                  parent: {
                    flightPlaceId: 'NYCA',
                    displayCode: 'NYC',
                    name: 'New York',
                    type: 'City',
                  },
                  name: 'New York John F. Kennedy',
                  type: 'Airport',
                },
                departure: '2024-02-20T12:35:00',
                arrival: '2024-02-20T15:50:00',
                durationInMinutes: 495,
                flightNumber: '701',
                marketingCarrier: {
                  id: -30598,
                  name: 'Norse Atlantic Airways (UK)',
                  alternateId: 'I)',
                  allianceId: 0,
                },
                operatingCarrier: {
                  id: -30598,
                  name: 'Norse Atlantic Airways (UK)',
                  alternateId: 'I)',
                  allianceId: 0,
                },
              },
            ],
          },
          {
            id: '12712-2402221810--30598-0-13542-2402230600',
            origin: {
              id: 'JFK',
              name: 'New York John F. Kennedy',
              displayCode: 'JFK',
              city: 'New York',
              isHighlighted: false,
            },
            destination: {
              id: 'LGW',
              name: 'London Gatwick',
              displayCode: 'LGW',
              city: 'London',
              isHighlighted: false,
            },
            durationInMinutes: 410,
            stopCount: 0,
            isSmallestStops: false,
            departure: '2024-02-22T18:10:00',
            arrival: '2024-02-23T06:00:00',
            timeDeltaInDays: 1,
            carriers: {
              marketing: [
                {
                  id: -30598,
                  logoUrl: 'https://logos.skyscnr.com/images/airlines/favicon/I%29.png',
                  name: 'Norse Atlantic Airways (UK)',
                },
              ],
              operationType: 'fully_operated',
            },
            segments: [
              {
                id: '12712-13542-2402221810-2402230600--30598',
                origin: {
                  flightPlaceId: 'JFK',
                  displayCode: 'JFK',
                  parent: {
                    flightPlaceId: 'NYCA',
                    displayCode: 'NYC',
                    name: 'New York',
                    type: 'City',
                  },
                  name: 'New York John F. Kennedy',
                  type: 'Airport',
                },
                destination: {
                  flightPlaceId: 'LGW',
                  displayCode: 'LGW',
                  parent: {
                    flightPlaceId: 'LOND',
                    displayCode: 'LON',
                    name: 'London',
                    type: 'City',
                  },
                  name: 'London Gatwick',
                  type: 'Airport',
                },
                departure: '2024-02-22T18:10:00',
                arrival: '2024-02-23T06:00:00',
                durationInMinutes: 410,
                flightNumber: '702',
                marketingCarrier: {
                  id: -30598,
                  name: 'Norse Atlantic Airways (UK)',
                  alternateId: 'I)',
                  allianceId: 0,
                },
                operatingCarrier: {
                  id: -30598,
                  name: 'Norse Atlantic Airways (UK)',
                  alternateId: 'I)',
                  allianceId: 0,
                },
              },
            ],
          },
        ],
        isSelfTransfer: false,
        isProtectedSelfTransfer: false,
        farePolicy: {
          isChangeAllowed: false,
          isPartiallyChangeable: false,
          isCancellationAllowed: false,
          isPartiallyRefundable: false,
        },
        eco: {
          ecoContenderDelta: 13.232994,
        },
        tags: ['cheapest', 'shortest'],
        isMashUp: false,
        hasFlexibleOptions: false,
        score: 0.998502,
      },
      {
        id: '13554-2402200750--32753-1-12712-2402201355|12712-2402222110--32753-1-13554-2402231130',
        price: {
          raw: 527.97,
          formatted: '$528',
        },
        legs: [
          {
            id: '13554-2402200750--32753-1-12712-2402201355',
            origin: {
              id: 'LHR',
              name: 'London Heathrow',
              displayCode: 'LHR',
              city: 'London',
              isHighlighted: false,
            },
            destination: {
              id: 'JFK',
              name: 'New York John F. Kennedy',
              displayCode: 'JFK',
              city: 'New York',
              isHighlighted: false,
            },
            durationInMinutes: 665,
            stopCount: 1,
            isSmallestStops: false,
            departure: '2024-02-20T07:50:00',
            arrival: '2024-02-20T13:55:00',
            timeDeltaInDays: 0,
            carriers: {
              marketing: [
                {
                  id: -32753,
                  logoUrl: 'https://logos.skyscnr.com/images/airlines/favicon/EI.png',
                  name: 'Aer Lingus',
                },
              ],
              operationType: 'fully_operated',
            },
            segments: [
              {
                id: '13554-11154-2402200750-2402200910--32753',
                origin: {
                  flightPlaceId: 'LHR',
                  displayCode: 'LHR',
                  parent: {
                    flightPlaceId: 'LOND',
                    displayCode: 'LON',
                    name: 'London',
                    type: 'City',
                  },
                  name: 'London Heathrow',
                  type: 'Airport',
                },
                destination: {
                  flightPlaceId: 'DUB',
                  displayCode: 'DUB',
                  parent: {
                    flightPlaceId: 'DUBL',
                    displayCode: 'DUB',
                    name: 'Dublin',
                    type: 'City',
                  },
                  name: 'Dublin',
                  type: 'Airport',
                },
                departure: '2024-02-20T07:50:00',
                arrival: '2024-02-20T09:10:00',
                durationInMinutes: 80,
                flightNumber: '151',
                marketingCarrier: {
                  id: -32753,
                  name: 'Aer Lingus',
                  alternateId: 'EI',
                  allianceId: 0,
                },
                operatingCarrier: {
                  id: -32753,
                  name: 'Aer Lingus',
                  alternateId: 'EI',
                  allianceId: 0,
                },
              },
              {
                id: '11154-12712-2402201110-2402201355--32753',
                origin: {
                  flightPlaceId: 'DUB',
                  displayCode: 'DUB',
                  parent: {
                    flightPlaceId: 'DUBL',
                    displayCode: 'DUB',
                    name: 'Dublin',
                    type: 'City',
                  },
                  name: 'Dublin',
                  type: 'Airport',
                },
                destination: {
                  flightPlaceId: 'JFK',
                  displayCode: 'JFK',
                  parent: {
                    flightPlaceId: 'NYCA',
                    displayCode: 'NYC',
                    name: 'New York',
                    type: 'City',
                  },
                  name: 'New York John F. Kennedy',
                  type: 'Airport',
                },
                departure: '2024-02-20T11:10:00',
                arrival: '2024-02-20T13:55:00',
                durationInMinutes: 465,
                flightNumber: '105',
                marketingCarrier: {
                  id: -32753,
                  name: 'Aer Lingus',
                  alternateId: 'EI',
                  allianceId: 0,
                },
                operatingCarrier: {
                  id: -32753,
                  name: 'Aer Lingus',
                  alternateId: 'EI',
                  allianceId: 0,
                },
              },
            ],
          },
          {
            id: '12712-2402222110--32753-1-13554-2402231130',
            origin: {
              id: 'JFK',
              name: 'New York John F. Kennedy',
              displayCode: 'JFK',
              city: 'New York',
              isHighlighted: false,
            },
            destination: {
              id: 'LHR',
              name: 'London Heathrow',
              displayCode: 'LHR',
              city: 'London',
              isHighlighted: false,
            },
            durationInMinutes: 560,
            stopCount: 1,
            isSmallestStops: false,
            departure: '2024-02-22T21:10:00',
            arrival: '2024-02-23T11:30:00',
            timeDeltaInDays: 1,
            carriers: {
              marketing: [
                {
                  id: -32753,
                  logoUrl: 'https://logos.skyscnr.com/images/airlines/favicon/EI.png',
                  name: 'Aer Lingus',
                },
              ],
              operationType: 'fully_operated',
            },
            segments: [
              {
                id: '12712-11154-2402222110-2402230850--32753',
                origin: {
                  flightPlaceId: 'JFK',
                  displayCode: 'JFK',
                  parent: {
                    flightPlaceId: 'NYCA',
                    displayCode: 'NYC',
                    name: 'New York',
                    type: 'City',
                  },
                  name: 'New York John F. Kennedy',
                  type: 'Airport',
                },
                destination: {
                  flightPlaceId: 'DUB',
                  displayCode: 'DUB',
                  parent: {
                    flightPlaceId: 'DUBL',
                    displayCode: 'DUB',
                    name: 'Dublin',
                    type: 'City',
                  },
                  name: 'Dublin',
                  type: 'Airport',
                },
                departure: '2024-02-22T21:10:00',
                arrival: '2024-02-23T08:50:00',
                durationInMinutes: 400,
                flightNumber: '106',
                marketingCarrier: {
                  id: -32753,
                  name: 'Aer Lingus',
                  alternateId: 'EI',
                  allianceId: 0,
                },
                operatingCarrier: {
                  id: -32753,
                  name: 'Aer Lingus',
                  alternateId: 'EI',
                  allianceId: 0,
                },
              },
              {
                id: '11154-13554-2402231010-2402231130--32753',
                origin: {
                  flightPlaceId: 'DUB',
                  displayCode: 'DUB',
                  parent: {
                    flightPlaceId: 'DUBL',
                    displayCode: 'DUB',
                    name: 'Dublin',
                    type: 'City',
                  },
                  name: 'Dublin',
                  type: 'Airport',
                },
                destination: {
                  flightPlaceId: 'LHR',
                  displayCode: 'LHR',
                  parent: {
                    flightPlaceId: 'LOND',
                    displayCode: 'LON',
                    name: 'London',
                    type: 'City',
                  },
                  name: 'London Heathrow',
                  type: 'Airport',
                },
                departure: '2024-02-23T10:10:00',
                arrival: '2024-02-23T11:30:00',
                durationInMinutes: 80,
                flightNumber: '158',
                marketingCarrier: {
                  id: -32753,
                  name: 'Aer Lingus',
                  alternateId: 'EI',
                  allianceId: 0,
                },
                operatingCarrier: {
                  id: -32753,
                  name: 'Aer Lingus',
                  alternateId: 'EI',
                  allianceId: 0,
                },
              },
            ],
          },
        ],
        isSelfTransfer: false,
        isProtectedSelfTransfer: false,
        farePolicy: {
          isChangeAllowed: false,
          isPartiallyChangeable: false,
          isCancellationAllowed: false,
          isPartiallyRefundable: false,
        },
        tags: ['second_cheapest', 'second_shortest'],
        isMashUp: false,
        hasFlexibleOptions: false,
        score: 0.58567,
      },
      {
        id: '13554-2402200750--32753-1-12712-2402201355|12712-2402221700--32753-1-13554-2402230805',
        price: {
          raw: 527.97,
          formatted: '$528',
        },
        legs: [
          {
            id: '13554-2402200750--32753-1-12712-2402201355',
            origin: {
              id: 'LHR',
              name: 'London Heathrow',
              displayCode: 'LHR',
              city: 'London',
              isHighlighted: false,
            },
            destination: {
              id: 'JFK',
              name: 'New York John F. Kennedy',
              displayCode: 'JFK',
              city: 'New York',
              isHighlighted: false,
            },
            durationInMinutes: 665,
            stopCount: 1,
            isSmallestStops: false,
            departure: '2024-02-20T07:50:00',
            arrival: '2024-02-20T13:55:00',
            timeDeltaInDays: 0,
            carriers: {
              marketing: [
                {
                  id: -32753,
                  logoUrl: 'https://logos.skyscnr.com/images/airlines/favicon/EI.png',
                  name: 'Aer Lingus',
                },
              ],
              operationType: 'fully_operated',
            },
            segments: [
              {
                id: '13554-11154-2402200750-2402200910--32753',
                origin: {
                  flightPlaceId: 'LHR',
                  displayCode: 'LHR',
                  parent: {
                    flightPlaceId: 'LOND',
                    displayCode: 'LON',
                    name: 'London',
                    type: 'City',
                  },
                  name: 'London Heathrow',
                  type: 'Airport',
                },
                destination: {
                  flightPlaceId: 'DUB',
                  displayCode: 'DUB',
                  parent: {
                    flightPlaceId: 'DUBL',
                    displayCode: 'DUB',
                    name: 'Dublin',
                    type: 'City',
                  },
                  name: 'Dublin',
                  type: 'Airport',
                },
                departure: '2024-02-20T07:50:00',
                arrival: '2024-02-20T09:10:00',
                durationInMinutes: 80,
                flightNumber: '151',
                marketingCarrier: {
                  id: -32753,
                  name: 'Aer Lingus',
                  alternateId: 'EI',
                  allianceId: 0,
                },
                operatingCarrier: {
                  id: -32753,
                  name: 'Aer Lingus',
                  alternateId: 'EI',
                  allianceId: 0,
                },
              },
              {
                id: '11154-12712-2402201110-2402201355--32753',
                origin: {
                  flightPlaceId: 'DUB',
                  displayCode: 'DUB',
                  parent: {
                    flightPlaceId: 'DUBL',
                    displayCode: 'DUB',
                    name: 'Dublin',
                    type: 'City',
                  },
                  name: 'Dublin',
                  type: 'Airport',
                },
                destination: {
                  flightPlaceId: 'JFK',
                  displayCode: 'JFK',
                  parent: {
                    flightPlaceId: 'NYCA',
                    displayCode: 'NYC',
                    name: 'New York',
                    type: 'City',
                  },
                  name: 'New York John F. Kennedy',
                  type: 'Airport',
                },
                departure: '2024-02-20T11:10:00',
                arrival: '2024-02-20T13:55:00',
                durationInMinutes: 465,
                flightNumber: '105',
                marketingCarrier: {
                  id: -32753,
                  name: 'Aer Lingus',
                  alternateId: 'EI',
                  allianceId: 0,
                },
                operatingCarrier: {
                  id: -32753,
                  name: 'Aer Lingus',
                  alternateId: 'EI',
                  allianceId: 0,
                },
              },
            ],
          },
          {
            id: '12712-2402221700--32753-1-13554-2402230805',
            origin: {
              id: 'JFK',
              name: 'New York John F. Kennedy',
              displayCode: 'JFK',
              city: 'New York',
              isHighlighted: false,
            },
            destination: {
              id: 'LHR',
              name: 'London Heathrow',
              displayCode: 'LHR',
              city: 'London',
              isHighlighted: false,
            },
            durationInMinutes: 605,
            stopCount: 1,
            isSmallestStops: false,
            departure: '2024-02-22T17:00:00',
            arrival: '2024-02-23T08:05:00',
            timeDeltaInDays: 1,
            carriers: {
              marketing: [
                {
                  id: -32753,
                  logoUrl: 'https://logos.skyscnr.com/images/airlines/favicon/EI.png',
                  name: 'Aer Lingus',
                },
              ],
              operationType: 'fully_operated',
            },
            segments: [
              {
                id: '12712-11154-2402221700-2402230425--32753',
                origin: {
                  flightPlaceId: 'JFK',
                  displayCode: 'JFK',
                  parent: {
                    flightPlaceId: 'NYCA',
                    displayCode: 'NYC',
                    name: 'New York',
                    type: 'City',
                  },
                  name: 'New York John F. Kennedy',
                  type: 'Airport',
                },
                destination: {
                  flightPlaceId: 'DUB',
                  displayCode: 'DUB',
                  parent: {
                    flightPlaceId: 'DUBL',
                    displayCode: 'DUB',
                    name: 'Dublin',
                    type: 'City',
                  },
                  name: 'Dublin',
                  type: 'Airport',
                },
                departure: '2024-02-22T17:00:00',
                arrival: '2024-02-23T04:25:00',
                durationInMinutes: 385,
                flightNumber: '104',
                marketingCarrier: {
                  id: -32753,
                  name: 'Aer Lingus',
                  alternateId: 'EI',
                  allianceId: 0,
                },
                operatingCarrier: {
                  id: -32753,
                  name: 'Aer Lingus',
                  alternateId: 'EI',
                  allianceId: 0,
                },
              },
              {
                id: '11154-13554-2402230640-2402230805--32753',
                origin: {
                  flightPlaceId: 'DUB',
                  displayCode: 'DUB',
                  parent: {
                    flightPlaceId: 'DUBL',
                    displayCode: 'DUB',
                    name: 'Dublin',
                    type: 'City',
                  },
                  name: 'Dublin',
                  type: 'Airport',
                },
                destination: {
                  flightPlaceId: 'LHR',
                  displayCode: 'LHR',
                  parent: {
                    flightPlaceId: 'LOND',
                    displayCode: 'LON',
                    name: 'London',
                    type: 'City',
                  },
                  name: 'London Heathrow',
                  type: 'Airport',
                },
                departure: '2024-02-23T06:40:00',
                arrival: '2024-02-23T08:05:00',
                durationInMinutes: 85,
                flightNumber: '152',
                marketingCarrier: {
                  id: -32753,
                  name: 'Aer Lingus',
                  alternateId: 'EI',
                  allianceId: 0,
                },
                operatingCarrier: {
                  id: -32753,
                  name: 'Aer Lingus',
                  alternateId: 'EI',
                  allianceId: 0,
                },
              },
            ],
          },
        ],
        isSelfTransfer: false,
        isProtectedSelfTransfer: false,
        farePolicy: {
          isChangeAllowed: false,
          isPartiallyChangeable: false,
          isCancellationAllowed: false,
          isPartiallyRefundable: false,
        },
        tags: ['second_cheapest'],
        isMashUp: false,
        hasFlexibleOptions: false,
        score: 0.564918,
      },
      {
        id: '13542-2402201300--32753-1-12712-2402201940|12712-2402221700--32753-1-13542-2402230755',
        price: {
          raw: 529.03,
          formatted: '$530',
        },
        legs: [
          {
            id: '13542-2402201300--32753-1-12712-2402201940',
            origin: {
              id: 'LGW',
              name: 'London Gatwick',
              displayCode: 'LGW',
              city: 'London',
              isHighlighted: false,
            },
            destination: {
              id: 'JFK',
              name: 'New York John F. Kennedy',
              displayCode: 'JFK',
              city: 'New York',
              isHighlighted: false,
            },
            durationInMinutes: 700,
            stopCount: 1,
            isSmallestStops: false,
            departure: '2024-02-20T13:00:00',
            arrival: '2024-02-20T19:40:00',
            timeDeltaInDays: 0,
            carriers: {
              marketing: [
                {
                  id: -32753,
                  logoUrl: 'https://logos.skyscnr.com/images/airlines/favicon/EI.png',
                  name: 'Aer Lingus',
                },
              ],
              operationType: 'fully_operated',
            },
            segments: [
              {
                id: '13542-11154-2402201300-2402201425--32753',
                origin: {
                  flightPlaceId: 'LGW',
                  displayCode: 'LGW',
                  parent: {
                    flightPlaceId: 'LOND',
                    displayCode: 'LON',
                    name: 'London',
                    type: 'City',
                  },
                  name: 'London Gatwick',
                  type: 'Airport',
                },
                destination: {
                  flightPlaceId: 'DUB',
                  displayCode: 'DUB',
                  parent: {
                    flightPlaceId: 'DUBL',
                    displayCode: 'DUB',
                    name: 'Dublin',
                    type: 'City',
                  },
                  name: 'Dublin',
                  type: 'Airport',
                },
                departure: '2024-02-20T13:00:00',
                arrival: '2024-02-20T14:25:00',
                durationInMinutes: 85,
                flightNumber: '237',
                marketingCarrier: {
                  id: -32753,
                  name: 'Aer Lingus',
                  alternateId: 'EI',
                  allianceId: 0,
                },
                operatingCarrier: {
                  id: -32753,
                  name: 'Aer Lingus',
                  alternateId: 'EI',
                  allianceId: 0,
                },
              },
              {
                id: '11154-12712-2402201640-2402201940--32753',
                origin: {
                  flightPlaceId: 'DUB',
                  displayCode: 'DUB',
                  parent: {
                    flightPlaceId: 'DUBL',
                    displayCode: 'DUB',
                    name: 'Dublin',
                    type: 'City',
                  },
                  name: 'Dublin',
                  type: 'Airport',
                },
                destination: {
                  flightPlaceId: 'JFK',
                  displayCode: 'JFK',
                  parent: {
                    flightPlaceId: 'NYCA',
                    displayCode: 'NYC',
                    name: 'New York',
                    type: 'City',
                  },
                  name: 'New York John F. Kennedy',
                  type: 'Airport',
                },
                departure: '2024-02-20T16:40:00',
                arrival: '2024-02-20T19:40:00',
                durationInMinutes: 480,
                flightNumber: '107',
                marketingCarrier: {
                  id: -32753,
                  name: 'Aer Lingus',
                  alternateId: 'EI',
                  allianceId: 0,
                },
                operatingCarrier: {
                  id: -32753,
                  name: 'Aer Lingus',
                  alternateId: 'EI',
                  allianceId: 0,
                },
              },
            ],
          },
          {
            id: '12712-2402221700--32753-1-13542-2402230755',
            origin: {
              id: 'JFK',
              name: 'New York John F. Kennedy',
              displayCode: 'JFK',
              city: 'New York',
              isHighlighted: false,
            },
            destination: {
              id: 'LGW',
              name: 'London Gatwick',
              displayCode: 'LGW',
              city: 'London',
              isHighlighted: false,
            },
            durationInMinutes: 595,
            stopCount: 1,
            isSmallestStops: false,
            departure: '2024-02-22T17:00:00',
            arrival: '2024-02-23T07:55:00',
            timeDeltaInDays: 1,
            carriers: {
              marketing: [
                {
                  id: -32753,
                  logoUrl: 'https://logos.skyscnr.com/images/airlines/favicon/EI.png',
                  name: 'Aer Lingus',
                },
              ],
              operationType: 'fully_operated',
            },
            segments: [
              {
                id: '12712-11154-2402221700-2402230425--32753',
                origin: {
                  flightPlaceId: 'JFK',
                  displayCode: 'JFK',
                  parent: {
                    flightPlaceId: 'NYCA',
                    displayCode: 'NYC',
                    name: 'New York',
                    type: 'City',
                  },
                  name: 'New York John F. Kennedy',
                  type: 'Airport',
                },
                destination: {
                  flightPlaceId: 'DUB',
                  displayCode: 'DUB',
                  parent: {
                    flightPlaceId: 'DUBL',
                    displayCode: 'DUB',
                    name: 'Dublin',
                    type: 'City',
                  },
                  name: 'Dublin',
                  type: 'Airport',
                },
                departure: '2024-02-22T17:00:00',
                arrival: '2024-02-23T04:25:00',
                durationInMinutes: 385,
                flightNumber: '104',
                marketingCarrier: {
                  id: -32753,
                  name: 'Aer Lingus',
                  alternateId: 'EI',
                  allianceId: 0,
                },
                operatingCarrier: {
                  id: -32753,
                  name: 'Aer Lingus',
                  alternateId: 'EI',
                  allianceId: 0,
                },
              },
              {
                id: '11154-13542-2402230630-2402230755--32753',
                origin: {
                  flightPlaceId: 'DUB',
                  displayCode: 'DUB',
                  parent: {
                    flightPlaceId: 'DUBL',
                    displayCode: 'DUB',
                    name: 'Dublin',
                    type: 'City',
                  },
                  name: 'Dublin',
                  type: 'Airport',
                },
                destination: {
                  flightPlaceId: 'LGW',
                  displayCode: 'LGW',
                  parent: {
                    flightPlaceId: 'LOND',
                    displayCode: 'LON',
                    name: 'London',
                    type: 'City',
                  },
                  name: 'London Gatwick',
                  type: 'Airport',
                },
                departure: '2024-02-23T06:30:00',
                arrival: '2024-02-23T07:55:00',
                durationInMinutes: 85,
                flightNumber: '230',
                marketingCarrier: {
                  id: -32753,
                  name: 'Aer Lingus',
                  alternateId: 'EI',
                  allianceId: 0,
                },
                operatingCarrier: {
                  id: -32753,
                  name: 'Aer Lingus',
                  alternateId: 'EI',
                  allianceId: 0,
                },
              },
            ],
          },
        ],
        isSelfTransfer: false,
        isProtectedSelfTransfer: false,
        farePolicy: {
          isChangeAllowed: false,
          isPartiallyChangeable: false,
          isCancellationAllowed: false,
          isPartiallyRefundable: false,
        },
        tags: ['third_cheapest'],
        isMashUp: false,
        hasFlexibleOptions: false,
        score: 0.552902,
      },
      {
        id: '13554-2402201215--32753-1-12712-2402201940|12712-2402222110--32753-1-13554-2402231130',
        price: {
          raw: 527.97,
          formatted: '$528',
        },
        legs: [
          {
            id: '13554-2402201215--32753-1-12712-2402201940',
            origin: {
              id: 'LHR',
              name: 'London Heathrow',
              displayCode: 'LHR',
              city: 'London',
              isHighlighted: false,
            },
            destination: {
              id: 'JFK',
              name: 'New York John F. Kennedy',
              displayCode: 'JFK',
              city: 'New York',
              isHighlighted: false,
            },
            durationInMinutes: 745,
            stopCount: 1,
            isSmallestStops: false,
            departure: '2024-02-20T12:15:00',
            arrival: '2024-02-20T19:40:00',
            timeDeltaInDays: 0,
            carriers: {
              marketing: [
                {
                  id: -32753,
                  logoUrl: 'https://logos.skyscnr.com/images/airlines/favicon/EI.png',
                  name: 'Aer Lingus',
                },
              ],
              operationType: 'fully_operated',
            },
            segments: [
              {
                id: '13554-11154-2402201215-2402201335--32753',
                origin: {
                  flightPlaceId: 'LHR',
                  displayCode: 'LHR',
                  parent: {
                    flightPlaceId: 'LOND',
                    displayCode: 'LON',
                    name: 'London',
                    type: 'City',
                  },
                  name: 'London Heathrow',
                  type: 'Airport',
                },
                destination: {
                  flightPlaceId: 'DUB',
                  displayCode: 'DUB',
                  parent: {
                    flightPlaceId: 'DUBL',
                    displayCode: 'DUB',
                    name: 'Dublin',
                    type: 'City',
                  },
                  name: 'Dublin',
                  type: 'Airport',
                },
                departure: '2024-02-20T12:15:00',
                arrival: '2024-02-20T13:35:00',
                durationInMinutes: 80,
                flightNumber: '159',
                marketingCarrier: {
                  id: -32753,
                  name: 'Aer Lingus',
                  alternateId: 'EI',
                  allianceId: 0,
                },
                operatingCarrier: {
                  id: -32753,
                  name: 'Aer Lingus',
                  alternateId: 'EI',
                  allianceId: 0,
                },
              },
              {
                id: '11154-12712-2402201640-2402201940--32753',
                origin: {
                  flightPlaceId: 'DUB',
                  displayCode: 'DUB',
                  parent: {
                    flightPlaceId: 'DUBL',
                    displayCode: 'DUB',
                    name: 'Dublin',
                    type: 'City',
                  },
                  name: 'Dublin',
                  type: 'Airport',
                },
                destination: {
                  flightPlaceId: 'JFK',
                  displayCode: 'JFK',
                  parent: {
                    flightPlaceId: 'NYCA',
                    displayCode: 'NYC',
                    name: 'New York',
                    type: 'City',
                  },
                  name: 'New York John F. Kennedy',
                  type: 'Airport',
                },
                departure: '2024-02-20T16:40:00',
                arrival: '2024-02-20T19:40:00',
                durationInMinutes: 480,
                flightNumber: '107',
                marketingCarrier: {
                  id: -32753,
                  name: 'Aer Lingus',
                  alternateId: 'EI',
                  allianceId: 0,
                },
                operatingCarrier: {
                  id: -32753,
                  name: 'Aer Lingus',
                  alternateId: 'EI',
                  allianceId: 0,
                },
              },
            ],
          },
          {
            id: '12712-2402222110--32753-1-13554-2402231130',
            origin: {
              id: 'JFK',
              name: 'New York John F. Kennedy',
              displayCode: 'JFK',
              city: 'New York',
              isHighlighted: false,
            },
            destination: {
              id: 'LHR',
              name: 'London Heathrow',
              displayCode: 'LHR',
              city: 'London',
              isHighlighted: false,
            },
            durationInMinutes: 560,
            stopCount: 1,
            isSmallestStops: false,
            departure: '2024-02-22T21:10:00',
            arrival: '2024-02-23T11:30:00',
            timeDeltaInDays: 1,
            carriers: {
              marketing: [
                {
                  id: -32753,
                  logoUrl: 'https://logos.skyscnr.com/images/airlines/favicon/EI.png',
                  name: 'Aer Lingus',
                },
              ],
              operationType: 'fully_operated',
            },
            segments: [
              {
                id: '12712-11154-2402222110-2402230850--32753',
                origin: {
                  flightPlaceId: 'JFK',
                  displayCode: 'JFK',
                  parent: {
                    flightPlaceId: 'NYCA',
                    displayCode: 'NYC',
                    name: 'New York',
                    type: 'City',
                  },
                  name: 'New York John F. Kennedy',
                  type: 'Airport',
                },
                destination: {
                  flightPlaceId: 'DUB',
                  displayCode: 'DUB',
                  parent: {
                    flightPlaceId: 'DUBL',
                    displayCode: 'DUB',
                    name: 'Dublin',
                    type: 'City',
                  },
                  name: 'Dublin',
                  type: 'Airport',
                },
                departure: '2024-02-22T21:10:00',
                arrival: '2024-02-23T08:50:00',
                durationInMinutes: 400,
                flightNumber: '106',
                marketingCarrier: {
                  id: -32753,
                  name: 'Aer Lingus',
                  alternateId: 'EI',
                  allianceId: 0,
                },
                operatingCarrier: {
                  id: -32753,
                  name: 'Aer Lingus',
                  alternateId: 'EI',
                  allianceId: 0,
                },
              },
              {
                id: '11154-13554-2402231010-2402231130--32753',
                origin: {
                  flightPlaceId: 'DUB',
                  displayCode: 'DUB',
                  parent: {
                    flightPlaceId: 'DUBL',
                    displayCode: 'DUB',
                    name: 'Dublin',
                    type: 'City',
                  },
                  name: 'Dublin',
                  type: 'Airport',
                },
                destination: {
                  flightPlaceId: 'LHR',
                  displayCode: 'LHR',
                  parent: {
                    flightPlaceId: 'LOND',
                    displayCode: 'LON',
                    name: 'London',
                    type: 'City',
                  },
                  name: 'London Heathrow',
                  type: 'Airport',
                },
                departure: '2024-02-23T10:10:00',
                arrival: '2024-02-23T11:30:00',
                durationInMinutes: 80,
                flightNumber: '158',
                marketingCarrier: {
                  id: -32753,
                  name: 'Aer Lingus',
                  alternateId: 'EI',
                  allianceId: 0,
                },
                operatingCarrier: {
                  id: -32753,
                  name: 'Aer Lingus',
                  alternateId: 'EI',
                  allianceId: 0,
                },
              },
            ],
          },
        ],
        isSelfTransfer: false,
        isProtectedSelfTransfer: false,
        farePolicy: {
          isChangeAllowed: false,
          isPartiallyChangeable: false,
          isCancellationAllowed: false,
          isPartiallyRefundable: false,
        },
        tags: ['second_cheapest'],
        isMashUp: false,
        hasFlexibleOptions: false,
        score: 0.549767,
      },
      {
        id: '13542-2402201300--32753-1-12712-2402201940|12712-2402222110--32753-1-13542-2402231220',
        price: {
          raw: 529.03,
          formatted: '$530',
        },
        legs: [
          {
            id: '13542-2402201300--32753-1-12712-2402201940',
            origin: {
              id: 'LGW',
              name: 'London Gatwick',
              displayCode: 'LGW',
              city: 'London',
              isHighlighted: false,
            },
            destination: {
              id: 'JFK',
              name: 'New York John F. Kennedy',
              displayCode: 'JFK',
              city: 'New York',
              isHighlighted: false,
            },
            durationInMinutes: 700,
            stopCount: 1,
            isSmallestStops: false,
            departure: '2024-02-20T13:00:00',
            arrival: '2024-02-20T19:40:00',
            timeDeltaInDays: 0,
            carriers: {
              marketing: [
                {
                  id: -32753,
                  logoUrl: 'https://logos.skyscnr.com/images/airlines/favicon/EI.png',
                  name: 'Aer Lingus',
                },
              ],
              operationType: 'fully_operated',
            },
            segments: [
              {
                id: '13542-11154-2402201300-2402201425--32753',
                origin: {
                  flightPlaceId: 'LGW',
                  displayCode: 'LGW',
                  parent: {
                    flightPlaceId: 'LOND',
                    displayCode: 'LON',
                    name: 'London',
                    type: 'City',
                  },
                  name: 'London Gatwick',
                  type: 'Airport',
                },
                destination: {
                  flightPlaceId: 'DUB',
                  displayCode: 'DUB',
                  parent: {
                    flightPlaceId: 'DUBL',
                    displayCode: 'DUB',
                    name: 'Dublin',
                    type: 'City',
                  },
                  name: 'Dublin',
                  type: 'Airport',
                },
                departure: '2024-02-20T13:00:00',
                arrival: '2024-02-20T14:25:00',
                durationInMinutes: 85,
                flightNumber: '237',
                marketingCarrier: {
                  id: -32753,
                  name: 'Aer Lingus',
                  alternateId: 'EI',
                  allianceId: 0,
                },
                operatingCarrier: {
                  id: -32753,
                  name: 'Aer Lingus',
                  alternateId: 'EI',
                  allianceId: 0,
                },
              },
              {
                id: '11154-12712-2402201640-2402201940--32753',
                origin: {
                  flightPlaceId: 'DUB',
                  displayCode: 'DUB',
                  parent: {
                    flightPlaceId: 'DUBL',
                    displayCode: 'DUB',
                    name: 'Dublin',
                    type: 'City',
                  },
                  name: 'Dublin',
                  type: 'Airport',
                },
                destination: {
                  flightPlaceId: 'JFK',
                  displayCode: 'JFK',
                  parent: {
                    flightPlaceId: 'NYCA',
                    displayCode: 'NYC',
                    name: 'New York',
                    type: 'City',
                  },
                  name: 'New York John F. Kennedy',
                  type: 'Airport',
                },
                departure: '2024-02-20T16:40:00',
                arrival: '2024-02-20T19:40:00',
                durationInMinutes: 480,
                flightNumber: '107',
                marketingCarrier: {
                  id: -32753,
                  name: 'Aer Lingus',
                  alternateId: 'EI',
                  allianceId: 0,
                },
                operatingCarrier: {
                  id: -32753,
                  name: 'Aer Lingus',
                  alternateId: 'EI',
                  allianceId: 0,
                },
              },
            ],
          },
          {
            id: '12712-2402222110--32753-1-13542-2402231220',
            origin: {
              id: 'JFK',
              name: 'New York John F. Kennedy',
              displayCode: 'JFK',
              city: 'New York',
              isHighlighted: false,
            },
            destination: {
              id: 'LGW',
              name: 'London Gatwick',
              displayCode: 'LGW',
              city: 'London',
              isHighlighted: false,
            },
            durationInMinutes: 610,
            stopCount: 1,
            isSmallestStops: false,
            departure: '2024-02-22T21:10:00',
            arrival: '2024-02-23T12:20:00',
            timeDeltaInDays: 1,
            carriers: {
              marketing: [
                {
                  id: -32753,
                  logoUrl: 'https://logos.skyscnr.com/images/airlines/favicon/EI.png',
                  name: 'Aer Lingus',
                },
              ],
              operationType: 'fully_operated',
            },
            segments: [
              {
                id: '12712-11154-2402222110-2402230850--32753',
                origin: {
                  flightPlaceId: 'JFK',
                  displayCode: 'JFK',
                  parent: {
                    flightPlaceId: 'NYCA',
                    displayCode: 'NYC',
                    name: 'New York',
                    type: 'City',
                  },
                  name: 'New York John F. Kennedy',
                  type: 'Airport',
                },
                destination: {
                  flightPlaceId: 'DUB',
                  displayCode: 'DUB',
                  parent: {
                    flightPlaceId: 'DUBL',
                    displayCode: 'DUB',
                    name: 'Dublin',
                    type: 'City',
                  },
                  name: 'Dublin',
                  type: 'Airport',
                },
                departure: '2024-02-22T21:10:00',
                arrival: '2024-02-23T08:50:00',
                durationInMinutes: 400,
                flightNumber: '106',
                marketingCarrier: {
                  id: -32753,
                  name: 'Aer Lingus',
                  alternateId: 'EI',
                  allianceId: 0,
                },
                operatingCarrier: {
                  id: -32753,
                  name: 'Aer Lingus',
                  alternateId: 'EI',
                  allianceId: 0,
                },
              },
              {
                id: '11154-13542-2402231055-2402231220--32753',
                origin: {
                  flightPlaceId: 'DUB',
                  displayCode: 'DUB',
                  parent: {
                    flightPlaceId: 'DUBL',
                    displayCode: 'DUB',
                    name: 'Dublin',
                    type: 'City',
                  },
                  name: 'Dublin',
                  type: 'Airport',
                },
                destination: {
                  flightPlaceId: 'LGW',
                  displayCode: 'LGW',
                  parent: {
                    flightPlaceId: 'LOND',
                    displayCode: 'LON',
                    name: 'London',
                    type: 'City',
                  },
                  name: 'London Gatwick',
                  type: 'Airport',
                },
                departure: '2024-02-23T10:55:00',
                arrival: '2024-02-23T12:20:00',
                durationInMinutes: 85,
                flightNumber: '236',
                marketingCarrier: {
                  id: -32753,
                  name: 'Aer Lingus',
                  alternateId: 'EI',
                  allianceId: 0,
                },
                operatingCarrier: {
                  id: -32753,
                  name: 'Aer Lingus',
                  alternateId: 'EI',
                  allianceId: 0,
                },
              },
            ],
          },
        ],
        isSelfTransfer: false,
        isProtectedSelfTransfer: false,
        farePolicy: {
          isChangeAllowed: false,
          isPartiallyChangeable: false,
          isCancellationAllowed: false,
          isPartiallyRefundable: false,
        },
        tags: ['third_cheapest'],
        isMashUp: false,
        hasFlexibleOptions: false,
        score: 0.546571,
      },
      {
        id: '13554-2402201215--32753-1-12712-2402201940|12712-2402221700--32753-1-13554-2402230805',
        price: {
          raw: 527.97,
          formatted: '$528',
        },
        legs: [
          {
            id: '13554-2402201215--32753-1-12712-2402201940',
            origin: {
              id: 'LHR',
              name: 'London Heathrow',
              displayCode: 'LHR',
              city: 'London',
              isHighlighted: false,
            },
            destination: {
              id: 'JFK',
              name: 'New York John F. Kennedy',
              displayCode: 'JFK',
              city: 'New York',
              isHighlighted: false,
            },
            durationInMinutes: 745,
            stopCount: 1,
            isSmallestStops: false,
            departure: '2024-02-20T12:15:00',
            arrival: '2024-02-20T19:40:00',
            timeDeltaInDays: 0,
            carriers: {
              marketing: [
                {
                  id: -32753,
                  logoUrl: 'https://logos.skyscnr.com/images/airlines/favicon/EI.png',
                  name: 'Aer Lingus',
                },
              ],
              operationType: 'fully_operated',
            },
            segments: [
              {
                id: '13554-11154-2402201215-2402201335--32753',
                origin: {
                  flightPlaceId: 'LHR',
                  displayCode: 'LHR',
                  parent: {
                    flightPlaceId: 'LOND',
                    displayCode: 'LON',
                    name: 'London',
                    type: 'City',
                  },
                  name: 'London Heathrow',
                  type: 'Airport',
                },
                destination: {
                  flightPlaceId: 'DUB',
                  displayCode: 'DUB',
                  parent: {
                    flightPlaceId: 'DUBL',
                    displayCode: 'DUB',
                    name: 'Dublin',
                    type: 'City',
                  },
                  name: 'Dublin',
                  type: 'Airport',
                },
                departure: '2024-02-20T12:15:00',
                arrival: '2024-02-20T13:35:00',
                durationInMinutes: 80,
                flightNumber: '159',
                marketingCarrier: {
                  id: -32753,
                  name: 'Aer Lingus',
                  alternateId: 'EI',
                  allianceId: 0,
                },
                operatingCarrier: {
                  id: -32753,
                  name: 'Aer Lingus',
                  alternateId: 'EI',
                  allianceId: 0,
                },
              },
              {
                id: '11154-12712-2402201640-2402201940--32753',
                origin: {
                  flightPlaceId: 'DUB',
                  displayCode: 'DUB',
                  parent: {
                    flightPlaceId: 'DUBL',
                    displayCode: 'DUB',
                    name: 'Dublin',
                    type: 'City',
                  },
                  name: 'Dublin',
                  type: 'Airport',
                },
                destination: {
                  flightPlaceId: 'JFK',
                  displayCode: 'JFK',
                  parent: {
                    flightPlaceId: 'NYCA',
                    displayCode: 'NYC',
                    name: 'New York',
                    type: 'City',
                  },
                  name: 'New York John F. Kennedy',
                  type: 'Airport',
                },
                departure: '2024-02-20T16:40:00',
                arrival: '2024-02-20T19:40:00',
                durationInMinutes: 480,
                flightNumber: '107',
                marketingCarrier: {
                  id: -32753,
                  name: 'Aer Lingus',
                  alternateId: 'EI',
                  allianceId: 0,
                },
                operatingCarrier: {
                  id: -32753,
                  name: 'Aer Lingus',
                  alternateId: 'EI',
                  allianceId: 0,
                },
              },
            ],
          },
          {
            id: '12712-2402221700--32753-1-13554-2402230805',
            origin: {
              id: 'JFK',
              name: 'New York John F. Kennedy',
              displayCode: 'JFK',
              city: 'New York',
              isHighlighted: false,
            },
            destination: {
              id: 'LHR',
              name: 'London Heathrow',
              displayCode: 'LHR',
              city: 'London',
              isHighlighted: false,
            },
            durationInMinutes: 605,
            stopCount: 1,
            isSmallestStops: false,
            departure: '2024-02-22T17:00:00',
            arrival: '2024-02-23T08:05:00',
            timeDeltaInDays: 1,
            carriers: {
              marketing: [
                {
                  id: -32753,
                  logoUrl: 'https://logos.skyscnr.com/images/airlines/favicon/EI.png',
                  name: 'Aer Lingus',
                },
              ],
              operationType: 'fully_operated',
            },
            segments: [
              {
                id: '12712-11154-2402221700-2402230425--32753',
                origin: {
                  flightPlaceId: 'JFK',
                  displayCode: 'JFK',
                  parent: {
                    flightPlaceId: 'NYCA',
                    displayCode: 'NYC',
                    name: 'New York',
                    type: 'City',
                  },
                  name: 'New York John F. Kennedy',
                  type: 'Airport',
                },
                destination: {
                  flightPlaceId: 'DUB',
                  displayCode: 'DUB',
                  parent: {
                    flightPlaceId: 'DUBL',
                    displayCode: 'DUB',
                    name: 'Dublin',
                    type: 'City',
                  },
                  name: 'Dublin',
                  type: 'Airport',
                },
                departure: '2024-02-22T17:00:00',
                arrival: '2024-02-23T04:25:00',
                durationInMinutes: 385,
                flightNumber: '104',
                marketingCarrier: {
                  id: -32753,
                  name: 'Aer Lingus',
                  alternateId: 'EI',
                  allianceId: 0,
                },
                operatingCarrier: {
                  id: -32753,
                  name: 'Aer Lingus',
                  alternateId: 'EI',
                  allianceId: 0,
                },
              },
              {
                id: '11154-13554-2402230640-2402230805--32753',
                origin: {
                  flightPlaceId: 'DUB',
                  displayCode: 'DUB',
                  parent: {
                    flightPlaceId: 'DUBL',
                    displayCode: 'DUB',
                    name: 'Dublin',
                    type: 'City',
                  },
                  name: 'Dublin',
                  type: 'Airport',
                },
                destination: {
                  flightPlaceId: 'LHR',
                  displayCode: 'LHR',
                  parent: {
                    flightPlaceId: 'LOND',
                    displayCode: 'LON',
                    name: 'London',
                    type: 'City',
                  },
                  name: 'London Heathrow',
                  type: 'Airport',
                },
                departure: '2024-02-23T06:40:00',
                arrival: '2024-02-23T08:05:00',
                durationInMinutes: 85,
                flightNumber: '152',
                marketingCarrier: {
                  id: -32753,
                  name: 'Aer Lingus',
                  alternateId: 'EI',
                  allianceId: 0,
                },
                operatingCarrier: {
                  id: -32753,
                  name: 'Aer Lingus',
                  alternateId: 'EI',
                  allianceId: 0,
                },
              },
            ],
          },
        ],
        isSelfTransfer: false,
        isProtectedSelfTransfer: false,
        farePolicy: {
          isChangeAllowed: false,
          isPartiallyChangeable: false,
          isCancellationAllowed: false,
          isPartiallyRefundable: false,
        },
        tags: ['second_cheapest'],
        isMashUp: false,
        hasFlexibleOptions: false,
        score: 0.531441,
      },
      {
        id: '13554-2402200950--32753-1-11442-2402201605|11442-2402221735--32753-1-13554-2402230805',
        price: {
          raw: 578.71,
          formatted: '$579',
        },
        legs: [
          {
            id: '13554-2402200950--32753-1-11442-2402201605',
            origin: {
              id: 'LHR',
              name: 'London Heathrow',
              displayCode: 'LHR',
              city: 'London',
              isHighlighted: false,
            },
            destination: {
              id: 'EWR',
              name: 'New York Newark',
              displayCode: 'EWR',
              city: 'New York',
              isHighlighted: false,
            },
            durationInMinutes: 675,
            stopCount: 1,
            isSmallestStops: false,
            departure: '2024-02-20T09:50:00',
            arrival: '2024-02-20T16:05:00',
            timeDeltaInDays: 0,
            carriers: {
              marketing: [
                {
                  id: -32753,
                  logoUrl: 'https://logos.skyscnr.com/images/airlines/favicon/EI.png',
                  name: 'Aer Lingus',
                },
              ],
              operationType: 'fully_operated',
            },
            segments: [
              {
                id: '13554-11154-2402200950-2402201115--32753',
                origin: {
                  flightPlaceId: 'LHR',
                  displayCode: 'LHR',
                  parent: {
                    flightPlaceId: 'LOND',
                    displayCode: 'LON',
                    name: 'London',
                    type: 'City',
                  },
                  name: 'London Heathrow',
                  type: 'Airport',
                },
                destination: {
                  flightPlaceId: 'DUB',
                  displayCode: 'DUB',
                  parent: {
                    flightPlaceId: 'DUBL',
                    displayCode: 'DUB',
                    name: 'Dublin',
                    type: 'City',
                  },
                  name: 'Dublin',
                  type: 'Airport',
                },
                departure: '2024-02-20T09:50:00',
                arrival: '2024-02-20T11:15:00',
                durationInMinutes: 85,
                flightNumber: '155',
                marketingCarrier: {
                  id: -32753,
                  name: 'Aer Lingus',
                  alternateId: 'EI',
                  allianceId: 0,
                },
                operatingCarrier: {
                  id: -32753,
                  name: 'Aer Lingus',
                  alternateId: 'EI',
                  allianceId: 0,
                },
              },
              {
                id: '11154-11442-2402201305-2402201605--32753',
                origin: {
                  flightPlaceId: 'DUB',
                  displayCode: 'DUB',
                  parent: {
                    flightPlaceId: 'DUBL',
                    displayCode: 'DUB',
                    name: 'Dublin',
                    type: 'City',
                  },
                  name: 'Dublin',
                  type: 'Airport',
                },
                destination: {
                  flightPlaceId: 'EWR',
                  displayCode: 'EWR',
                  parent: {
                    flightPlaceId: 'NYCA',
                    displayCode: 'NYC',
                    name: 'New York',
                    type: 'City',
                  },
                  name: 'New York Newark',
                  type: 'Airport',
                },
                departure: '2024-02-20T13:05:00',
                arrival: '2024-02-20T16:05:00',
                durationInMinutes: 480,
                flightNumber: '101',
                marketingCarrier: {
                  id: -32753,
                  name: 'Aer Lingus',
                  alternateId: 'EI',
                  allianceId: 0,
                },
                operatingCarrier: {
                  id: -32753,
                  name: 'Aer Lingus',
                  alternateId: 'EI',
                  allianceId: 0,
                },
              },
            ],
          },
          {
            id: '11442-2402221735--32753-1-13554-2402230805',
            origin: {
              id: 'EWR',
              name: 'New York Newark',
              displayCode: 'EWR',
              city: 'New York',
              isHighlighted: false,
            },
            destination: {
              id: 'LHR',
              name: 'London Heathrow',
              displayCode: 'LHR',
              city: 'London',
              isHighlighted: false,
            },
            durationInMinutes: 570,
            stopCount: 1,
            isSmallestStops: false,
            departure: '2024-02-22T17:35:00',
            arrival: '2024-02-23T08:05:00',
            timeDeltaInDays: 1,
            carriers: {
              marketing: [
                {
                  id: -32753,
                  logoUrl: 'https://logos.skyscnr.com/images/airlines/favicon/EI.png',
                  name: 'Aer Lingus',
                },
              ],
              operationType: 'fully_operated',
            },
            segments: [
              {
                id: '11442-11154-2402221735-2402230510--32753',
                origin: {
                  flightPlaceId: 'EWR',
                  displayCode: 'EWR',
                  parent: {
                    flightPlaceId: 'NYCA',
                    displayCode: 'NYC',
                    name: 'New York',
                    type: 'City',
                  },
                  name: 'New York Newark',
                  type: 'Airport',
                },
                destination: {
                  flightPlaceId: 'DUB',
                  displayCode: 'DUB',
                  parent: {
                    flightPlaceId: 'DUBL',
                    displayCode: 'DUB',
                    name: 'Dublin',
                    type: 'City',
                  },
                  name: 'Dublin',
                  type: 'Airport',
                },
                departure: '2024-02-22T17:35:00',
                arrival: '2024-02-23T05:10:00',
                durationInMinutes: 395,
                flightNumber: '100',
                marketingCarrier: {
                  id: -32753,
                  name: 'Aer Lingus',
                  alternateId: 'EI',
                  allianceId: 0,
                },
                operatingCarrier: {
                  id: -32753,
                  name: 'Aer Lingus',
                  alternateId: 'EI',
                  allianceId: 0,
                },
              },
              {
                id: '11154-13554-2402230640-2402230805--32753',
                origin: {
                  flightPlaceId: 'DUB',
                  displayCode: 'DUB',
                  parent: {
                    flightPlaceId: 'DUBL',
                    displayCode: 'DUB',
                    name: 'Dublin',
                    type: 'City',
                  },
                  name: 'Dublin',
                  type: 'Airport',
                },
                destination: {
                  flightPlaceId: 'LHR',
                  displayCode: 'LHR',
                  parent: {
                    flightPlaceId: 'LOND',
                    displayCode: 'LON',
                    name: 'London',
                    type: 'City',
                  },
                  name: 'London Heathrow',
                  type: 'Airport',
                },
                departure: '2024-02-23T06:40:00',
                arrival: '2024-02-23T08:05:00',
                durationInMinutes: 85,
                flightNumber: '152',
                marketingCarrier: {
                  id: -32753,
                  name: 'Aer Lingus',
                  alternateId: 'EI',
                  allianceId: 0,
                },
                operatingCarrier: {
                  id: -32753,
                  name: 'Aer Lingus',
                  alternateId: 'EI',
                  allianceId: 0,
                },
              },
            ],
          },
        ],
        isSelfTransfer: false,
        isProtectedSelfTransfer: false,
        farePolicy: {
          isChangeAllowed: false,
          isPartiallyChangeable: false,
          isCancellationAllowed: false,
          isPartiallyRefundable: false,
        },
        tags: ['third_shortest'],
        isMashUp: false,
        hasFlexibleOptions: false,
        score: 0.525736,
      },
      {
        id: '13542-2402201105--32753-1-12712-2402201940|12712-2402221700--32753-1-13542-2402230755',
        price: {
          raw: 529.03,
          formatted: '$530',
        },
        legs: [
          {
            id: '13542-2402201105--32753-1-12712-2402201940',
            origin: {
              id: 'LGW',
              name: 'London Gatwick',
              displayCode: 'LGW',
              city: 'London',
              isHighlighted: false,
            },
            destination: {
              id: 'JFK',
              name: 'New York John F. Kennedy',
              displayCode: 'JFK',
              city: 'New York',
              isHighlighted: false,
            },
            durationInMinutes: 815,
            stopCount: 1,
            isSmallestStops: false,
            departure: '2024-02-20T11:05:00',
            arrival: '2024-02-20T19:40:00',
            timeDeltaInDays: 0,
            carriers: {
              marketing: [
                {
                  id: -32753,
                  logoUrl: 'https://logos.skyscnr.com/images/airlines/favicon/EI.png',
                  name: 'Aer Lingus',
                },
              ],
              operationType: 'fully_operated',
            },
            segments: [
              {
                id: '13542-11154-2402201105-2402201230--32753',
                origin: {
                  flightPlaceId: 'LGW',
                  displayCode: 'LGW',
                  parent: {
                    flightPlaceId: 'LOND',
                    displayCode: 'LON',
                    name: 'London',
                    type: 'City',
                  },
                  name: 'London Gatwick',
                  type: 'Airport',
                },
                destination: {
                  flightPlaceId: 'DUB',
                  displayCode: 'DUB',
                  parent: {
                    flightPlaceId: 'DUBL',
                    displayCode: 'DUB',
                    name: 'Dublin',
                    type: 'City',
                  },
                  name: 'Dublin',
                  type: 'Airport',
                },
                departure: '2024-02-20T11:05:00',
                arrival: '2024-02-20T12:30:00',
                durationInMinutes: 85,
                flightNumber: '233',
                marketingCarrier: {
                  id: -32753,
                  name: 'Aer Lingus',
                  alternateId: 'EI',
                  allianceId: 0,
                },
                operatingCarrier: {
                  id: -32753,
                  name: 'Aer Lingus',
                  alternateId: 'EI',
                  allianceId: 0,
                },
              },
              {
                id: '11154-12712-2402201640-2402201940--32753',
                origin: {
                  flightPlaceId: 'DUB',
                  displayCode: 'DUB',
                  parent: {
                    flightPlaceId: 'DUBL',
                    displayCode: 'DUB',
                    name: 'Dublin',
                    type: 'City',
                  },
                  name: 'Dublin',
                  type: 'Airport',
                },
                destination: {
                  flightPlaceId: 'JFK',
                  displayCode: 'JFK',
                  parent: {
                    flightPlaceId: 'NYCA',
                    displayCode: 'NYC',
                    name: 'New York',
                    type: 'City',
                  },
                  name: 'New York John F. Kennedy',
                  type: 'Airport',
                },
                departure: '2024-02-20T16:40:00',
                arrival: '2024-02-20T19:40:00',
                durationInMinutes: 480,
                flightNumber: '107',
                marketingCarrier: {
                  id: -32753,
                  name: 'Aer Lingus',
                  alternateId: 'EI',
                  allianceId: 0,
                },
                operatingCarrier: {
                  id: -32753,
                  name: 'Aer Lingus',
                  alternateId: 'EI',
                  allianceId: 0,
                },
              },
            ],
          },
          {
            id: '12712-2402221700--32753-1-13542-2402230755',
            origin: {
              id: 'JFK',
              name: 'New York John F. Kennedy',
              displayCode: 'JFK',
              city: 'New York',
              isHighlighted: false,
            },
            destination: {
              id: 'LGW',
              name: 'London Gatwick',
              displayCode: 'LGW',
              city: 'London',
              isHighlighted: false,
            },
            durationInMinutes: 595,
            stopCount: 1,
            isSmallestStops: false,
            departure: '2024-02-22T17:00:00',
            arrival: '2024-02-23T07:55:00',
            timeDeltaInDays: 1,
            carriers: {
              marketing: [
                {
                  id: -32753,
                  logoUrl: 'https://logos.skyscnr.com/images/airlines/favicon/EI.png',
                  name: 'Aer Lingus',
                },
              ],
              operationType: 'fully_operated',
            },
            segments: [
              {
                id: '12712-11154-2402221700-2402230425--32753',
                origin: {
                  flightPlaceId: 'JFK',
                  displayCode: 'JFK',
                  parent: {
                    flightPlaceId: 'NYCA',
                    displayCode: 'NYC',
                    name: 'New York',
                    type: 'City',
                  },
                  name: 'New York John F. Kennedy',
                  type: 'Airport',
                },
                destination: {
                  flightPlaceId: 'DUB',
                  displayCode: 'DUB',
                  parent: {
                    flightPlaceId: 'DUBL',
                    displayCode: 'DUB',
                    name: 'Dublin',
                    type: 'City',
                  },
                  name: 'Dublin',
                  type: 'Airport',
                },
                departure: '2024-02-22T17:00:00',
                arrival: '2024-02-23T04:25:00',
                durationInMinutes: 385,
                flightNumber: '104',
                marketingCarrier: {
                  id: -32753,
                  name: 'Aer Lingus',
                  alternateId: 'EI',
                  allianceId: 0,
                },
                operatingCarrier: {
                  id: -32753,
                  name: 'Aer Lingus',
                  alternateId: 'EI',
                  allianceId: 0,
                },
              },
              {
                id: '11154-13542-2402230630-2402230755--32753',
                origin: {
                  flightPlaceId: 'DUB',
                  displayCode: 'DUB',
                  parent: {
                    flightPlaceId: 'DUBL',
                    displayCode: 'DUB',
                    name: 'Dublin',
                    type: 'City',
                  },
                  name: 'Dublin',
                  type: 'Airport',
                },
                destination: {
                  flightPlaceId: 'LGW',
                  displayCode: 'LGW',
                  parent: {
                    flightPlaceId: 'LOND',
                    displayCode: 'LON',
                    name: 'London',
                    type: 'City',
                  },
                  name: 'London Gatwick',
                  type: 'Airport',
                },
                departure: '2024-02-23T06:30:00',
                arrival: '2024-02-23T07:55:00',
                durationInMinutes: 85,
                flightNumber: '230',
                marketingCarrier: {
                  id: -32753,
                  name: 'Aer Lingus',
                  alternateId: 'EI',
                  allianceId: 0,
                },
                operatingCarrier: {
                  id: -32753,
                  name: 'Aer Lingus',
                  alternateId: 'EI',
                  allianceId: 0,
                },
              },
            ],
          },
        ],
        isSelfTransfer: false,
        isProtectedSelfTransfer: false,
        farePolicy: {
          isChangeAllowed: false,
          isPartiallyChangeable: false,
          isCancellationAllowed: false,
          isPartiallyRefundable: false,
        },
        tags: ['third_cheapest'],
        isMashUp: false,
        hasFlexibleOptions: false,
        score: 0.507807,
      },
      {
        id: '13542-2402201105--32753-1-12712-2402201940|12712-2402222110--32753-1-13542-2402231220',
        price: {
          raw: 529.03,
          formatted: '$530',
        },
        legs: [
          {
            id: '13542-2402201105--32753-1-12712-2402201940',
            origin: {
              id: 'LGW',
              name: 'London Gatwick',
              displayCode: 'LGW',
              city: 'London',
              isHighlighted: false,
            },
            destination: {
              id: 'JFK',
              name: 'New York John F. Kennedy',
              displayCode: 'JFK',
              city: 'New York',
              isHighlighted: false,
            },
            durationInMinutes: 815,
            stopCount: 1,
            isSmallestStops: false,
            departure: '2024-02-20T11:05:00',
            arrival: '2024-02-20T19:40:00',
            timeDeltaInDays: 0,
            carriers: {
              marketing: [
                {
                  id: -32753,
                  logoUrl: 'https://logos.skyscnr.com/images/airlines/favicon/EI.png',
                  name: 'Aer Lingus',
                },
              ],
              operationType: 'fully_operated',
            },
            segments: [
              {
                id: '13542-11154-2402201105-2402201230--32753',
                origin: {
                  flightPlaceId: 'LGW',
                  displayCode: 'LGW',
                  parent: {
                    flightPlaceId: 'LOND',
                    displayCode: 'LON',
                    name: 'London',
                    type: 'City',
                  },
                  name: 'London Gatwick',
                  type: 'Airport',
                },
                destination: {
                  flightPlaceId: 'DUB',
                  displayCode: 'DUB',
                  parent: {
                    flightPlaceId: 'DUBL',
                    displayCode: 'DUB',
                    name: 'Dublin',
                    type: 'City',
                  },
                  name: 'Dublin',
                  type: 'Airport',
                },
                departure: '2024-02-20T11:05:00',
                arrival: '2024-02-20T12:30:00',
                durationInMinutes: 85,
                flightNumber: '233',
                marketingCarrier: {
                  id: -32753,
                  name: 'Aer Lingus',
                  alternateId: 'EI',
                  allianceId: 0,
                },
                operatingCarrier: {
                  id: -32753,
                  name: 'Aer Lingus',
                  alternateId: 'EI',
                  allianceId: 0,
                },
              },
              {
                id: '11154-12712-2402201640-2402201940--32753',
                origin: {
                  flightPlaceId: 'DUB',
                  displayCode: 'DUB',
                  parent: {
                    flightPlaceId: 'DUBL',
                    displayCode: 'DUB',
                    name: 'Dublin',
                    type: 'City',
                  },
                  name: 'Dublin',
                  type: 'Airport',
                },
                destination: {
                  flightPlaceId: 'JFK',
                  displayCode: 'JFK',
                  parent: {
                    flightPlaceId: 'NYCA',
                    displayCode: 'NYC',
                    name: 'New York',
                    type: 'City',
                  },
                  name: 'New York John F. Kennedy',
                  type: 'Airport',
                },
                departure: '2024-02-20T16:40:00',
                arrival: '2024-02-20T19:40:00',
                durationInMinutes: 480,
                flightNumber: '107',
                marketingCarrier: {
                  id: -32753,
                  name: 'Aer Lingus',
                  alternateId: 'EI',
                  allianceId: 0,
                },
                operatingCarrier: {
                  id: -32753,
                  name: 'Aer Lingus',
                  alternateId: 'EI',
                  allianceId: 0,
                },
              },
            ],
          },
          {
            id: '12712-2402222110--32753-1-13542-2402231220',
            origin: {
              id: 'JFK',
              name: 'New York John F. Kennedy',
              displayCode: 'JFK',
              city: 'New York',
              isHighlighted: false,
            },
            destination: {
              id: 'LGW',
              name: 'London Gatwick',
              displayCode: 'LGW',
              city: 'London',
              isHighlighted: false,
            },
            durationInMinutes: 610,
            stopCount: 1,
            isSmallestStops: false,
            departure: '2024-02-22T21:10:00',
            arrival: '2024-02-23T12:20:00',
            timeDeltaInDays: 1,
            carriers: {
              marketing: [
                {
                  id: -32753,
                  logoUrl: 'https://logos.skyscnr.com/images/airlines/favicon/EI.png',
                  name: 'Aer Lingus',
                },
              ],
              operationType: 'fully_operated',
            },
            segments: [
              {
                id: '12712-11154-2402222110-2402230850--32753',
                origin: {
                  flightPlaceId: 'JFK',
                  displayCode: 'JFK',
                  parent: {
                    flightPlaceId: 'NYCA',
                    displayCode: 'NYC',
                    name: 'New York',
                    type: 'City',
                  },
                  name: 'New York John F. Kennedy',
                  type: 'Airport',
                },
                destination: {
                  flightPlaceId: 'DUB',
                  displayCode: 'DUB',
                  parent: {
                    flightPlaceId: 'DUBL',
                    displayCode: 'DUB',
                    name: 'Dublin',
                    type: 'City',
                  },
                  name: 'Dublin',
                  type: 'Airport',
                },
                departure: '2024-02-22T21:10:00',
                arrival: '2024-02-23T08:50:00',
                durationInMinutes: 400,
                flightNumber: '106',
                marketingCarrier: {
                  id: -32753,
                  name: 'Aer Lingus',
                  alternateId: 'EI',
                  allianceId: 0,
                },
                operatingCarrier: {
                  id: -32753,
                  name: 'Aer Lingus',
                  alternateId: 'EI',
                  allianceId: 0,
                },
              },
              {
                id: '11154-13542-2402231055-2402231220--32753',
                origin: {
                  flightPlaceId: 'DUB',
                  displayCode: 'DUB',
                  parent: {
                    flightPlaceId: 'DUBL',
                    displayCode: 'DUB',
                    name: 'Dublin',
                    type: 'City',
                  },
                  name: 'Dublin',
                  type: 'Airport',
                },
                destination: {
                  flightPlaceId: 'LGW',
                  displayCode: 'LGW',
                  parent: {
                    flightPlaceId: 'LOND',
                    displayCode: 'LON',
                    name: 'London',
                    type: 'City',
                  },
                  name: 'London Gatwick',
                  type: 'Airport',
                },
                departure: '2024-02-23T10:55:00',
                arrival: '2024-02-23T12:20:00',
                durationInMinutes: 85,
                flightNumber: '236',
                marketingCarrier: {
                  id: -32753,
                  name: 'Aer Lingus',
                  alternateId: 'EI',
                  allianceId: 0,
                },
                operatingCarrier: {
                  id: -32753,
                  name: 'Aer Lingus',
                  alternateId: 'EI',
                  allianceId: 0,
                },
              },
            ],
          },
        ],
        isSelfTransfer: false,
        isProtectedSelfTransfer: false,
        farePolicy: {
          isChangeAllowed: false,
          isPartiallyChangeable: false,
          isCancellationAllowed: false,
          isPartiallyRefundable: false,
        },
        tags: ['third_cheapest'],
        isMashUp: false,
        hasFlexibleOptions: false,
        score: 0.502462,
      },
    ],
    messages: [],
    filterStats: {
      duration: {
        min: 495,
        max: 815,
      },
      airports: [
        {
          city: 'New York',
          airports: [
            {
              id: 'JFK',
              name: 'New York John F. Kennedy',
            },
            {
              id: 'EWR',
              name: 'New York Newark',
            },
          ],
        },
        {
          city: 'London',
          airports: [
            {
              id: 'LGW',
              name: 'London Gatwick',
            },
            {
              id: 'LHR',
              name: 'London Heathrow',
            },
          ],
        },
      ],
      carriers: [
        {
          id: -32753,
          logoUrl: 'https://logos.skyscnr.com/images/airlines/favicon/EI.png',
          name: 'Aer Lingus',
        },
        {
          id: -30598,
          logoUrl: 'https://logos.skyscnr.com/images/airlines/favicon/I%29.png',
          name: 'Norse Atlantic Airways (UK)',
        },
      ],
      stopPrices: {
        direct: {
          isPresent: true,
          formattedPrice: '$420',
        },
        one: {
          isPresent: true,
          formattedPrice: '$528',
        },
        twoOrMore: {
          isPresent: false,
        },
      },
    },
  },
};

export const mockFlightsEverywehre = {
    "status": true,
    "timestamp": 1756130238829,
    "data": {
        "context": {
            "status": "complete",
            "sessionId": "UNFOCUSED_SESSION_ID",
            "totalResults": 93
        },
        "results": [
            {
                "id": "location-29475437",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475437",
                        "skyCode": "US",
                        "name": "United States",
                        "type": "Nation",
                        "continent": {
                            "code": "NA",
                            "name": "North America"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$52",
                            "rawPrice": 52,
                            "direct": true
                        },
                        "direct": {
                            "price": "$52",
                            "rawPrice": 52,
                            "direct": true
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/12b715db2fe88a58ee57ae99b985b32a/GettyImages-153734070.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": true
                    }
                }
            },
            {
                "id": "location-29475418",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475418",
                        "skyCode": "SV",
                        "name": "El Salvador",
                        "type": "Nation",
                        "continent": {
                            "code": "NA",
                            "name": "North America"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$176",
                            "rawPrice": 176,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/8f89ef4e9cc75ac6f15d0970098fa649/GettyImages-144336523.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475436",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475436",
                        "skyCode": "CA",
                        "name": "Canada",
                        "type": "Nation",
                        "continent": {
                            "code": "NA",
                            "name": "North America"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$179",
                            "rawPrice": 179,
                            "direct": true
                        },
                        "direct": {
                            "price": "$179",
                            "rawPrice": 179,
                            "direct": true
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/2ae02fb73aaad6e6bd4d3d3bb7d8278a/GettyImages-162384798.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": true
                    }
                }
            },
            {
                "id": "location-29475422",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475422",
                        "skyCode": "CR",
                        "name": "Costa Rica",
                        "type": "Nation",
                        "continent": {
                            "code": "NA",
                            "name": "North America"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$181",
                            "rawPrice": 181,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/5d83a541a6e2c21eec264c04e5752429/GettyImages-492356834.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475419",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475419",
                        "skyCode": "GT",
                        "name": "Guatemala",
                        "type": "Nation",
                        "continent": {
                            "code": "NA",
                            "name": "North America"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$185",
                            "rawPrice": 185,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/78e2f795245db5609c6ab722cdfbd590/GettyImages-87544422.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475085",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475085",
                        "skyCode": "PR",
                        "name": "Puerto Rico",
                        "type": "Nation",
                        "continent": {
                            "code": "NA",
                            "name": "North America"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$187",
                            "rawPrice": 187,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/m/60b0a9f4bc25015a/original/Garita-Old-San-Juan.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475420",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475420",
                        "skyCode": "HN",
                        "name": "Honduras",
                        "type": "Nation",
                        "continent": {
                            "code": "NA",
                            "name": "North America"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$199",
                            "rawPrice": 199,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/589e44bf55904eb9692752aa698e9b6c/GettyImages-178620766.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475425",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475425",
                        "skyCode": "CO",
                        "name": "Colombia",
                        "type": "Nation",
                        "continent": {
                            "code": "SA",
                            "name": "South America"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$204",
                            "rawPrice": 204,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/91a3af3b70ff1445ab546f2fc37c68e2/gettyimages-530753093.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475407",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475407",
                        "skyCode": "DO",
                        "name": "Dominican Republic",
                        "type": "Nation",
                        "continent": {
                            "code": "NA",
                            "name": "North America"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$226",
                            "rawPrice": 226,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/b708282e1d0c81119e3f768b01c85ded/GettyImages-160514104.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475432",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475432",
                        "skyCode": "MX",
                        "name": "Mexico",
                        "type": "Nation",
                        "continent": {
                            "code": "NA",
                            "name": "North America"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$231",
                            "rawPrice": 231,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/1ad5fff55243bd5f76c33e3577c2540d/GettyImages-483527336.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475406",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475406",
                        "skyCode": "JM",
                        "name": "Jamaica",
                        "type": "Nation",
                        "continent": {
                            "code": "NA",
                            "name": "North America"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$246",
                            "rawPrice": 246,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/4de13258df3952fbc9732e4e0ca8e7e0/GettyImages-453506289.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475369",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475369",
                        "skyCode": "ES",
                        "name": "Spain",
                        "type": "Nation",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$321",
                            "rawPrice": 321,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/e0241c97c2b33b71e9c278bc89bb17ed/GettyImages-178640523.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475417",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475417",
                        "skyCode": "BZ",
                        "name": "Belize",
                        "type": "Nation",
                        "continent": {
                            "code": "NA",
                            "name": "North America"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$323",
                            "rawPrice": 323,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/6f82094987ce9a86525fbd6cf801cc1b/GettyImages-531022945.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475383",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475383",
                        "skyCode": "IE",
                        "name": "Ireland",
                        "type": "Nation",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$329",
                            "rawPrice": 329,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/34f61dd7f8deb4059c12b0b8de9ee002/GettyImages-472229890.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475424",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475424",
                        "skyCode": "EC",
                        "name": "Ecuador",
                        "type": "Nation",
                        "continent": {
                            "code": "SA",
                            "name": "South America"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$340",
                            "rawPrice": 340,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/40ff84f873842165cf5a45c72b3a1af4/GettyImages-481764406.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475393",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475393",
                        "skyCode": "IT",
                        "name": "Italy",
                        "type": "Nation",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$342",
                            "rawPrice": 342,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/f348d79cfdf70286dc759d24618a23c3/GettyImages-182281845.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475260",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475260",
                        "skyCode": "PL",
                        "name": "Poland",
                        "type": "Nation",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$346",
                            "rawPrice": 346,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/16636d692d5905702ad23e3d35c65e48/GettyImages-178367416.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475413",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475413",
                        "skyCode": "AG",
                        "name": "Antigua and Barbuda",
                        "type": "Nation",
                        "continent": {
                            "code": "NA",
                            "name": "North America"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$348",
                            "rawPrice": 348,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/b1f09713ef5e43af0b8c6f28da17e92b/GettyImages-505966002.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475259",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475259",
                        "skyCode": "AL",
                        "name": "Albania",
                        "type": "Nation",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$357",
                            "rawPrice": 357,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/d4acb8b30e8cfcb36db339ce50fd23ae/GettyImages-485428808.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475399",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475399",
                        "skyCode": "BB",
                        "name": "Barbados",
                        "type": "Nation",
                        "continent": {
                            "code": "NA",
                            "name": "North America"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$360",
                            "rawPrice": 360,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/eb312a8601575c7f20fa951231322733/GettyImages-145929052.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475370",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475370",
                        "skyCode": "MA",
                        "name": "Morocco",
                        "type": "Nation",
                        "continent": {
                            "code": "AF",
                            "name": "Africa"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$362",
                            "rawPrice": 362,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/0c1b0ffcf42566b18ce3934ccf32c415/GettyImages-136909106.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475426",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475426",
                        "skyCode": "PA",
                        "name": "Panama",
                        "type": "Nation",
                        "continent": {
                            "code": "NA",
                            "name": "North America"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$363",
                            "rawPrice": 363,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/63b5c37ddbdac862758ec6fce796e5b8/GettyImages-178710877.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475431",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475431",
                        "skyCode": "PE",
                        "name": "Peru",
                        "type": "Nation",
                        "continent": {
                            "code": "SA",
                            "name": "South America"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$367",
                            "rawPrice": 367,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/2394fc52fc62f304fa3ddfcd87cf2395/GettyImages-116596842.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475414",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475414",
                        "skyCode": "LC",
                        "name": "Saint Lucia",
                        "type": "Nation",
                        "continent": {
                            "code": "NA",
                            "name": "North America"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$371",
                            "rawPrice": 371,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/57fb5936996a04f32652858a583c278b/GettyImages-140406176.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475374",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475374",
                        "skyCode": "IS",
                        "name": "Iceland",
                        "type": "Nation",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$373",
                            "rawPrice": 373,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/b6c9eab07efe88e1533e7cbbbb13fa89/GettyImages-529240739.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475257",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475257",
                        "skyCode": "HU",
                        "name": "Hungary",
                        "type": "Nation",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$384",
                            "rawPrice": 384,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/1326f876f67413db59cc34a466945260/GettyImages-493113190.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475373",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475373",
                        "skyCode": "DK",
                        "name": "Denmark",
                        "type": "Nation",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$387",
                            "rawPrice": 387,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/d22c8f93938b699739ba5e9d682019af/GettyImages-474603829.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475349",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475349",
                        "skyCode": "PT",
                        "name": "Portugal",
                        "type": "Nation",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$395",
                            "rawPrice": 395,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/e48dd065c801bef1b761c506a5a2fde9/GettyImages-467824014.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475385",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475385",
                        "skyCode": "FR",
                        "name": "France",
                        "type": "Nation",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$395",
                            "rawPrice": 395,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/c88da2b091534f7baf8536b3959ce83a/GettyImages-495057957.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475401",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475401",
                        "skyCode": "GY",
                        "name": "Guyana",
                        "type": "Nation",
                        "continent": {
                            "code": "SA",
                            "name": "South America"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$395",
                            "rawPrice": 395,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/6479e5cf34fcf9a9aa130df1b534eb19/GettyImages-120992245.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475390",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475390",
                        "skyCode": "NO",
                        "name": "Norway",
                        "type": "Nation",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$398",
                            "rawPrice": 398,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/8ab21fe9e704f373e61689e635e63c60/GettyImages-498373538.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475102",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475102",
                        "skyCode": "HR",
                        "name": "Croatia",
                        "type": "Nation",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$424",
                            "rawPrice": 424,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/bdea895ca2746a767312cb9ff9ab9186/GettyImages-502736148.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475405",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475405",
                        "skyCode": "BR",
                        "name": "Brazil",
                        "type": "Nation",
                        "continent": {
                            "code": "SA",
                            "name": "South America"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$437",
                            "rawPrice": 437,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/69907554dc47aab9e74edf172e01fb44/GettyImages-516984709.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475229",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475229",
                        "skyCode": "GR",
                        "name": "Greece",
                        "type": "Nation",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$448",
                            "rawPrice": 448,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/26babb582bc1d7572fed1877d7f81fa6/GettyImages-181391203.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475253",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475253",
                        "skyCode": "FI",
                        "name": "Finland",
                        "type": "Nation",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$450",
                            "rawPrice": 450,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/2c2524173e84f10b29e9853e9f427b7f/GettyImages-516314097.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475375",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475375",
                        "skyCode": "UK",
                        "name": "United Kingdom",
                        "type": "Nation",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$455",
                            "rawPrice": 455,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/1017dd4cef7a773021e1b335b3410d30/GettyImages-487828389.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475381",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475381",
                        "skyCode": "DE",
                        "name": "Germany",
                        "type": "Nation",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$468",
                            "rawPrice": 468,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/917a21468839141dd406892864a9f52e/GettyImages-490614171.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475378",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475378",
                        "skyCode": "NL",
                        "name": "Netherlands",
                        "type": "Nation",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$490",
                            "rawPrice": 490,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/ad69d6422f78bb52563685faad33e0c1/GettyImages-516036155.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475371",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475371",
                        "skyCode": "MT",
                        "name": "Malta",
                        "type": "Nation",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$492",
                            "rawPrice": 492,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/m/5b7ffff36f8104f/Large-eyeem-26694340-112027854.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475379",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475379",
                        "skyCode": "AT",
                        "name": "Austria",
                        "type": "Nation",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$496",
                            "rawPrice": 496,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/9c1264f41dfac6d9ab3cbc23156feaf5/GettyImages-467854441.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475221",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475221",
                        "skyCode": "TR",
                        "name": "Türkiye (Turkey)",
                        "type": "Nation",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$497",
                            "rawPrice": 497,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/d23308b5729b733820564edb659313d2/GettyImages-474693922.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475376",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475376",
                        "skyCode": "CH",
                        "name": "Switzerland",
                        "type": "Nation",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$502",
                            "rawPrice": 502,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/92ec24310bc1e0c2c5022132dd1d4d55/GettyImages-178766147.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475438",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475438",
                        "skyCode": "RS",
                        "name": "Serbia",
                        "type": "Nation",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$502",
                            "rawPrice": 502,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/d1831c1a59e1ea608773be52b099f7b4/GettyImages-177007038.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475430",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475430",
                        "skyCode": "BO",
                        "name": "Bolivia",
                        "type": "Nation",
                        "continent": {
                            "code": "SA",
                            "name": "South America"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$522",
                            "rawPrice": 522,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/5097fbb69c50d6c2e20a8cc7929b11bf/GettyImages-145130845.jpg"
                    }
                }
            },
            {
                "id": "location-29475389",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475389",
                        "skyCode": "CZ",
                        "name": "Czechia",
                        "type": "Nation",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$524",
                            "rawPrice": 524,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/6f3779016c23190fadcdc6f500f5dc11/GettyImages-464420602.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475429",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475429",
                        "skyCode": "CL",
                        "name": "Chile",
                        "type": "Nation",
                        "continent": {
                            "code": "SA",
                            "name": "South America"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$526",
                            "rawPrice": 526,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/d8b51b5ac10c64a8e76d2dfa2eff063b/GettyImages-123180405.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475247",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475247",
                        "skyCode": "GE",
                        "name": "Georgia",
                        "type": "Nation",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$548",
                            "rawPrice": 548,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/9ce4f334206ecb75decf8dcadac81839/GettyImages-484678884.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475380",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475380",
                        "skyCode": "BE",
                        "name": "Belgium",
                        "type": "Nation",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$582",
                            "rawPrice": 582,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/7f99e0b77af76bf7e89a614cba3a1d9d/GettyImages-517851449.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475284",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475284",
                        "skyCode": "IN",
                        "name": "India",
                        "type": "Nation",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$597",
                            "rawPrice": 597,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/ec26cc7ac3371abc1b8ea45df0b88791/GettyImages-480882769.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475403",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475403",
                        "skyCode": "PY",
                        "name": "Paraguay",
                        "type": "Nation",
                        "continent": {
                            "code": "SA",
                            "name": "South America"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$617",
                            "rawPrice": 617,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/c7b3c29eafe8ad22bc891db43012695a/GettyImages-154240532.jpg"
                    }
                }
            },
            {
                "id": "location-29475323",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475323",
                        "skyCode": "TW",
                        "name": "Taiwan",
                        "type": "Nation",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$628",
                            "rawPrice": 628,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/05accaec28ad48ea37b4c5e13bbbfa7b/GettyImages-166140632.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475428",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475428",
                        "skyCode": "AR",
                        "name": "Argentina",
                        "type": "Nation",
                        "continent": {
                            "code": "SA",
                            "name": "South America"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$699",
                            "rawPrice": 699,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/e2ef29b11c3586421a32b14b9951b01c/gettyimages-673156625.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475330",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475330",
                        "skyCode": "JP",
                        "name": "Japan",
                        "type": "Nation",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$699",
                            "rawPrice": 699,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/dd114ccd4424789005cbd0f6cd8881e1/GettyImages-131906563.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475226",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475226",
                        "skyCode": "EG",
                        "name": "Egypt",
                        "type": "Nation",
                        "continent": {
                            "code": "AF",
                            "name": "Africa"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$713",
                            "rawPrice": 713,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/acc18b20b3d6fc6edee095dc709c2e8a/GettyImages-516505363.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475320",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475320",
                        "skyCode": "TH",
                        "name": "Thailand",
                        "type": "Nation",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$741",
                            "rawPrice": 741,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/e0a42512a8f7baba699430c43d90e339/GettyImages-465582049.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475319",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475319",
                        "skyCode": "VN",
                        "name": "Vietnam",
                        "type": "Nation",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$760",
                            "rawPrice": 760,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/0012f421f0682d22815185912d6e105c/GettyImages-481711830.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475332",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475332",
                        "skyCode": "SG",
                        "name": "Singapore",
                        "type": "Nation",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$768",
                            "rawPrice": 768,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/5359c305bbed8c4e18b252b159a67cfa/GettyImages-187011688.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475216",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475216",
                        "skyCode": "AE",
                        "name": "United Arab Emirates",
                        "type": "Nation",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$772",
                            "rawPrice": 772,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/e87b304f10a700cae0d08ea920c8be32/GettyImages-470434611.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475192",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475192",
                        "skyCode": "SA",
                        "name": "Saudi Arabia",
                        "type": "Nation",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$794",
                            "rawPrice": 794,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/m/4bead20c4361686/original/GettyImages-148613833-Saudi-Arabia.jpeg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475329",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475329",
                        "skyCode": "KR",
                        "name": "South Korea",
                        "type": "Nation",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$798",
                            "rawPrice": 798,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/db465e93dcaad614e9bfcaddb5865e36/GettyImages-505777764.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475217",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475217",
                        "skyCode": "IL",
                        "name": "Israel",
                        "type": "Nation",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$802",
                            "rawPrice": 802,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/f5c3712b7fe4d1bdbb7e84261abbf904/GettyImages-486858743.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475324",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475324",
                        "skyCode": "PH",
                        "name": "Philippines",
                        "type": "Nation",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$822",
                            "rawPrice": 822,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/4256a18a3673a5f3926fc37bb2b80beb/GettyImages-517678055.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475325",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475325",
                        "skyCode": "MY",
                        "name": "Malaysia",
                        "type": "Nation",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$880",
                            "rawPrice": 880,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/1774d53524a0a485c5c990678a472cf6/GettyImages-503612842.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475203",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475203",
                        "skyCode": "KE",
                        "name": "Kenya",
                        "type": "Nation",
                        "continent": {
                            "code": "AF",
                            "name": "Africa"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$891",
                            "rawPrice": 891,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/9f22acec076ec1fcc563ab830cc131eb/GettyImages-522357593.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475321",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475321",
                        "skyCode": "ID",
                        "name": "Indonesia",
                        "type": "Nation",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$892",
                            "rawPrice": 892,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/500895cfc34ed09c588403e89b0d40af/GettyImages-177723673.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475326",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475326",
                        "skyCode": "CN",
                        "name": "China",
                        "type": "Nation",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$896",
                            "rawPrice": 896,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/ec6e1a573dde92117986911e9c097f0b/GettyImages-462416635.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475342",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475342",
                        "skyCode": "NZ",
                        "name": "New Zealand",
                        "type": "Nation",
                        "continent": {
                            "code": "OC",
                            "name": "Oceania"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$904",
                            "rawPrice": 904,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/298f7876c93ca82e92877c5c672bd5aa/GettyImages-176796713.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475210",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475210",
                        "skyCode": "JO",
                        "name": "Jordan",
                        "type": "Nation",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$913",
                            "rawPrice": 913,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/a88907f9ccd8314ee90cdf24de3ef073/GettyImages-490578292.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475215",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475215",
                        "skyCode": "BH",
                        "name": "Bahrain",
                        "type": "Nation",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$933",
                            "rawPrice": 933,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/c2c81c0b9872609fdb27800fd99198d9/eyeem-26693940-101910152.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475212",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475212",
                        "skyCode": "KW",
                        "name": "Kuwait",
                        "type": "Nation",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$934",
                            "rawPrice": 934,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/afaacdea074d53702da4daccbdfdd28a/GettyImages-115889746.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475351",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475351",
                        "skyCode": "CI",
                        "name": "Ivory Coast",
                        "type": "Nation",
                        "continent": {
                            "code": "AF",
                            "name": "Africa"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$937",
                            "rawPrice": 937,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/5e4a1d8925d4eb1e09b6e67944054d51/GettyImages-480145073.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475336",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475336",
                        "skyCode": "AU",
                        "name": "Australia",
                        "type": "Nation",
                        "continent": {
                            "code": "OC",
                            "name": "Oceania"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$946",
                            "rawPrice": 946,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/aa63694be729955d3709259f1cd989ea/GettyImages-484018307.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475207",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475207",
                        "skyCode": "UG",
                        "name": "Uganda",
                        "type": "Nation",
                        "continent": {
                            "code": "AF",
                            "name": "Africa"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$947",
                            "rawPrice": 947,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/1c2fc879e6236631d2a359b4c003b550/GettyImages-98458951.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475277",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475277",
                        "skyCode": "PK",
                        "name": "Pakistan",
                        "type": "Nation",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$950",
                            "rawPrice": 950,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/6ee766b3cf0f075d4f8bc2cab3471747/GettyImages-475444191.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475328",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475328",
                        "skyCode": "KH",
                        "name": "Cambodia",
                        "type": "Nation",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$965",
                            "rawPrice": 965,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/m/39f96b6a735f9de3/original/SearchResults-Postcard-Cambodia-GettyImages-546436533.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475354",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475354",
                        "skyCode": "NG",
                        "name": "Nigeria",
                        "type": "Nation",
                        "continent": {
                            "code": "AF",
                            "name": "Africa"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$995",
                            "rawPrice": 995,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/m/2da95a35541ca41c/Large-eyeem-26694340-129026395.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475346",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475346",
                        "skyCode": "SN",
                        "name": "Senegal",
                        "type": "Nation",
                        "continent": {
                            "code": "AF",
                            "name": "Africa"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$1,010",
                            "rawPrice": 1010,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/7815bd951e38c30da006f80f2000aa2b/GettyImages-533574555.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475199",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475199",
                        "skyCode": "TZ",
                        "name": "Tanzania",
                        "type": "Nation",
                        "continent": {
                            "code": "AF",
                            "name": "Africa"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$1,013",
                            "rawPrice": 1013,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/0e13dd0394a185394d5f95a264f7a91e/GettyImages-488017022.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475363",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475363",
                        "skyCode": "GM",
                        "name": "Gambia",
                        "type": "Nation",
                        "continent": {
                            "code": "AF",
                            "name": "Africa"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$1,064",
                            "rawPrice": 1064,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/a1ca6a7c4175a1553ec51513e6963f6e/gettyimages-475916060-coloured.jpg"
                    }
                }
            },
            {
                "id": "location-29475317",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475317",
                        "skyCode": "KZ",
                        "name": "Kazakhstan",
                        "type": "Nation",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$1,095",
                            "rawPrice": 1095,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/bfb43286b5011fbe5266eb0f9766d0d7/GettyImages-486101600.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475213",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475213",
                        "skyCode": "OM",
                        "name": "Oman",
                        "type": "Nation",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$1,109",
                            "rawPrice": 1109,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/5236a1cace5e3b4f5b9be79433ba51ea/oman.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475281",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475281",
                        "skyCode": "LK",
                        "name": "Sri Lanka",
                        "type": "Nation",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$1,131",
                            "rawPrice": 1131,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/a52cf8ef3527238d9ac2a83d58642777/GettyImages-488524209.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475214",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475214",
                        "skyCode": "QA",
                        "name": "Qatar",
                        "type": "Nation",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$1,134",
                            "rawPrice": 1134,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/ac761797b8f4c38a07748eced9421207/GettyImages-473796126.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475194",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475194",
                        "skyCode": "IR",
                        "name": "Iran",
                        "type": "Nation",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$1,138",
                            "rawPrice": 1138,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/61dd582d155713d6bb5a2d8b388ea5ea/GettyImages-488512694.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475200",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475200",
                        "skyCode": "SY",
                        "name": "Syria",
                        "type": "Nation",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$1,141",
                            "rawPrice": 1141,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/46821cb2a7d3f1249079ccf7bd5752ff/GettyImages-153070371.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475278",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475278",
                        "skyCode": "BD",
                        "name": "Bangladesh",
                        "type": "Nation",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$1,150",
                            "rawPrice": 1150,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/439353930da4951ef91a1e18516c1a2b/GettyImages-119412560.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475186",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475186",
                        "skyCode": "IQ",
                        "name": "Iraq",
                        "type": "Nation",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$1,154",
                            "rawPrice": 1154,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/552cea75dab8a1cf06731d4a8dfab435/GettyImages-468435302.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475272",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475272",
                        "skyCode": "ZA",
                        "name": "South Africa",
                        "type": "Nation",
                        "continent": {
                            "code": "AF",
                            "name": "Africa"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$1,162",
                            "rawPrice": 1162,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/4d394cbaa3bd9e013799160cef9041dd/GettyImages-504279936.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475270",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475270",
                        "skyCode": "MU",
                        "name": "Mauritius",
                        "type": "Nation",
                        "continent": {
                            "code": "AF",
                            "name": "Africa"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$1,244",
                            "rawPrice": 1244,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/afeafa38f5fb83923c9c58f78bdc195c/GettyImages-185526100.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475314",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475314",
                        "skyCode": "NP",
                        "name": "Nepal",
                        "type": "Nation",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$1,268",
                            "rawPrice": 1268,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/c8cecb6d5971d7ca1feb542c276a6618/GettyImages-462451385.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475313",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475313",
                        "skyCode": "MV",
                        "name": "Maldives",
                        "type": "Nation",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$1,308",
                            "rawPrice": 1308,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/m/6d500425fa2d6ccf/original/Maldives-5616-x-3472px.png"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475224",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475224",
                        "skyCode": "ET",
                        "name": "Ethiopia",
                        "type": "Nation",
                        "continent": {
                            "code": "AF",
                            "name": "Africa"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$1,364",
                            "rawPrice": 1364,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/214783cb951d8a59299c884856c5fdc3/GettyImages-186203296.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            },
            {
                "id": "location-29475209",
                "type": "LOCATION",
                "content": {
                    "location": {
                        "id": "29475209",
                        "skyCode": "SC",
                        "name": "Seychelles",
                        "type": "Nation",
                        "continent": {
                            "code": "AF",
                            "name": "Africa"
                        }
                    },
                    "flightQuotes": {
                        "cheapest": {
                            "price": "$1,444",
                            "rawPrice": 1444,
                            "direct": false
                        }
                    },
                    "image": {
                        "url": "https://content.skyscnr.com/151d39a4b7c3dc8f1b421ab906d1130b/GettyImages-178760424.jpg"
                    },
                    "flightRoutes": {
                        "directFlightsAvailable": false
                    }
                }
            }
        ]
    }
}
