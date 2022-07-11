import React, { VFC } from 'react'
import { FlatList, Text, View } from 'react-native'

import { Icon } from '~features/ui/icon'
import { Issue } from '~features/ui/issue'

import { GithubIssue } from '~models/github-issue.model'

import styles from './issue-list.styles'

interface IssueListProps {
  data?: GithubIssue[]
  isLoading: boolean
}

export const IssueList: VFC<IssueListProps> = ({ data, isLoading }) => {
  return (
    <FlatList
      ListHeaderComponent={Header}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      data={data}
      ItemSeparatorComponent={Separator}
      refreshing={isLoading}
      renderItem={({ item }) => <Issue key={item.id} issue={item} />}
    />
  )
}
const Header = () => (
  <View style={styles.header}>
    <Icon name={'repeat'} color={styles.headerIcon.color} />
    <Text style={styles.headerText}>
      Take a look on exising issues.{'\n'}Maybe you will find something simillar
    </Text>
  </View>
)

const Separator = () => <View style={styles.separator} />
