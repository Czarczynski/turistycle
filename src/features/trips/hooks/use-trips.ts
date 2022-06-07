import { CancelToken } from 'axios'
import { useMutation } from 'react-query'

import { CurrentFiltersType } from '~features/filters/types/current-filters.type'

import { FetchTrips } from '~utils/api'

import { Trip } from '~models/trip.model'
import { User } from '~models/user.model'

type Data = Trip[]
type Error = never

export const useTrips = (user: User, query: string, filters: CurrentFiltersType) => {
  return useMutation<Data, Error, CancelToken | undefined>('getTrips', async (cancelAxiosToken) =>
    FetchTrips(await user.getIdToken(), query, filters, cancelAxiosToken),
  )
}
