import { StackHeaderProps } from '@react-navigation/stack'
import React, { VFC } from 'react'
import { useTranslation } from 'react-i18next'
import { TextInput } from 'react-native'

import { NavigationHeader } from '~features/ui/navigation-header/navigation-header.component'

import styles from './header-search.styles'

export const HeaderSearch: VFC<StackHeaderProps> = ({ scene }) => {
  const { t } = useTranslation('header')
  const { progress } = scene

  return (
    <NavigationHeader progress={progress}>
      <TextInput style={styles.search} placeholder={'some placeholder'} />
    </NavigationHeader>
  )
}
