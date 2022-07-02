import GeoJSON from 'geojson'
import React, { VFC, useMemo, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Pressable, Text, View } from 'react-native'
import MapView, { Geojson, Marker } from 'react-native-maps'

import { Icon } from '~features/ui/icon'

import useNavigation from '~hooks/use-navigation'
import { COLORS } from '~styles/colors'

import { Trip } from '~models/trip.model'

import styles from './trip-preview.styles'

interface TripPreviewProps {
  trip: Trip
}

export const TripPreview: VFC<TripPreviewProps> = ({ trip }) => {
  const { t } = useTranslation('trip-preview')
  const navigation = useNavigation()
  const ref = useRef<MapView>(null)
  const coordinates = useMemo(
    () =>
      trip.geoJson.features[0].geometry.coordinates.map((item) => ({
        latitude: item[1],
        longitude: item[0],
      })),
    [trip],
  )
  const fitToCoords = () => {
    ref.current?.fitToCoordinates(coordinates, {
      edgePadding: { top: 16, bottom: 32, left: 16, right: 16 },
      animated: false,
    })
  }
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate('Trace', { tripId: trip._id.$oid })}
    >
      <MapView
        ref={ref}
        mapType={'standard'}
        onLayout={fitToCoords}
        style={styles.map}
        pointerEvents={'none'}
      >
        <Geojson
          geojson={trip.geoJson as GeoJSON.GeoJSON}
          strokeColor={COLORS.greenLight}
          strokeWidth={3}
        />
        <Marker coordinate={coordinates[0]} />
        <Marker coordinate={coordinates[coordinates.length - 1]} />
      </MapView>
      <View style={styles.innerContainer}>
        <View style={styles.left}>
          <Text style={styles.title}>{trip.name}</Text>
          <Text style={styles.distance}>{trip.length / 1000}km</Text>
        </View>
        <View style={styles.right}>
          <Icon name={'chevron-right'} color={styles.icon.color} size={styles.icon.width} />
        </View>
      </View>
    </Pressable>
  )
}
