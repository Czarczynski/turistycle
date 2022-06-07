import { useQuery } from 'react-query'

import { FetchMarkers } from '~utils/api'

import { Marker } from '~models/marker.model'

type Data = Marker[]
type Error = never

export const useMarkers = () => {
  return useQuery<Data, Error>('getMarkers', FetchMarkers)
}
