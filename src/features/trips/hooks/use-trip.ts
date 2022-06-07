import { useMutation, useQuery } from 'react-query'

import { PREFIX_URI } from '~configs/env'

import { FetchMarkers, FetchSingleTrip, FetchTrips } from '~utils/api'

import { Marker } from '~models/marker.model'
import { Trip } from '~models/trip.model'
import { User } from '~models/user.model'

type Data = Trip
type Error = never

export const useTrip = (user: User, idTrip: string) => {
  return useQuery<Data, Error>(`getTrip:${idTrip}`, async () =>
    FetchSingleTrip(await user.getIdToken(), idTrip),
  )
}
