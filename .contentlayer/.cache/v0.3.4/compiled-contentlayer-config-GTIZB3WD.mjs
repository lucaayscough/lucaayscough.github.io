// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Portfolio = defineDocumentType(() => ({
  name: "Portoflio",
  filePathPattern: `**/*.mdx`,
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true }
  },
  computedFields: {
    url: { type: "string", resolve: (portfolio) => `/portfolio/${portfolio._raw.flattenedPath}` }
  }
}));
var contentlayer_config_default = makeSource({ contentDirPath: "portfolio", documentTypes: [Portfolio] });
export {
  Portfolio,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-GTIZB3WD.mjs.map
