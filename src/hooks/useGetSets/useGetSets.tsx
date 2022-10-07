import { useEffect, useState } from 'react'

import useAxios from 'axios-hooks'

import type { UseGetSets } from './types'

const apiRoute = 'https://api.pokemontcg.io/v2/sets'

export const useGetSets = ({ query = '', pageSize = 20, orderBy = '' }: UseGetSets = {}) => {
  const [page, setPage] = useState(1)
  const [isFetching, setIsFetching] = useState(false)
  const [loading, setLoading] = useState(true)

  const [{ data, loading: apiLoading, error }] = useAxios({
    url: apiRoute,
    params: {
      q: query,
      page: 1,
      pageSize: page * pageSize,
      orderBy,
    },
  })

  useEffect(() => {
    if (data) {
      if (loading) {
        setLoading(false)
      }
      setIsFetching(false)
    }
  }, [data, loading])

  const loadMore = () => {
    setPage(page + 1)
    setIsFetching(true)
  }

  return {
    data,
    apiLoading,
    error,

    isFetching,
    loadMore,
    loading,
  }
}
