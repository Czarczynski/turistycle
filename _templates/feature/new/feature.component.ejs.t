---
to: src/features/<%= section %>/<%= h.changeCase.paramCase(name) %>/<%= h.changeCase.paramCase(name) %>.component.tsx
unless_exists: true
---

import React, { VFC } from 'react'
import { View, Text } from 'react-native'
import { useTranslation } from 'react-i18next'

import useStyles from './<%= h.changeCase.paramCase(name) %>.styles'

interface <%= h.capitalize(h.changeCase.camelCase(name)) %>Props {
  title?: string;
}

export const <%= h.capitalize(h.changeCase.camelCase(name)) %>: VFC<<%= h.capitalize(h.changeCase.camelCase(name)) %>Props> = ({ title = "<%= h.capitalize(h.changeCase.camelCase(name)) %>" }) => {
  const { t } = useTranslation('<%= h.changeCase.paramCase(name) %>');
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
