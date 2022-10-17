import rollupCommonjs from '@rollup/plugin-commonjs';
import { esbuildPlugin } from '@web/dev-server-esbuild';
import { fromRollup } from '@web/dev-server-rollup';

const commonjs = fromRollup(rollupCommonjs);

const config = {
    files: ['**/*.test.ts', '**/*.test.tsx'],
    nodeResolve: true,
    plugins: [
        // commonjs({
        //     // include: [
        //     //     // the commonjs plugin is slow, list the required packages explicitly:
        //     //     'node_modules/react-dom/**/*',
        //     // ],
        // }),
        esbuildPlugin({ ts: true }),
    ]
};

export default config;