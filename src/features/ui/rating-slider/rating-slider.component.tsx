import MultiSlider from '@ptomasroos/react-native-multi-slider'
import React, { VFC } from 'react'
import { View } from 'react-native'

import { RatingStars } from '~features/ui/rating-stars'

import styles from './rating-slider.styles'

interface RatingSliderProps {
  onChange: (value: number) => void
  value: number
}

export const RatingSlider: VFC<RatingSliderProps> = ({ onChange, value }) => {
  return (
    <View>
      <RatingStars rating={value} background={false} />
      <View style={styles.sliderWrapper}>
        <MultiSlider
          containerStyle={styles.slider}
          values={[2.5]}
          min={0}
          max={5.5}
          enabledTwo={false}
          sliderLength={160}
          trackStyle={styles.track}
          onValuesChange={([val]) => onChange(val)}
          step={0.5}
        />
      </View>
    </View>
  )
}
