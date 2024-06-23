import { useSearchParams } from "react-router-dom"
import { filterEmptyValues, paramsToObject } from "../utils"

export const useHandleQueryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const parsedSearhParams = paramsToObject(searchParams)

  return {
    setQueryParams: (params) =>
      setSearchParams((prev) => ({
        ...paramsToObject(prev),
        ...filterEmptyValues(params),
      })),
    queryParams: parsedSearhParams,
  }
}
