import { getAuth } from 'firebase/auth'
import React, { VFC } from 'react'
import { useTranslation } from 'react-i18next'
import { View } from 'react-native'

import { UserRowList } from '~features/ui/user-row-list'
import { useUsers } from '~features/users/hooks/use-users'

import styles from './new-conversation.styles'

interface NewConversationScreenProps {}

export const NewConversationScreen: VFC<NewConversationScreenProps> = () => {
  const { t } = useTranslation('new-conversation')
  const { data: users } = useUsers(getAuth().currentUser!)
  return <View style={styles.container}>{users && <UserRowList data={users} />}</View>
}
