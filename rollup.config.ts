import peerDepsExternal from "rollup-plugin-peer-deps-external"
import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import typescript from "rollup-plugin-typescript2"
import json from "@rollup/plugin-json"
import copy from "rollup-plugin-copy"
import url from "rollup-plugin-url"
import babel from '@rollup/plugin-babel'

const packageJson = require("./package.json")

export default {
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs({
      include: 'node_modules/**',
    }),
    typescript({ useTsconfigDeclarationDir: true }),
    copy(),
    json(),
    url({
      include: ['**/*.woff', '**/*.woff2'],
      limit: Infinity,
    }),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled'
    })
  ]
}
