// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Portfolio = defineDocumentType(() => ({
  name: 'Portfolio',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    tags: {
      type: 'list',
      of: { type: 'string' },
      required: true,
    },
    abstract: { type: 'string', required: true },
    role: { type: 'string', required: true }, 
    date: { type: 'date', required: true },
    client: { type: 'string', required: true },
    media_type: { type: 'string', required: true},
    link: { type: 'string', required: true },
  },
  computedFields: {
    url: { type: 'string', resolve: (portfolio) => `/portfolio/${portfolio._raw.flattenedPath}` },
  },
}))

export default makeSource({
  contentDirPath: 'portfolio', 
  documentTypes: [Portfolio]
})