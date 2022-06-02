import MultiSlider, { LabelProps } from '@ptomasroos/react-native-multi-slider'
import React, { VFC } from 'react'
import { Text, View } from 'react-native'

import { initialFiltersState } from '~features/filters/states/filters.state'

import styles from './slider.styles'

type distanceType = { min: number; max: number }
interface SliderProps {
  distance: distanceType
  onChange: (distance: distanceType) => void
}

export const Slider: VFC<SliderProps> = ({ distance, onChange }) => {
  return (
    <MultiSlider
      {...initialFiltersState.distance}
      values={[distance.min, distance.max]}
      trackStyle={styles.track}
      enableLabel={true}
      customLabel={CustomLabels}
      onValuesChange={([min, max]) => onChange({ min, max })}
      step={1}
      allowOverlap
      snapped
    />
  )
}

const CustomLabels: VFC<LabelProps> = ({ oneMarkerValue, twoMarkerValue }) => {
  return (
    <View style={styles.marker}>
      <Text>{oneMarkerValue} km</Text>
      <Text>{twoMarkerValue} km</Text>
    </View>
  )
}
