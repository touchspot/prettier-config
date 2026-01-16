import {
	getDefaultAttributes,
	getDefaultCallees,
} from "eslint-plugin-better-tailwindcss/defaults";
import type { Config } from "prettier";
import type * as TailwindCss from "prettier-plugin-tailwindcss";

import defaultConfig from "./default.js";

type CommonOptions = {
	readonly attributes?: readonly string[] | undefined;
	readonly callees?: readonly string[] | undefined;
};

type V4Options = {
	readonly version?: 4;
	readonly entry: string;
};

type V3Options = {
	readonly version: 3;
	readonly config: string;
};

type Options = CommonOptions & (V3Options | V4Options);

export default function config(options: Options): Config {
	const tailwindCssOptions: TailwindCss.PluginOptions = {
		...(options.version === 3
			? { tailwindConfig: options.config }
			: { tailwindStylesheet: options.entry }),
		tailwindAttributes: [
			...(options.attributes
				?? getDefaultAttributes().map((attribute) =>
					typeof attribute === "string" ? attribute : attribute[0],
				)),
		],
		tailwindFunctions: [
			...(options.callees
				?? getDefaultCallees().map((callee) =>
					typeof callee === "string" ? callee : callee[0],
				)),
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
