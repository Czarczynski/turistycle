import { SceneProgress } from '@react-navigation/stack/lib/typescript/src/types'
import React, { FC } from 'react'
import { Animated, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import styles from './navigation-header.styles'

interface NavigationHeaderProps {
  children?: React.ReactElement
  progress: SceneProgress
  transparent?: boolean
  floating?: boolean
}

export const NavigationHeader: FC<NavigationHeaderProps> = ({
  children,
  progress,
  transparent,
  floating,
}) => {
  const opacity = Animated.add(progress.current, progress.next || 0).interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 1, 0.5],
  })
  return (
    <Animated.View style={{ opacity }}>
      <SafeAreaView
        edges={['top']}
        style={[styles.container, transparent && styles.containerTransparent]}
      >
        <View style={[styles.innerContainer, floating && styles.innerContainerFloating]}>
          {children}
        </View>
      </SafeAreaView>
    </Animated.View>
  )
}

interface NavigationHeaderNoProgressProps {
  children?: React.ReactElement
  transparent?: boolean
  floating?: boolean
}
export const NavigationHeaderNoProgress: FC<NavigationHeaderNoProgressProps> = ({
  children,
  transparent,
  floating,
}) => {
  return (
    <SafeAreaView
      edges={['top']}
      style={[styles.container, transparent && styles.containerTransparent]}
    >
      <View style={[styles.innerContainer, floating && styles.innerContainerFloating]}>
        {children}
      </View>
    </SafeAreaView>
  )
}
