import { BlurView } from 'expo-blur'
import React, { FC } from 'react'
import { Animated, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import styles from './navigation-header.styles'

interface NavigationHeaderProps {
  children?: React.ReactElement
  transparent?: boolean
  floating?: boolean
  progress?: { [name: string]: Animated.AnimatedInterpolation }
}

export const NavigationHeader: FC<NavigationHeaderProps> = ({
  children,
  transparent,
  floating,
  progress,
}) => {
  const animated = progress ? Animated.add(progress.current, progress.next || 0) : null
  const insets = useSafeAreaInsets()
  const opacity =
    animated?.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [0, 1, 0],
    }) ?? 1

  const translateY =
    animated?.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [-120, 0, -120],
    }) ?? 0

  return (
    <Animated.View style={{ opacity, transform: [{ translateY }] }}>
      <BlurView
        style={[
          styles.container,
          { paddingTop: insets.top },
          transparent && styles.containerTransparent,
        ]}
      >
        {!floating && (
          <View style={[styles.innerContainer, floating && styles.innerContainerFloating]}>
            {children}
          </View>
        )}
        {floating && (
          <View style={styles.innerContainerFloating}>
            <View style={styles.innerContainer}>{children}</View>
          </View>
        )}
      </BlurView>
    </Animated.View>
  )
}
