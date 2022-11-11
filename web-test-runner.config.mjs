import rollupCommonjs from "@rollup/plugin-commonjs";
import { esbuildPlugin } from "@web/dev-server-esbuild";
import { fromRollup } from "@web/dev-server-rollup";
import rollupAlias from "@rollup/plugin-alias";

// const commonjs = fromRollup(rollupCommonjs);

// the commonjs plugin
const pluginAlias = fromRollup(rollupAlias);

const config = {
  files: ["**/*.test.ts", "**/*.test.tsx"],
  nodeResolve: true,
  plugins: [
    pluginAlias({
      entries: ["react", "react-dom", "aria-query"].map((pkg) => ({
        find: `"${pkg}"`,
        replacement: `${process.cwd()}/dist/test/${pkg}.bundle.js`,
      })),
    }),
    esbuildPlugin({ ts: true, tsx: true }),
  ],
};

export default config;
