import { useQuery } from 'react-query'

import { FetchSingleTrip } from '~utils/api'

import { Trip } from '~models/trip.model'
import { User } from '~models/user.model'

type Data = Trip
type Error = never

export const useTrip = (user: User, idTrip: string) => {
  return useQuery<Data, Error>(`getTrip:${idTrip}`, async () =>
    FetchSingleTrip(await user.getIdToken(), idTrip),
  )
}
