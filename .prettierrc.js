module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 100,
  semi: false,
  importOrderParserPlugins: [
    'typescript',
    'jsx',
    'classProperties',
    '["decorators", { "decoratorsBeforeExport": true }]',
  ],
  importOrder: [
    '^~(?!features|hooks|models|utils|styles|screens)',
    '^~screens',
    '^~features',
    '^~(hooks|utils|styles)',
    '^~models',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}
