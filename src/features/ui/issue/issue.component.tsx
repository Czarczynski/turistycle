import React, { VFC, useState } from 'react'
import { Animated, LayoutAnimation, Pressable, Text, View } from 'react-native'

import { GithubIssue } from '~models/github-issue.model'

import styles from './issue.styles'

interface IssueProps {
  issue: GithubIssue
}

export const Issue: VFC<IssueProps> = ({ issue }) => {
  const [expanded, setExpanded] = useState(false)
  const toggleDescription = () => {
    LayoutAnimation.configureNext(
      LayoutAnimation.create(100, LayoutAnimation.Types.linear, LayoutAnimation.Properties.scaleXY),
    )
    setExpanded((state) => !state)
  }
  return (
    <Pressable style={styles.container} onPress={toggleDescription}>
      <Animated.View style={[styles.innerContainer, expanded && styles.containerExpanded]}>
        <Text style={styles.title}>{issue.title}</Text>
        <Text style={styles.date}>{issue.createdAt.toFormat('LLL dd, H:mm')}</Text>
        <Text ellipsizeMode={'tail'} style={styles.description}>
          {issue.description}
        </Text>
      </Animated.View>
      <View style={styles.dots}>
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>
    </Pressable>
  )
}
