import { useNavigation } from '@react-navigation/native'
import GeoJSON from 'geojson'
import { observer } from 'mobx-react-lite'
import React, { VFC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Image, Text, TouchableHighlight, View } from 'react-native'
import MapView, { Callout, Geojson, Marker, UrlTile } from 'react-native-maps'

import { useTrip } from '~features/trips/hooks/use-trip'
import { ImagesSlider } from '~features/ui/images-slider'

import { useStores } from '~hooks/use-store'

import { User } from '~models/user.model'

import styles from './map.styles'

interface MapScreenProps {
  title?: string
}

export const MapScreen: VFC<MapScreenProps> = observer(({ title = 'MapScreen' }) => {
  const { t } = useTranslation('map')
  const navigation = useNavigation()
  const { global } = useStores()
  const { isLoading, data } = useTrip(global.user as User, '614f52807a756f54083067ae')
  if (isLoading) {
    return null
  }
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        showsUserLocation={true}
        showsMyLocationButton={true}
        followsUserLocation={true}
        userLocationPriority={'high'}
        focusable={true}
      >
        <Geojson
          geojson={data!.geoJson as GeoJSON.GeoJSON}
          strokeColor="red"
          fillColor="green"
          strokeWidth={5}
          lineCap={'round'}
        />
        {data!.markers.map((marker) => (
          <Marker
            key={marker._id.$oid}
            coordinate={{ longitude: marker.longitude, latitude: marker.latitude }}
            title={marker.name}
            pinColor={'yellow'}
          >
            <Callout tooltip style={styles.customView}>
              <View style={styles.customSlider}>
                {marker.photos.length > 0 && <ImagesSlider  images={marker.photos} rating={2}/>}
              </View>
              <Text>{marker.name}</Text>
            </Callout>
          </Marker>
        ))}
      </MapView>
    </View>
  )
})
