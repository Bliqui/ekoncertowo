import { useQuery } from "@tanstack/react-query"

import { APIService } from ".."

const service = new APIService()

export const useGetEvents = (options = {}) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["events", options],
    queryFn: async () => (await service.getEvents(options))?.data,
  })

  return { data, isLoading, isError }
}
