import { useMutation } from 'react-query'

import { FetchSingleMarker } from '~utils/api'

import { Marker } from '~models/marker.model'

type Data = Marker
type Error = never

export const useMarker = (idMarker: string) => {
  return useMutation<Data, Error>(`getMarker:${idMarker}`, async () => FetchSingleMarker(idMarker))
}
