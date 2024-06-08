export type Venue = {
  name: string
  type: string
  id: string
  test: boolean
  locale: string
  postalCode: string
  timezone: string
  city: {
    name: string
  }
  state: {
    name: string
    stateCode: string
  }
  country: {
    name: string
    countryCode: string
  }
  address: {
    line1: string
  }
  location: {
    longitude: string
    latitude: string
  }
  dmas: [
    {
      id: number
    }
  ]
  upcomingEvents: {
    tmr: number
    _total: number
    ticketmaster: number
    _filtered: number
  }
}

export type Image = {
  ratio: string
  url: string
  width: number
  height: number
  fallback: boolean
}

export type Page = {
  size: number
  totalElements: number
  totalPages: number
  number: number
}

export type Links = {
  first: {
    href: string
  }
  self: {
    href: string
  }
  next: {
    href: string
  }
  last: {
    href: string
  }
}

export type Event = {
  name: string
  type: string
  id: string
  test: boolean
  url: string
  locale: string
  images: Image[]
  dates: {
    start: {
      localDate: string
      localTime: string
      dateTime: string
      dateTBD: boolean
      dateTBA: boolean
      timeTBA: boolean
      noSpecificTime: boolean
    }
    status: {
      code: string
    }
    spanMultipleDays: boolean
  }
}

