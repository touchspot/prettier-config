import type { Config } from "prettier";

export default {
	experimentalOperatorPosition: "start",
	plugins: [
		new URL(import.meta.resolve("prettier-plugin-packagejson")).pathname,
		new URL(import.meta.resolve("prettier-plugin-toml")).pathname,
		new URL(import.meta.resolve("prettier-plugin-sh")).pathname,
	],
} satisfies Config;
