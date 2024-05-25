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

export type EventsResponse = Promise<{
  page: Page
  _embedded: { events: Event[] }
  _links: Links
}>
