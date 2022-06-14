import { BlurView } from 'expo-blur'
import { rgba } from 'polished'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Pressable, TextInput } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Icon } from '~features/ui/icon'

import styles from './message-input.styles'

interface MessageInputProps {
  value?: string
  onChangeText: (input: string) => void
  onSubmitEditing: (input: string) => void
  isFocused?: boolean
  onFocusable?: (val: boolean) => void
}

export const MessageInput = React.forwardRef<TextInput, MessageInputProps>(
  ({ onSubmitEditing, onChangeText, value, isFocused, onFocusable }, ref) => {
    const { t } = useTranslation('message-input')
    const insets = useSafeAreaInsets()
    const sendMessage = async () => {}
    return (
      <BlurView
        style={[styles.container, !isFocused && { paddingBottom: insets.bottom }]}
        intensity={50}
      >
        <TextInput
          multiline={true}
          onBlur={() => onFocusable?.(false)}
          onFocus={() => onFocusable?.(true)}
          ref={ref}
          style={styles.input}
          value={value}
          placeholderTextColor={rgba(styles.input.color, 0.5)}
          placeholder={t`placeholder`}
          onChangeText={onChangeText}
        />
        <Pressable style={styles.button} onPress={sendMessage}>
          <Icon name={'send'} size={30} color={styles.icon.color} />
        </Pressable>
      </BlurView>
    )
  },
)
