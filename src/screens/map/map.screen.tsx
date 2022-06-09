import { observer } from 'mobx-react-lite'
import React, { VFC } from 'react'
import { View } from 'react-native'
import MapView from 'react-native-maps'

import { useMarkers } from '~features/markers/hooks/use-markers'
import { MapLegend } from '~features/ui/map-legend'
import { MarkerList } from '~features/ui/marker-list'

import styles from './map.styles'

interface MapScreenProps {}
export const MapScreen: VFC<MapScreenProps> = observer(() => {
  const { isLoading, data: markers } = useMarkers()
  return (
    <View style={styles.container}>
      <MapView
        showsCompass={true}
        compassOffset={{
          x: 0,
          y: 50,
        }}
        style={styles.map}
        showsUserLocation={true}
        userInterfaceStyle={'light'}
        followsUserLocation={false}
        showsMyLocationButton={true}
        // focusable={true}
      >
        {/*<MapViewDirections*/}
        {/*  onReady={(e)=>console.log({...e})}*/}
        {/*  mode={'BICYCLING'}*/}
        {/*  origin={{ longitude: markers![8].longitude, latitude: markers![8].latitude }}*/}
        {/*  waypoints={[{ longitude: markers![5].longitude, latitude: markers![5].latitude }]}*/}
        {/*  destination={{*/}
        {/*    longitude: markers![2].longitude,*/}
        {/*    latitude: markers![2].latitude,*/}
        {/*  }}*/}
        {/*  strokeWidth={3}*/}
        {/*  strokeColor={'#4cceee'}*/}
        {/*  apikey={GOOGLE_API_KEY}*/}
        {/*/>*/}
        {!isLoading && <MarkerList markers={markers!} />}
      </MapView>
      <MapLegend />
    </View>
  )
})
