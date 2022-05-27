---
to: src/screens/<%= h.changeCase.paramCase(name) %>/<%= h.changeCase.paramCase(name) %>.container.tsx
unless_exists: true
---

import React from 'react'

import { RootStackScreenProps } from '~navigation/index.navigator'
import { <%= h.capitalize(h.changeCase.camelCase(name)) %>Screen } from './<%= h.changeCase.paramCase(name) %>.screen'

export default function ({ navigation }: RootStackScreenProps<"<%= h.capitalize(h.changeCase.camelCase(name)) %>">) {
  return <<%= h.capitalize(h.changeCase.camelCase(name)) %>Screen />;
}
