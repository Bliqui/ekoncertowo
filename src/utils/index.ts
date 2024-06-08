export const filterEmptyValues = (object: Record<string, string>) => {
  const params = Object.entries(object)

  const result = new Map()

  params.forEach((param) => {
    if (param[1] !== "") {
      result.set(param[0], param[1])
    }
  })

  return Object.fromEntries(result)
}

export const paramsToObject = (url: URLSearchParams) => {
  const entries = url.entries()

  const result = {}

  for (const [key, value] of entries) {
    // each 'entry' is a [key, value] tupple
    result[key] = value
  }
  return result
}

export const fahrenheitToCelsius = (fahrenheit: number) =>
  (5 / 9) * (fahrenheit - 32)

export const getWeatherName = (name: string = "") => {
  const formattedName = name.toLowerCase()

  if (formattedName.includes("cloudy")) {
    return "Pochmurnie"
  } else if (formattedName.includes("rain")) {
    return "Deszcz"
  } else if (formattedName.includes("overcast")) {
    return "Pochmurnie"
  } else if (formattedName.includes("clear")) {
    return "Ładna pogoda"
  } else {
    return "Brak danych"
  }
}

export const formatFullDate = (date: string = "") => {
  if (date) {
    const [year, month, day] = date.split("-")

    return `${day}.${month}.${year}r.`
  }

  return date
}

export const getFullUrl = () => window?.location.href

export const copyToClipboard = (text: string) => {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text)
  }

  const textArea = document.createElement("textarea")
  textArea.value = text

  textArea.style.position = "fixed"
  textArea.style.left = "-999999px"
  textArea.style.top = "-999999px"

  document.body.appendChild(textArea)
  textArea.focus()
  textArea.select()

  return new Promise<void>((res, rej) => {
    document.execCommand("copy") ? res() : rej()
    textArea.remove()
  })
}
