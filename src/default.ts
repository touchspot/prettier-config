import { createRequire } from "node:module";

import type { Config } from "prettier";

const require = createRequire(import.meta.url);

export default {
	plugins: [
		require.resolve("prettier-plugin-packagejson"),
		require.resolve("prettier-plugin-toml"),
	],
} satisfies Config;
