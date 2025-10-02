import { RuleConfigSeverity } from "@commitlint/types";
import { defineConfig } from "cz-git";

const typeDescriptions = {
	feat: "[releasable] A new feature",
	fix: "[releasable] A bug fix",
	deps: "[releasable] Dependency updates",
	docs: "Documentation only changes",
	style: "Changes that do not affect the meaning of the code",
	refactor: "A code change that neither fixes a bug nor adds a feature",
	perf: "A code change that improves performance",
	test: "Adding missing tests or correcting existing tests",
	build: "Changes that affect the build system or external dependencies",
	ci: "Changes to CI configuration files and scripts",
	chore: "Other changes that don't modify src or test files",
	revert: "Reverts a previous commit",
};

const maxTypeLength = Math.max(
	...Object.keys(typeDescriptions).map((type) => type.length),
);

const types = Object.entries(typeDescriptions).map(([value, description]) => ({
	value,
	name: `${value}:${" ".repeat(maxTypeLength - value.length + 1)}${description}`,
}));

export default defineConfig({
	extends: [
		"@commitlint/config-conventional",
		"@commitlint/config-pnpm-scopes",
	],
	rules: {
		"subject-case": [
			RuleConfigSeverity.Error,
			"never",
			["start-case", "pascal-case", "upper-case"],
		],
		"type-enum": [
			RuleConfigSeverity.Error,
			"always",
			types.map(({ value }) => value),
		],
	},
	prompt: {
		types,
		enableMultipleScopes: true,
	},
});
