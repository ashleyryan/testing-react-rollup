import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import html from '@rollup/plugin-html';
import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';

export default {
    input: 'src/index.tsx',
    output: {
        dir: './dist',
        format: 'iife'
    },
    plugins: [
        commonjs(),
        replace({
            preventAssignment: true,
            'process.env.NODE_ENV': JSON.stringify('development'),
        }),
        nodeResolve(),
        typescript(),
        html({
            title: 'My App',
            meta: [
                { charset: 'UTF-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
            ],
        }),
        serve({
            open: true,
            contentBase: './dist',
        }),
        livereload({
            watch: './dist',
        }),
    ],
};
