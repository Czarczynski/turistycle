import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native'
import * as Haptics from 'expo-haptics'
import { ImpactFeedbackStyle } from 'expo-haptics'
import React, { FC, useEffect, useMemo, useRef } from 'react'
import { Animated, Easing, LayoutAnimation, PanResponder, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import styles from './navigation-header.styles'

interface NavigationHeaderProps {
  children?: React.ReactElement
  transparent?: boolean
  floating?: boolean
  progress?: any
}

export const NavigationHeader: FC<NavigationHeaderProps> = ({
  children,
  transparent,
  floating,
  progress,
}) => {
  const animated = progress ? Animated.add(progress.current, progress.next || 0) : null

  const opacity = animated
    ? animated.interpolate({
        inputRange: [0, 1, 2],
        outputRange: [0, 1, 0],
      })
    : 1

  return (
    <Animated.View style={{ opacity }}>
      <SafeAreaView
        edges={['top']}
        style={[styles.container, transparent && styles.containerTransparent]}
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
      </SafeAreaView>
    </Animated.View>
  )
}
