# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is `@touchspot/prettier-config`, a shareable Prettier configuration package with two export variants:

- Default config (`@touchspot/prettier-config`) - includes packagejson and TOML plugins
- Tailwind config (`@touchspot/prettier-config/tailwindcss`) - extends default with Tailwind CSS support

**Important**: This is an ESM-only package (no CommonJS support). All source files are in TypeScript and compiled to `dist/` using pkgroll.

## Architecture

The project has a simple two-file architecture:

- `src/default.ts` - Base Prettier config with packagejson and TOML plugins
- `src/tailwindcss.ts` - Imports and extends default config, adds Tailwind CSS plugin with custom function names (classnames, clsx, cn, ctl, cva, twJoin, twMerge, tv)

Both configs use `import.meta.resolve()` to resolve plugin paths dynamically.

## Development Commands

### Initial setup

```bash
mise run setup
# or manually:
mise install && corepack enable && pnpm install --frozen-lockfile
```

### Build

```bash
pnpm build
# or via mise:
mise run build
```

Uses pkgroll to compile TypeScript from `src/` to `dist/`.

### Quality checks

```bash
# Run all checks (format, lint, type, unused dependencies)
mise run check

# Individual checks:
pnpm check:format  # Prettier formatting
pnpm check:lint    # ESLint
pnpm check:type    # TypeScript type checking
pnpm check:unused  # Knip unused dependency detection
```

### Auto-fix

```bash
# Fix all auto-fixable issues
mise run fix

# Individual fixes:
pnpm fix:format  # Auto-format with Prettier
pnpm fix:lint    # Auto-fix ESLint issues
```

## Tooling

- **Package manager**: pnpm (version specified in `packageManager` field)
- **Build tool**: pkgroll (bundles TypeScript to ESM)
- **Task runner**: Turbo (caches build and check tasks)
- **Runtime manager**: mise (manages Node.js version and tasks)
- **Node version**: Defined in `mise.toml` (22.20.0) and `.node-version`

## Important Notes

- All checks depend on `build` output (turbo.json), so build must succeed before running checks
- The package self-references its own config via `"prettier": "./src/default.ts"` in package.json
- CI uses `.node-version` for Node.js version (GitHub Actions setup-node)
