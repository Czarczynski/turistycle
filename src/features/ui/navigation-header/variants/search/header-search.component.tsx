import { StackHeaderProps } from '@react-navigation/stack'
import React, { VFC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Pressable } from 'react-native'

import { Icon } from '~features/ui/icon'
import { NavigationHeader } from '~features/ui/navigation-header/navigation-header.component'
import { SearchInput } from '~features/ui/search-input'

import styles from './header-search.styles'

export const HeaderSearch: VFC<StackHeaderProps> = ({ scene }) => {
  const { t } = useTranslation('header')
  const [value, setValue] = useState('')
  const { progress } = scene

  return (
    <NavigationHeader progress={progress}>
      <>
        <SearchInput onChangeText={setValue} onSubmitEditing={setValue} value={value} />
        <Pressable style={styles.iconWrapper}>
          <Icon name={'sliders'} size={20} />
        </Pressable>
      </>
    </NavigationHeader>
  )
}
