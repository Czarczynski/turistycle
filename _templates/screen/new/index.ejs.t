---
to: src/screens/<%= h.changeCase.paramCase(name) %>/index.ts
unless_exists: true
---

export { default as <%= h.capitalize(h.changeCase.camelCase(name)) %>Screen } from './<%= h.changeCase.paramCase(name) %>.container'
