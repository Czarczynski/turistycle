import { rgba } from 'polished'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Pressable, TextInput, View } from 'react-native'

import { Icon } from '~features/ui/icon'

import styles from './search-input.styles'

interface SearchInputProps {
  value?: string
  onChangeText: (input: string) => void
  onSubmitEditing: (input: string) => void
}

export const SearchInput = React.forwardRef<TextInput, SearchInputProps>(
  ({ onSubmitEditing, onChangeText, value }, ref) => {
    const { t } = useTranslation('search-input')

    const hasValue = Boolean(value)
    return (
      <View style={styles.container}>
        <Icon name={'search'} size={20} />
        <TextInput
          ref={ref}
          style={styles.input}
          value={value}
          returnKeyType={'search'}
          onSubmitEditing={(e) => onSubmitEditing(e.nativeEvent.text)}
          placeholderTextColor={rgba(styles.input.color, 0.5)}
          placeholder={t`placeholder`}
          onChangeText={onChangeText}
        />
        {hasValue && (
          <Pressable onPress={() => onChangeText('')}>
            <Icon name={'x'} color={styles.input.color} size={20} />
          </Pressable>
        )}
      </View>
    )
  },
)
