---
to: src/features/<%= section %>/<%= h.changeCase.paramCase(name) %>/index.ts
unless_exists: true
---

export { <%= h.capitalize(h.changeCase.camelCase(name)) %> } from './<%= h.changeCase.paramCase(name) %>.component'
