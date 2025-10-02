---
name: commit
description: ステージングされたファイルをコミット
---

Use the @agent-commit-helper subagent to create a conventional commit with the currently staged files.

The subagent will:

1. Validate staged files with `lint-staged`
2. Analyze the staged changes
3. Create a conventional commit message following this repository's standards
4. Execute the commit and report the result
