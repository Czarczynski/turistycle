import React, { VFC } from 'react'
import { useTranslation } from 'react-i18next'
import { Text, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Icon } from '~features/ui/icon'

import styles from './my-toast.styles'

export interface MyToastProps {
  type: 'success' | 'error' | 'info'
  text1?: string
  text2?: string
  onPress?: () => void
}

export const MyToast: VFC<MyToastProps> = ({ onPress, type, text1, text2 }) => {
  const { t } = useTranslation('my-toast')
  const insets = useSafeAreaInsets()
  return (
    <View style={[styles.container, styles[type], { marginTop: insets.top || 16 }]}>
      <View>
        {text1 && <Text style={[styles.title, styles[type]]}>{t(text1)}</Text>}
        {text2 && <Text style={[styles.description, styles[type]]}>{t(text2)}</Text>}
      </View>
      <TouchableOpacity onPress={onPress}>
        <Icon name={'x'} color={styles[type].color} />
      </TouchableOpacity>
    </View>
  )
}
