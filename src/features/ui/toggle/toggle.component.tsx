import * as Haptics from 'expo-haptics'
import React, { VFC, useEffect } from 'react'
import { Switch, View } from 'react-native'

import useIsMount from '~hooks/use-is-mount'

import styles from './toggle.styles'

interface ToggleProps {
  disabled?: boolean
  value: boolean
  onValueChange: (value: boolean) => void
}

export const Toggle: VFC<ToggleProps> = ({ disabled = false, value, onValueChange }) => {
  const isMount = useIsMount()
  useEffect(() => {
    if (!isMount) {
      return
    }

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    Haptics.selectionAsync()
  }, [value, isMount])

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
