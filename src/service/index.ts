import axios from "axios"
import { EventsResponse } from "./types"

const eventsEndpoint = "/events.php"
const baseUrl = "http://127.0.0.1:8000"

const headers = {
  Accept:
    "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
  "Accept-Language": "en,en-GB;q=0.9,en-US;q=0.8,ru;q=0.7",
  "Cache-Control": "max-age=0",
  "Upgrade-Insecure-Requests": 1,
  "Access-Control-Allow-Headers": "*",
  "Content-Type": "application/json",
}

export class APIService {
  parseParams = (params: { [key: string]: string | number }) => {
    let parsed = ""

    Object.keys(params).forEach((key) => {
      if (params[key]) {
        return (parsed += `${key}=${params[key]}&`)
      }
    })

    return parsed
  }

  getEvents = async (params: { keyword: string; countryCode: string }) => {
    const parsedParams = this.parseParams(params)

    return axios.get<EventsResponse>(
      baseUrl + eventsEndpoint + `?${parsedParams}`,
      { headers }
    )
  }
}
