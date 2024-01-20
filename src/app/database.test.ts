export var data = [
  {
    "id": 1,
    "country": "Italy",
    "participations": [
      {
        "id": 1,
        "year": 2012,
        "city": "Londres",
        "medalsCount": 28,
        "athleteCount": 372
      },
      {
        "id": 2,
        "year": 2016,
        "city": "Rio de Janeiro",
        "medalsCount": 28,
        "athleteCount": 375
      },
      {
        "id": 3,
        "year": 2020,
        "city": "Tokyo",
        "medalsCount": 40,
        "athleteCount": 381
      }
    ]
  },
  {
    "id": 2,
    "country": "Spain",
    "participations": [
      {
        "id": 1,
        "year": 2012,
        "city": "Londres",
        "medalsCount": 20,
        "athleteCount": 315
      },
      {
        "id": 2,
        "year": 2016,
        "city": "Rio de Janeiro",
        "medalsCount": 17,
        "athleteCount": 312
      },
      {
        "id": 3,
        "year": 2020,
        "city": "Tokyo",
        "medalsCount": 17,
        "athleteCount": 321
      }
    ]
  },
  {
    "id": 3,
    "country": "United States",
    "participations": [
      {
        "id": 1,
        "year": 2012,
        "city": "Londres",
        "medalsCount": 109,
        "athleteCount": 610
      },
      {
        "id": 2,
        "year": 2016,
        "city": "Rio de Janeiro",
        "medalsCount": 123,
        "athleteCount": 652
      },
      {
        "id": 3,
        "year": 2020,
        "city": "Tokyo",
        "medalsCount": 113,
        "athleteCount": 626
      }
    ]
  },
  {
    "id": 4,
    "country": "Germany",
    "participations": [
      {
        "id": 1,
        "year": 2012,
        "city": "Londres",
        "medalsCount": 44,
        "athleteCount": 425
      },
      {
        "id": 2,
        "year": 2016,
        "city": "Rio de Janeiro",
        "medalsCount": 44,
        "athleteCount": 422
      },
      {
        "id": 3,
        "year": 2020,
        "city": "Tokyo",
        "medalsCount": 37,
        "athleteCount": 425
      }
    ]
  },
  {
    "id": 5,
    "country": "France",
    "participations": [
      {
        "id": 1,
        "year": 2012,
        "city": "Londres",
        "medalsCount": 35,
        "athleteCount": 423
      },
      {
        "id": 2,
        "year": 2016,
        "city": "Rio de Janeiro",
        "medalsCount": 45,
        "athleteCount": 412
      },
      {
        "id": 3,
        "year": 2020,
        "city": "Tokyo",
        "medalsCount": 33,
        "athleteCount": 403
      }
    ]
  }
]


export var countries = [
    {
      "name": "Germany",
      "value": 40632,
      "extra": {
        "code": "de"
      }
    },
    {
      "name": "United States",
      "value": 50000,
      "extra": {
        "code": "us"
      }
    },
    {
      "name": "France",
      "value": 36745,
      "extra": {
        "code": "fr"
      }
    },
    {
      "name": "United Kingdom",
      "value": 36240,
      "extra": {
        "code": "uk"
      }
    },
    {
      "name": "Spain",
      "value": 33000,
      "extra": {
        "code": "es"
      }
    },
    {
      "name": "Italy",
      "value": 35800,
      "extra": {
        "code": "it"
      }
    }
  ]

  export var participation = {
    "id": [
        [
            1,
            2,
            3
        ],
        [
            1,
            2,
            3
        ],
        [
            1,
            2,
            3
        ],
        [
            1,
            2,
            3
        ],
        [
            1,
            2,
            3
        ]
    ],
    "year": [
        [
            2012,
            2016,
            2020
        ],
        [
            2012,
            2016,
            2020
        ],
        [
            2012,
            2016,
            2020
        ],
        [
            2012,
            2016,
            2020
        ],
        [
            2012,
            2016,
            2020
        ]
    ],
    "city": [
        [
            "Londres",
            "Rio de Janeiro",
            "Tokyo"
        ],
        [
            "Londres",
            "Rio de Janeiro",
            "Tokyo"
        ],
        [
            "Londres",
            "Rio de Janeiro",
            "Tokyo"
        ],
        [
            "Londres",
            "Rio de Janeiro",
            "Tokyo"
        ],
        [
            "Londres",
            "Rio de Janeiro",
            "Tokyo"
        ]
    ],
    "medalsCount": [
        [
            28,
            28,
            40
        ],
        [
            20,
            17,
            17
        ],
        [
            109,
            123,
            113
        ],
        [
            44,
            44,
            37
        ],
        [
            35,
            45,
            33
        ]
    ],
    "athleteCount": [
        [
            372,
            375,
            381
        ],
        [
            315,
            312,
            321
        ],
        [
            610,
            652,
            626
        ],
        [
            425,
            422,
            425
        ],
        [
            423,
            412,
            403
        ]
    ]
}

export var olympic = {
  "id": [
      1,
      2,
      3,
      4,
      5
  ],
  "country": [
      "Italy",
      "Spain",
      "United States",
      "Germany",
      "France"
  ],
  "participations": [
      [
          {
              "id": 1,
              "year": 2012,
              "city": "Londres",
              "medalsCount": 28,
              "athleteCount": 372
          },
          {
              "id": 2,
              "year": 2016,
              "city": "Rio de Janeiro",
              "medalsCount": 28,
              "athleteCount": 375
          },
          {
              "id": 3,
              "year": 2020,
              "city": "Tokyo",
              "medalsCount": 40,
              "athleteCount": 381
          }
      ],
      [
          {
              "id": 1,
              "year": 2012,
              "city": "Londres",
              "medalsCount": 20,
              "athleteCount": 315
          },
          {
              "id": 2,
              "year": 2016,
              "city": "Rio de Janeiro",
              "medalsCount": 17,
              "athleteCount": 312
          },
          {
              "id": 3,
              "year": 2020,
              "city": "Tokyo",
              "medalsCount": 17,
              "athleteCount": 321
          }
      ],
      [
          {
              "id": 1,
              "year": 2012,
              "city": "Londres",
              "medalsCount": 109,
              "athleteCount": 610
          },
          {
              "id": 2,
              "year": 2016,
              "city": "Rio de Janeiro",
              "medalsCount": 123,
              "athleteCount": 652
          },
          {
              "id": 3,
              "year": 2020,
              "city": "Tokyo",
              "medalsCount": 113,
              "athleteCount": 626
          }
      ],
      [
          {
              "id": 1,
              "year": 2012,
              "city": "Londres",
              "medalsCount": 44,
              "athleteCount": 425
          },
          {
              "id": 2,
              "year": 2016,
              "city": "Rio de Janeiro",
              "medalsCount": 44,
              "athleteCount": 422
          },
          {
              "id": 3,
              "year": 2020,
              "city": "Tokyo",
              "medalsCount": 37,
              "athleteCount": 425
          }
      ],
      [
          {
              "id": 1,
              "year": 2012,
              "city": "Londres",
              "medalsCount": 35,
              "athleteCount": 423
          },
          {
              "id": 2,
              "year": 2016,
              "city": "Rio de Janeiro",
              "medalsCount": 45,
              "athleteCount": 412
          },
          {
              "id": 3,
              "year": 2020,
              "city": "Tokyo",
              "medalsCount": 33,
              "athleteCount": 403
          }
      ]
  ]
}