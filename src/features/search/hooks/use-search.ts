import axios, { CancelToken } from 'axios'
import { useEffect } from 'react'
import { UseMutateFunction } from 'react-query'

import { Trip } from '~models/trip.model'

type Data = Trip[]
type Error = never
export const useSearch = (
  input: string,
  mutate: UseMutateFunction<Data, Error, CancelToken | undefined>,
) => {
  const cancelToken = axios.CancelToken
  let cancelTokenSource = cancelToken.source()

  useEffect(() => {
    cancelTokenSource.cancel()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    cancelTokenSource = cancelToken.source()
    const delayDebounceFn = setTimeout(() => {
      if (input.length >= 3) {
        mutate(cancelTokenSource.token)
      }
    }, 1000)

    return () => {
      return clearTimeout(delayDebounceFn)
    }
  }, [input])
}
