import { RuleConfigSeverity } from "@commitlint/types";
import { defineConfig } from "cz-git";

/** @type {import("cz-git").TypesOption[]} */
const types = [
	{
		name: "feat:     [releasable] A new feature",
		value: "feat",
	},
	{
		name: "fix:      [releasable] A bug fix",
		value: "fix",
	},
	{
		name: "deps:     [releasable] Dependency updates",
		value: "deps",
	},
	{
		name: "docs:     Documentation only changes",
		value: "docs",
	},
	{
		name: "style:    Changes that do not affect the meaning of the code",
		value: "style",
	},
	{
		name: "refactor: A code change that neither fixes a bug nor adds a feature",
		value: "refactor",
	},
	{
		name: "perf:     A code change that improves performance",
		value: "perf",
	},
	{
		name: "test:     Adding missing tests or correcting existing tests",
		value: "test",
	},
	{
		name: "build:    Changes that affect the build system or external dependencies",
		value: "build",
	},
	{
		name: "ci:       Changes to CI configuration files and scripts",
		value: "ci",
	},
	{
		name: "chore:    Other changes that don't modify src or test files",
		value: "chore",
	},
	{
		name: "revert:   Reverts a previous commit",
		value: "revert",
	},
];

export default defineConfig({
	extends: [
		"@commitlint/config-conventional",
		"@commitlint/config-pnpm-scopes",
	],
	rules: {
		"subject-case": [RuleConfigSeverity.Disabled],
		"type-enum": [
			RuleConfigSeverity.Error,
			"always",
			types.map((type) => type.value),
		],
	},
	prompt: {
		types,
		enableMultipleScopes: true,
		markBreakingChangeMode: true,
	},
});
