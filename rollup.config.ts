import peerDepsExternal from "rollup-plugin-peer-deps-external"
import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import typescript from "rollup-plugin-typescript2"
import json from "@rollup/plugin-json"
import copy from "rollup-plugin-copy"
import url from "rollup-plugin-url"

const packageJson = require("./package.json")

export default {
  input: "src/index.ts",
  output: [
    { file: packageJson.main,   format: "cjs", sourcemap: true },
    { file: packageJson.module, format: "esm", sourcemap: true }
  ],
  plugins: [
    typescript({
      tsconfig: 'tsconfig.json',
    }),
    peerDepsExternal(),
    resolve(),
    commonjs(),
    //typescript({ useTsconfigDeclarationDir: true }),
    copy(),
    json(),
    url({
      include: ['**/*.woff', '**/*.woff2'],
      limit: Infinity,
    })
  ],
  external: ["react", "@material-ui/core"]
}
