import type { Config } from "prettier";

export default {
	experimentalTernaries: true,
	experimentalOperatorPosition: "start",
	plugins: [
		new URL(import.meta.resolve("prettier-plugin-packagejson")).pathname,
		new URL(import.meta.resolve("prettier-plugin-toml")).pathname,
	],
} satisfies Config;
