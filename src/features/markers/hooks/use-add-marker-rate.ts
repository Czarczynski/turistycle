import { useMutation } from 'react-query'

import { SendMarkerRate } from '~utils/api'

import { Rate } from '~models/marker.model'
import { User } from '~models/user.model'

type Data = void
type Error = never

export const useAddMarkerRate = (user: User, idMarker: string, rate: Rate) => {
  return useMutation<Data, Error>('addRate', async () =>
    SendMarkerRate(await user.getIdToken(), idMarker, rate),
  )
}
