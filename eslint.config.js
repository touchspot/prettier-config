import config, { env } from "@touchspot/eslint-config";

export default [
	...config(),
	...env.node(),
	{
		rules: {
			"import-x/no-default-export": "off",
		},
	},
];
