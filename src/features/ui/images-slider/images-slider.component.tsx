import * as Haptics from 'expo-haptics'
import { ImpactFeedbackStyle } from 'expo-haptics'
import React, { VFC } from 'react'
import { FlatList, Image, StyleProp, View, ViewStyle, ViewToken } from 'react-native'

import { RatingStars } from '~features/ui/rating-stars'

import layout from '~styles/layout'

import styles from './images-slider.styles'

interface ImagesSliderProps {
  style?: StyleProp<ViewStyle>
  images: string[]
  rating: number
}

export const ImagesSlider: VFC<ImagesSliderProps> = ({ images, style, rating }) => {
  const snapToInterval = layout.window.width - 44
  const flatListRef = React.useRef<FlatList>(null)
  const onFlatListRef = React.useRef(
    async (viewableItems: { viewableItems: Array<ViewToken>; changed: Array<ViewToken> }) => {
      if (viewableItems.changed[0]) {
        await Haptics.impactAsync(ImpactFeedbackStyle.Light)
      }
    },
  )
  const flatListConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 })

  return (
    <View style={[styles.container, style]}>
      <FlatList
        ref={flatListRef}
        onViewableItemsChanged={onFlatListRef.current}
        showsHorizontalScrollIndicator={false}
        viewabilityConfig={flatListConfigRef.current}
        decelerationRate={0.99}
        snapToAlignment={'center'}
        snapToInterval={snapToInterval}
        horizontal={true}
        style={styles.slides}
        contentContainerStyle={styles.slidesContainer}
        keyExtractor={(_, index) => `${index}`}
        data={images}
        renderItem={({ item, index }: { item: string; index: number }) => (
          <ImageElement key={index} imageUri={item} />
        )}
      />
      <RatingStars rating={rating} />
    </View>
  )
}

interface ImageElementProps {
  imageUri: string
}

const ImageElement: VFC<ImageElementProps> = ({ imageUri }) => {
  return (
    <Image source={{ uri: imageUri }} style={[styles.image, { width: layout.window.width - 45 }]} />
  )
}
