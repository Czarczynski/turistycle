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
}

export const NavigationHeader: FC<NavigationHeaderProps> = ({
  children,
  transparent,
  floating,
}) => {
  const navigation = useNavigation()
  const route = useRoute()

  /** ONE START */
  const animated = useRef(new Animated.Value(0)).current
  useFocusEffect(() => {
    console.log(route.name, 'hello ')

    Animated.sequence([
      Animated.timing(animated, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
    ]).start()

    return () => {
      Animated.timing(animated, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
        easing: Easing.linear,
      }).start()
    }
  })

  const opacity = animated.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  })
  /** ONE END */
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
