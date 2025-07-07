import type { Config } from "prettier";
import type * as TailwindCss from "prettier-plugin-tailwindcss";

import config from "./default.js";

const { plugins, ...defaultOptions } = config;

const tailwindCssOptions: TailwindCss.PluginOptions = {
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
};

export default {
	...defaultOptions,
	plugins: [
		...plugins,
		new URL(import.meta.resolve("prettier-plugin-tailwindcss")).pathname,
	],
	...tailwindCssOptions,
} satisfies Config;
