import { createRequire } from "node:module";

import type { Config } from "prettier";
import type { PluginOptions } from "prettier-plugin-tailwindcss";

import config from "./default.js";

const require = createRequire(import.meta.url);

const { plugins, ...defaultOptions } = config;

export default {
	...defaultOptions,
	plugins: [...plugins, require.resolve("prettier-plugin-tailwindcss")],
	tailwindFunctions: [
		"classnames",
		"clsx",
		"cn",
		"ctl",
		"cva",
		"twJoin",
		"twMerge",
		"tv",
	],
} satisfies Config & PluginOptions;
