import { useQuery } from "@tanstack/react-query"

import { APIService } from ".."

const service = new APIService()

export const useGetEvents = (options = {}) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["events", options],
    queryFn: async () => (await service.getEvents(options))?.data,
  })

  const currentPage = (data?.page?.number || 0) + 1 // count on BE starts from 0, total number of pages count start from 1 :D
  const totalPages = data?.page?.totalPages || 0

  return {
    data,
    isLoading,
    isError,
    nextPageNumber: currentPage < totalPages ? currentPage : "",
  }
}
