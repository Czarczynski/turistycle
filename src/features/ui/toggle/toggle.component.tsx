import React, { VFC } from 'react'
import { Switch, View } from 'react-native'

import styles from './toggle.styles'

interface ToggleProps {
  disabled?: boolean
  value: boolean
  onValueChange: (value: boolean) => void
}

export const Toggle: VFC<ToggleProps> = ({ disabled = false, value, onValueChange }) => {
  return (
    <View style={styles.container}>
      <Switch
        disabled={disabled}
        trackColor={{ false: styles.trackColorFalse.color, true: styles.trackColorTrue.color }}
        ios_backgroundColor={styles.trackColorFalse.color}
        onValueChange={onValueChange}
        value={value}
      />
    </View>
  )
}
