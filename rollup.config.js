//https://github.com/HarveyD/react-component-library/blob/master/rollup.config.js

import typescript from "rollup-plugin-typescript2";
import sass from "rollup-plugin-sass";
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import resolve from "rollup-plugin-node-resolve";

import pkg from "./package.json";

export default {
  input: "src/index.tsx",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: "named",
      sourcemap: true
    },
    {
      file: pkg.module,
      format: "es",
      exports: "named",
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    resolve({
      browser: true
    }),
    typescript({
      rollupCommonJSResolveHack: true,
      exclude: "**/__tests__/**",
      clean: true
    }),
    commonjs({
      include: ["node_modules/**"],
      exclude: ["**/*.stories.js"],
      namedExports: {
        "node_modules/react-is/index.js": ["isValidElementType"],
        "node_modules/react/index.js": [
          "Children",
          "Component",
          "PropTypes",
          "createElement",
          "createContext",
          "forwardRef"
        ],
        "node_modules/react-dom/index.js": ["render"]
      }
    }),
    sass({
      insert: true
    })
  ]
};