export type Weather = {
  queryCost: number
  latitude: number
  longitude: number
  resolvedAddress: string
  address: string
  timezone: string
  tzoffset: number
  description: string
  // days: [
  //   {
  //     datetime: "2024-06-08"
  //     datetimeEpoch: 1717819200
  //     tempmax: 74.9
  //     tempmin: 61
  //     temp: 68
  //     feelslikemax: 74.9
  //     feelslikemin: 61
  //     feelslike: 68
  //     dew: 53
  //     humidity: 60.2
  //     precip: 0.019
  //     precipprob: 100
  //     precipcover: 4.17
  //     preciptype: ["rain"]
  //     snow: 0
  //     snowdepth: 0
  //     windgust: 33.3
  //     windspeed: 22.9
  //     winddir: 267.1
  //     pressure: 1004
  //     cloudcover: 51.5
  //     visibility: 9.8
  //     solarradiation: 253.5
  //     solarenergy: 21.7
  //     uvindex: 9
  //     severerisk: 10
  //     sunrise: "05:07:31"
  //     sunriseEpoch: 1717837651
  //     sunset: "20:19:45"
  //     sunsetEpoch: 1717892385
  //     moonphase: 0.07
  //     conditions: "Rain, Partially cloudy"
  //     description: "Partly cloudy throughout the day with early morning rain."
  //     icon: "rain"
  //     stations: ["KOWD", "AV085", "KBED", "KBOS"]
  //     source: "comb"
  //     hours: [
  //       {
  //         datetime: "00:00:00"
  //         datetimeEpoch: 1717819200
  //         temp: 62.2
  //         feelslike: 62.2
  //         humidity: 95.68
  //         dew: 61
  //         precip: 0.019
  //         precipprob: 100
  //         snow: 0
  //         snowdepth: 0
  //         preciptype: ["rain"]
  //         windgust: 10.3
  //         windspeed: 4.7
  //         winddir: 56
  //         pressure: 1002.7
  //         visibility: 6.9
  //         cloudcover: 99.9
  //         solarradiation: 0
  //         solarenergy: 0
  //         uvindex: 0
  //         severerisk: 10
  //         conditions: "Rain, Overcast"
  //         icon: "rain"
  //         stations: ["KOWD", "AV085", "KBED", "KBOS"]
  //         source: "obs"
  //       },
  //       {
  //         datetime: "01:00:00"
  //         datetimeEpoch: 1717822800
  //         temp: 63.1
  //         feelslike: 63.1
  //         humidity: 92.63
  //         dew: 60.9
  //         precip: 0
  //         precipprob: 0
  //         snow: 0
  //         snowdepth: 0
  //         preciptype: null
  //         windgust: 11.4
  //         windspeed: 5.8
  //         winddir: 265
  //         pressure: 1002.9
  //         visibility: 9.9
  //         cloudcover: 98.1
  //         solarradiation: 0
  //         solarenergy: 0
  //         uvindex: 0
  //         severerisk: 10
  //         conditions: "Overcast"
  //         icon: "cloudy"
  //         stations: ["KOWD", "AV085", "KBED", "KBOS"]
  //         source: "obs"
  //       },
  //       {
  //         datetime: "02:00:00"
  //         datetimeEpoch: 1717826400
  //         temp: 64
  //         feelslike: 64
  //         humidity: 67.77
  //         dew: 53.2
  //         precip: 0
  //         precipprob: 0
  //         snow: 0
  //         snowdepth: 0
  //         preciptype: null
  //         windgust: 20.8
  //         windspeed: 13.7
  //         winddir: 270
  //         pressure: 1002.8
  //         visibility: 9.9
  //         cloudcover: 48.8
  //         solarradiation: 0
  //         solarenergy: 0
  //         uvindex: 0
  //         severerisk: 10
  //         conditions: "Partially cloudy"
  //         icon: "partly-cloudy-night"
  //         stations: ["KOWD", "AV085", "KBED", "KBOS"]
  //         source: "obs"
  //       },
  //       {
  //         datetime: "03:00:00"
  //         datetimeEpoch: 1717830000
  //         temp: 62.1
  //         feelslike: 62.1
  //         humidity: 69.83
  //         dew: 52.1
  //         precip: 0
  //         precipprob: 0
  //         snow: 0
  //         snowdepth: 0
  //         preciptype: null
  //         windgust: 11.4
  //         windspeed: 12.6
  //         winddir: 289
  //         pressure: 1002.3
  //         visibility: 9.9
  //         cloudcover: 85.8
  //         solarradiation: 0
  //         solarenergy: 0
  //         uvindex: 0
  //         severerisk: 10
  //         conditions: "Partially cloudy"
  //         icon: "partly-cloudy-night"
  //         stations: ["KOWD", "AV085", "KBED", "KBOS"]
  //         source: "obs"
  //       },
  //       {
  //         datetime: "04:00:00"
  //         datetimeEpoch: 1717833600
  //         temp: 61
  //         feelslike: 61
  //         humidity: 75.33
  //         dew: 53.1
  //         precip: 0
  //         precipprob: 0
  //         snow: 0
  //         snowdepth: 0
  //         preciptype: null
  //         windgust: 12.8
  //         windspeed: 11.3
  //         winddir: 260
  //         pressure: 1002.1
  //         visibility: 9.9
  //         cloudcover: 48.8
  //         solarradiation: 0
  //         solarenergy: 0
  //         uvindex: 0
  //         severerisk: 10
  //         conditions: "Partially cloudy"
  //         icon: "partly-cloudy-night"
  //         stations: ["KOWD", "AV085", "KBED", "KBOS"]
  //         source: "obs"
  //       },
  //       {
  //         datetime: "05:00:00"
  //         datetimeEpoch: 1717837200
  //         temp: 61
  //         feelslike: 61
  //         humidity: 70.13
  //         dew: 51.2
  //         precip: 0
  //         precipprob: 0
  //         snow: 0
  //         snowdepth: 0
  //         preciptype: null
  //         windgust: 10.3
  //         windspeed: 13.7
  //         winddir: 270
  //         pressure: 1002.6
  //         visibility: 9.9
  //         cloudcover: 24.4
  //         solarradiation: 0
  //         solarenergy: 0
  //         uvindex: 0
  //         severerisk: 10
  //         conditions: "Partially cloudy"
  //         icon: "partly-cloudy-night"
  //         stations: ["KOWD", "AV085", "KBED", "KBOS"]
  //         source: "obs"
  //       },
  //       {
  //         datetime: "06:00:00"
  //         datetimeEpoch: 1717840800
  //         temp: 61
  //         feelslike: 61
  //         humidity: 70.11
  //         dew: 51.2
  //         precip: 0
  //         precipprob: 0
  //         snow: 0
  //         snowdepth: 0
  //         preciptype: null
  //         windgust: 21.9
  //         windspeed: 11.3
  //         winddir: 260
  //         pressure: 1003.1
  //         visibility: 9.9
  //         cloudcover: 24.4
  //         solarradiation: 39
  //         solarenergy: 0.1
  //         uvindex: 0
  //         severerisk: 10
  //         conditions: "Partially cloudy"
  //         icon: "partly-cloudy-day"
  //         stations: ["KOWD", "AV085", "KBED", "KBOS"]
  //         source: "obs"
  //       },
  //       {
  //         datetime: "07:00:00"
  //         datetimeEpoch: 1717844400
  //         temp: 62.1
  //         feelslike: 62.1
  //         humidity: 69.64
  //         dew: 52.1
  //         precip: 0
  //         precipprob: 0
  //         snow: 0
  //         snowdepth: 0
  //         preciptype: null
  //         windgust: 26.3
  //         windspeed: 14.9
  //         winddir: 270
  //         pressure: 1003.6
  //         visibility: 9.9
  //         cloudcover: 24.4
  //         solarradiation: 277
  //         solarenergy: 1
  //         uvindex: 3
  //         severerisk: 10
  //         conditions: "Partially cloudy"
  //         icon: "partly-cloudy-day"
  //         stations: ["KOWD", "AV085", "KBED", "KBOS"]
  //         source: "obs"
  //       },
  //       {
  //         datetime: "08:00:00"
  //         datetimeEpoch: 1717848000
  //         temp: 65
  //         feelslike: 65
  //         humidity: 65.49
  //         dew: 53.2
  //         precip: 0
  //         precipprob: 0
  //         snow: 0
  //         snowdepth: 0
  //         preciptype: null
  //         windgust: 21.4
  //         windspeed: 10.3
  //         winddir: 270
  //         pressure: 1003.9
  //         visibility: 9.9
  //         cloudcover: 0
  //         solarradiation: 449
  //         solarenergy: 1.6
  //         uvindex: 4
  //         severerisk: 10
  //         conditions: "Clear"
  //         icon: "clear-day"
  //         stations: ["KOWD", "AV085", "KBED", "KBOS"]
  //         source: "obs"
  //       },
  //       {
  //         datetime: "09:00:00"
  //         datetimeEpoch: 1717851600
  //         temp: 67.9
  //         feelslike: 67.9
  //         humidity: 57
  //         dew: 52.1
  //         precip: 0
  //         precipprob: 0
  //         snow: 0
  //         snowdepth: 0
  //         preciptype: null
  //         windgust: 20.8
  //         windspeed: 14.9
  //         winddir: 260
  //         pressure: 1003.6
  //         visibility: 9.9
  //         cloudcover: 24.7
  //         solarradiation: 624
  //         solarenergy: 2.2
  //         uvindex: 6
  //         severerisk: 10
  //         conditions: "Partially cloudy"
  //         icon: "partly-cloudy-day"
  //         stations: ["KOWD", "AV085", "KBED", "KBOS"]
  //         source: "obs"
  //       },
  //       {
  //         datetime: "10:00:00"
  //         datetimeEpoch: 1717855200
  //         temp: 70
  //         feelslike: 70
  //         humidity: 52.99
  //         dew: 52.1
  //         precip: 0
  //         precipprob: 0
  //         snow: 0
  //         snowdepth: 0
  //         preciptype: null
  //         windgust: 27.6
  //         windspeed: 17.1
  //         winddir: 280
  //         pressure: 1003.7
  //         visibility: 9.9
  //         cloudcover: 25.5
  //         solarradiation: 654
  //         solarenergy: 2.4
  //         uvindex: 7
  //         severerisk: 10
  //         conditions: "Partially cloudy"
  //         icon: "partly-cloudy-day"
  //         stations: ["KOWD", "AV085", "KBED", "KBOS"]
  //         source: "obs"
  //       },
  //       {
  //         datetime: "11:00:00"
  //         datetimeEpoch: 1717858800
  //         temp: 72.1
  //         feelslike: 72.1
  //         humidity: 49.47
  //         dew: 52.1
  //         precip: 0
  //         precipprob: 0
  //         snow: 0
  //         snowdepth: 0
  //         preciptype: null
  //         windgust: 27.7
  //         windspeed: 12.8
  //         winddir: 290
  //         pressure: 1003.9
  //         visibility: 9.9
  //         cloudcover: 50
  //         solarradiation: 528
  //         solarenergy: 1.9
  //         uvindex: 5
  //         severerisk: 10
  //         conditions: "Partially cloudy"
  //         icon: "partly-cloudy-day"
  //         stations: ["KOWD", "AV085", "KBED", "KBOS"]
  //         source: "obs"
  //       },
  //       {
  //         datetime: "12:00:00"
  //         datetimeEpoch: 1717862400
  //         temp: 72.1
  //         feelslike: 72.1
  //         humidity: 47.84
  //         dew: 51.2
  //         precip: 0
  //         precipprob: 0
  //         snow: 0
  //         snowdepth: 0
  //         preciptype: null
  //         windgust: 25.3
  //         windspeed: 16.1
  //         winddir: 280
  //         pressure: 1003.9
  //         visibility: 9.9
  //         cloudcover: 49.7
  //         solarradiation: 928
  //         solarenergy: 3.3
  //         uvindex: 9
  //         severerisk: 10
  //         conditions: "Partially cloudy"
  //         icon: "partly-cloudy-day"
  //         stations: ["KOWD", "AV085", "KBED", "KBOS"]
  //         source: "obs"
  //       },
  //       {
  //         datetime: "13:00:00"
  //         datetimeEpoch: 1717866000
  //         temp: 74
  //         feelslike: 74
  //         humidity: 42.86
  //         dew: 50
  //         precip: 0
  //         precipprob: 0
  //         snow: 0
  //         snowdepth: 0
  //         preciptype: null
  //         windgust: 30.9
  //         windspeed: 22.9
  //         winddir: 270
  //         pressure: 1003.9
  //         visibility: 9.9
  //         cloudcover: 50
  //         solarradiation: 894
  //         solarenergy: 3.2
  //         uvindex: 9
  //         severerisk: 10
  //         conditions: "Partially cloudy"
  //         icon: "partly-cloudy-day"
  //         stations: ["KOWD", "AV085", "KBED", "KBOS"]
  //         source: "obs"
  //       },
  //       {
  //         datetime: "14:00:00"
  //         datetimeEpoch: 1717869600
  //         temp: 74
  //         feelslike: 74
  //         humidity: 44.88
  //         dew: 51.2
  //         precip: 0
  //         precipprob: 0
  //         snow: 0
  //         snowdepth: 0
  //         preciptype: null
  //         windgust: 32.1
  //         windspeed: 19.5
  //         winddir: 250
  //         pressure: 1003.8
  //         visibility: 9.9
  //         cloudcover: 88
  //         solarradiation: 594
  //         solarenergy: 2.1
  //         uvindex: 6
  //         severerisk: 10
  //         conditions: "Partially cloudy"
  //         icon: "partly-cloudy-day"
  //         stations: ["KOWD", "AV085", "KBED", "KBOS"]
  //         source: "obs"
  //       },
  //       {
  //         datetime: "15:00:00"
  //         datetimeEpoch: 1717873200
  //         temp: 74
  //         feelslike: 74
  //         humidity: 46.53
  //         dew: 52.2
  //         precip: 0
  //         precipprob: 0
  //         snow: 0
  //         snowdepth: 0
  //         preciptype: null
  //         windgust: 33.3
  //         windspeed: 16
  //         winddir: 250
  //         pressure: 1004
  //         visibility: 9.9
  //         cloudcover: 88
  //         solarradiation: 389
  //         solarenergy: 1.4
  //         uvindex: 4
  //         severerisk: 10
  //         conditions: "Partially cloudy"
  //         icon: "partly-cloudy-day"
  //         stations: ["KOWD", "AV085", "KBED", "KBOS"]
  //         source: "obs"
  //       },
  //       {
  //         datetime: "16:00:00"
  //         datetimeEpoch: 1717876800
  //         temp: 74.9
  //         feelslike: 74.9
  //         humidity: 44.97
  //         dew: 52.1
  //         precip: 0
  //         precipprob: 0
  //         snow: 0
  //         snowdepth: 0
  //         preciptype: null
  //         windgust: 31
  //         windspeed: 20.7
  //         winddir: 251
  //         pressure: 1003.9
  //         visibility: 9.9
  //         cloudcover: 50.2
  //         solarradiation: 86
  //         solarenergy: 0.3
  //         uvindex: 1
  //         severerisk: 10
  //         conditions: "Partially cloudy"
  //         icon: "partly-cloudy-day"
  //         stations: ["KOWD", "AV085", "KBED", "KBOS"]
  //         source: "obs"
  //       },
  //       {
  //         datetime: "17:00:00"
  //         datetimeEpoch: 1717880400
  //         temp: 74
  //         feelslike: 74
  //         humidity: 46.3
  //         dew: 52.1
  //         precip: 0
  //         precipprob: 0
  //         snow: 0
  //         snowdepth: 0
  //         preciptype: null
  //         windgust: 26.4
  //         windspeed: 19.5
  //         winddir: 270
  //         pressure: 1004.3
  //         visibility: 9.9
  //         cloudcover: 88.2
  //         solarradiation: 57
  //         solarenergy: 0.2
  //         uvindex: 1
  //         severerisk: 10
  //         conditions: "Partially cloudy"
  //         icon: "partly-cloudy-day"
  //         stations: ["KOWD", "AV085", "KBED", "KBOS"]
  //         source: "obs"
  //       },
  //       {
  //         datetime: "18:00:00"
  //         datetimeEpoch: 1717884000
  //         temp: 71
  //         feelslike: 71
  //         humidity: 51.25
  //         dew: 52.1
  //         precip: 0
  //         precipprob: 1
  //         snow: 0
  //         snowdepth: 0
  //         preciptype: null
  //         windgust: 23
  //         windspeed: 15
  //         winddir: 270
  //         pressure: 1005
  //         visibility: 10.1
  //         cloudcover: 48
  //         solarradiation: 330
  //         solarenergy: 1.2
  //         uvindex: 3
  //         severerisk: 10
  //         conditions: "Partially cloudy"
  //         icon: "partly-cloudy-day"
  //         stations: null
  //         source: "fcst"
  //       },
  //       {
  //         datetime: "19:00:00"
  //         datetimeEpoch: 1717887600
  //         temp: 70.1
  //         feelslike: 70.1
  //         humidity: 52.84
  //         dew: 52.1
  //         precip: 0
  //         precipprob: 1
  //         snow: 0
  //         snowdepth: 0
  //         preciptype: null
  //         windgust: 20.8
  //         windspeed: 13.9
  //         winddir: 270
  //         pressure: 1006
  //         visibility: 10.1
  //         cloudcover: 46
  //         solarradiation: 173
  //         solarenergy: 0.6
  //         uvindex: 2
  //         severerisk: 10
  //         conditions: "Partially cloudy"
  //         icon: "partly-cloudy-day"
  //         stations: null
  //         source: "fcst"
  //       },
  //       {
  //         datetime: "20:00:00"
  //         datetimeEpoch: 1717891200
  //         temp: 71
  //         feelslike: 71
  //         humidity: 52.97
  //         dew: 53
  //         precip: 0
  //         precipprob: 0
  //         snow: 0
  //         snowdepth: 0
  //         preciptype: null
  //         windgust: 18.3
  //         windspeed: 11.4
  //         winddir: 270
  //         pressure: 1006
  //         visibility: 10.1
  //         cloudcover: 45
  //         solarradiation: 61
  //         solarenergy: 0.2
  //         uvindex: 1
  //         severerisk: 10
  //         conditions: "Partially cloudy"
  //         icon: "partly-cloudy-day"
  //         stations: null
  //         source: "fcst"
  //       },
  //       {
  //         datetime: "21:00:00"
  //         datetimeEpoch: 1717894800
  //         temp: 69
  //         feelslike: 69
  //         humidity: 56.67
  //         dew: 53
  //         precip: 0
  //         precipprob: 0
  //         snow: 0
  //         snowdepth: 0
  //         preciptype: null
  //         windgust: 17.2
  //         windspeed: 10.3
  //         winddir: 260
  //         pressure: 1006
  //         visibility: 10.1
  //         cloudcover: 44
  //         solarradiation: 0
  //         solarenergy: 0
  //         uvindex: 0
  //         severerisk: 10
  //         conditions: "Partially cloudy"
  //         icon: "partly-cloudy-night"
  //         stations: null
  //         source: "fcst"
  //       },
  //       {
  //         datetime: "22:00:00"
  //         datetimeEpoch: 1717898400
  //         temp: 69
  //         feelslike: 69
  //         humidity: 58.96
  //         dew: 54.1
  //         precip: 0
  //         precipprob: 0
  //         snow: 0
  //         snowdepth: 0
  //         preciptype: null
  //         windgust: 16.1
  //         windspeed: 10.3
  //         winddir: 260
  //         pressure: 1006
  //         visibility: 10.1
  //         cloudcover: 42
  //         solarradiation: 0
  //         solarenergy: 0
  //         uvindex: 0
  //         severerisk: 10
  //         conditions: "Partially cloudy"
  //         icon: "partly-cloudy-night"
  //         stations: null
  //         source: "fcst"
  //       },
  //       {
  //         datetime: "23:00:00"
  //         datetimeEpoch: 1717902000
  //         temp: 67
  //         feelslike: 67
  //         humidity: 63.11
  //         dew: 54.1
  //         precip: 0
  //         precipprob: 0
  //         snow: 0
  //         snowdepth: 0
  //         preciptype: null
  //         windgust: 15
  //         windspeed: 10.3
  //         winddir: 250
  //         pressure: 1007
  //         visibility: 10.1
  //         cloudcover: 41
  //         solarradiation: 0
  //         solarenergy: 0
  //         uvindex: 0
  //         severerisk: 10
  //         conditions: "Partially cloudy"
  //         icon: "partly-cloudy-night"
  //         stations: null
  //         source: "fcst"
  //       }
  //     ]
  //   }
  // ]
  alerts: []
}

export type EventsResponse = Promise<{
  page: Page
  _embedded: { events: Event[] }
  _links: Links
}>

export type EventResponse = Promise<{
  event: Event
  weather: Weather
}>
