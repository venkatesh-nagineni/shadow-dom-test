import { Config } from "@stencil/core";

export const config: Config = {
  namespace: "stencil-starter-project-name",
  buildEs5: 'prod', // for legacy browsers lke ie11, safari 10, edge etc..
  sourceMap: true,
  extras: {
      cssVarsShim: true,
      dynamicImportShim: true,
      safari10: true,
      scriptDataOpts: true,
      shadowDomShim: true,
      slotChildNodesFix: true,
  },
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader"
    },
    {
      type: "docs-readme"
    },
    {
      type: "www",
      serviceWorker: null // disable service workers
    }
  ]
};
