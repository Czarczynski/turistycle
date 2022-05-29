import React, { VFC } from 'react'
import { FlatList, Image, StyleProp, View, ViewStyle } from 'react-native'

import { RatingStars } from '~features/ui/rating-stars'

import layout from '~styles/layout'

import styles from './images-slider.styles'

interface ImagesSliderProps {
  style?: StyleProp<ViewStyle>
  images: string[]
  rating: number
}

export const ImagesSlider: VFC<ImagesSliderProps> = ({ images, style, rating }) => {
  const [padding, setPadding] = React.useState<number>(0)
  const snapToInterval = layout.window.width - padding * 2
  const flatListRef = React.useRef<FlatList>(null)

  const flatListConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 })

  const findPadding = (ref: View | null) => {
    ref?.measure((x, y, w, h, pageX) => {
      setPadding(pageX)
    })
  }
  return (
    <View ref={findPadding} style={[styles.container, style]}>
      <FlatList
        ref={flatListRef}
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
          <ImageElement key={index} imageUri={item} shrink={padding * 2} />
        )}
      />
      <RatingStars rating={rating} />
    </View>
  )
}

interface ImageElementProps {
  imageUri: string
  shrink: number
}

const ImageElement: VFC<ImageElementProps> = ({ imageUri, shrink }) => {
  console.log(imageUri)
  return (
    <Image
      source={{ uri: imageUri }}
      style={[styles.image, { width: layout.window.width - shrink }]}
    />
  )
}
