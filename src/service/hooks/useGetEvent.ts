import { useQuery } from "@tanstack/react-query"

import { APIService } from ".."

const service = new APIService()

export const useGetEvent = (options = {}) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["event", options],
    queryFn: async () => (await service.getEvent(options))?.data,
  })

  return {
    data,
    isLoading,
    isError,
  }
}
