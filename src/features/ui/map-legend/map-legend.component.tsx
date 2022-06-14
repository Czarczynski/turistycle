import { BlurView } from 'expo-blur'
import React, { VFC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Animated, Image, LayoutAnimation, Pressable, Text, View } from 'react-native'

import ImagePinEdge from '~assets/images/pin-edge.png'
import ImagePinLocal from '~assets/images/pin-local.png'
import ImagePinOnline from '~assets/images/pin-online.png'

import styles from './map-legend.styles'

interface MapLegendProps {}

export const MapLegend: VFC<MapLegendProps> = () => {
  const { t } = useTranslation('map-legend')
  const [expanded, setExpanded] = useState(false)

  const changeAnimate = () => {
    LayoutAnimation.configureNext(
      LayoutAnimation.create(100, LayoutAnimation.Types.linear, LayoutAnimation.Properties.opacity),
    )
    setExpanded(!expanded)
  }
  return (
    <Animated.View style={[styles.container, !expanded && styles.containerCollapsed]}>
      <BlurView style={[styles.blurContainer, !expanded && styles.blurContainerCollapsed]}>
        <Pressable style={styles.contentContainer} onPress={changeAnimate}>
          {!expanded && <Text style={[styles.title]}>L</Text>}
          {expanded && (
            <>
              <Text style={[styles.title]}>{t`legend`}</Text>
              <Text style={[styles.subtitle]}>{t`pins`}</Text>
              <View style={styles.pinContainer}>
                <Image source={ImagePinOnline} style={styles.pinImage} />
                <Text style={styles.pinTitle}>{t`pin-online`}</Text>
              </View>
              <View style={styles.pinContainer}>
                <Image source={ImagePinLocal} style={styles.pinImage} />
                <Text style={styles.pinTitle}>{t`pin-local`}</Text>
              </View>
              <View style={styles.pinContainer}>
                <Image source={ImagePinEdge} style={styles.pinImage} />
                <Text style={styles.pinTitle}>{t`pin-edge`}</Text>
              </View>
            </>
          )}
        </Pressable>
      </BlurView>
    </Animated.View>
  )
}
