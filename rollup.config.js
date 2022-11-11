import nodeResolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";
import html from "@rollup/plugin-html";
import livereload from "rollup-plugin-livereload";
import serve from "rollup-plugin-serve";

const ejsBundles = ["react", "react-dom", "aria-query"].map((pkg) => ({
  input: `./test/lib/${pkg}.js`,
  treeshake: false,
  output: [
    {
      file: `./dist/test/${pkg}.bundle.js`,
      format: "esm",
    },
  ],
  plugins: [
    nodeResolve(),
    commonjs(),
    replace({
      preventAssignment: true,
      "process.env.NODE_ENV": "'development'",
    }),
  ],
}));

export default [
  ...(process.env.NODE_ENV === "test" ? ejsBundles : []),
  {
    input: "src/index.tsx",
    output: [
      {
        dir: "./dist",
        format: "iife",
      },
    ],
    plugins: [
      commonjs(),
      replace({
        preventAssignment: true,
        "process.env.NODE_ENV": JSON.stringify(
          process.env.NODE_ENV || "development"
        ),
      }),
      nodeResolve(),
      typescript(),
      html({
        title: "My App",
        meta: [
          { charset: "UTF-8" },
          {
            name: "viewport",
            content: "width=device-width, initial-scale=1.0",
          },
        ],
      }),
      process.env.NODE_ENV === "development" &&
        serve({
          open: true,
          contentBase: "./dist",
        }),
      process.env.NODE_ENV === "development" &&
        livereload({
          watch: "./dist",
        }),
    ],
  },
];
