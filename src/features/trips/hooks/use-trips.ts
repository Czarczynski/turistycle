import { useMutation } from 'react-query'

import { FetchTrips } from '~utils/api'

import { Trip } from '~models/trip.model'
import { User } from '~models/user.model'

type Data = Trip[]
type Error = never

export const useTrips = (user: User) => {
  return useMutation<Data, Error>('getTrips', async () => FetchTrips(await user.getIdToken()))
}
