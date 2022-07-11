import { getAuth } from 'firebase/auth'
import React, { VFC } from 'react'
import { View } from 'react-native'

import { useTroubleshooting } from '~features/troubleshooting/hooks/use-troubleshooting'
import { IssueList } from '~features/ui/issue-list'

import styles from './troubleshooting.styles'

interface TroubleshootingScreenProps {
  title?: string
}

export const TroubleshootingScreen: VFC<TroubleshootingScreenProps> = () => {
  const { data: issues, isLoading } = useTroubleshooting(getAuth().currentUser!)
  return (
    <View style={styles.container}>
      <IssueList data={issues} isLoading={isLoading} />
    </View>
  )
}
