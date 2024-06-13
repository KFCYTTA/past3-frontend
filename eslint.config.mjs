// @ts-check

import eslint from "@eslint/js"
import reactJsxRuntime from "eslint-plugin-react/configs/jsx-runtime.js"
import reactRecommended from "eslint-plugin-react/configs/recommended.js"
import typescript from "typescript-eslint"

export default typescript.config(
  eslint.configs.recommended,
  reactRecommended,
  reactJsxRuntime,
  ...typescript.configs.strict,
)
