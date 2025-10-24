import type { Config } from "prettier";
import type * as TailwindCss from "prettier-plugin-tailwindcss";

import defaultConfig from "./default.js";

export default function config(options: TailwindCss.PluginOptions): Config {
	const tailwindCssOptions: TailwindCss.PluginOptions = {
		...options,
		tailwindFunctions: options.tailwindFunctions ?? [
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

	return {
		...defaultConfig,
		plugins: [
			...defaultConfig.plugins,
			new URL(import.meta.resolve("prettier-plugin-tailwindcss")).pathname,
		],
		...tailwindCssOptions,
	};
}
