import { useFocusEffect } from '@react-navigation/native'
import { StackHeaderProps } from '@react-navigation/stack'
import * as Haptics from 'expo-haptics'
import { ImpactFeedbackStyle } from 'expo-haptics'
import { observer } from 'mobx-react-lite'
import React, { VFC, useRef } from 'react'
import { Pressable, TextInput } from 'react-native'

import { Icon } from '~features/ui/icon'
import { NavigationHeader } from '~features/ui/navigation-header/navigation-header.component'
import { SearchInput } from '~features/ui/search-input'

import { useStores } from '~hooks/use-store'

import styles from './header-search.styles'

export const HeaderSearch: VFC<StackHeaderProps> = observer(({ scene }) => {
  const {
    searchFilters: { setIsFilterModalVisible, searchQuery, setSearchQuery },
  } = useStores()
  const inputRef = useRef<TextInput>(null)
  const { progress } = scene

  useFocusEffect(() => {
    inputRef.current?.focus()
  })

  return (
    <NavigationHeader progress={progress}>
      <>
        <SearchInput
          ref={inputRef}
          onChangeText={setSearchQuery}
          onSubmitEditing={setSearchQuery}
          value={searchQuery}
        />
        <Pressable
          hitSlop={5}
          style={styles.iconWrapper}
          onPress={async () => {
            setIsFilterModalVisible(true)
            await Haptics.impactAsync(ImpactFeedbackStyle.Light)
          }}
        >
          <Icon name={'sliders'} size={20} />
        </Pressable>
      </>
    </NavigationHeader>
  )
})
