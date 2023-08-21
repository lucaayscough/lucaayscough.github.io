// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Portfolio = defineDocumentType(() => ({
  name: 'Portoflio',
  filePathPattern: `**/*.mdx`,
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
  },
  computedFields: {
    url: { type: 'string', resolve: (portfolio) => `/portfolio/${portfolio._raw.flattenedPath}` },
  },
}))

export default makeSource({ contentDirPath: 'portfolio', documentTypes: [Portfolio] })