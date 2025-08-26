# Path Aliases Configuration

This project has been configured with TypeScript and Vite path aliases to make imports cleaner and more maintainable.

## Available Aliases

- `@/*` - Maps to `src/*` (root src directory)
- `@/components/*` - Maps to `src/components/*`
- `@/components` - Maps to `src/components`
- `@/assets/*` - Maps to `src/assets/*`
- `@/assets` - Maps to `src/assets`
- `@/hooks/*` - Maps to `src/hooks/*`
- `@/hooks` - Maps to `src/hooks`
- `@/utils/*` - Maps to `src/utils/*`
- `@/utils` - Maps to `src/utils`
- `@/types/*` - Maps to `src/types/*`
- `@/types` - Maps to `src/types`
- `@/lib/*` - Maps to `src/lib/*`
- `@/lib` - Maps to `src/lib`

## Usage Examples

### Before (relative imports)

```typescript
import Home from "./components/Home";
import HeroSection from "./Landing/Hero";
import { someUtil } from "../../../utils/helpers";
```

### After (path aliases)

```typescript
import Home from "@/components/Home";
import HeroSection from "@/components/Landing/Hero";
import { someUtil } from "@/utils/helpers";
```

## Benefits

1. **Cleaner imports** - No more `../../../` relative path chains
2. **Easier refactoring** - Moving files doesn't break imports
3. **Better IDE support** - Auto-completion works better with absolute paths
4. **Consistent imports** - All imports use the same pattern

## Configuration Files

The path aliases are configured in:

- `tsconfig.app.json` - For TypeScript compiler
- `vite.config.ts` - For Vite bundler

Both files need to be kept in sync when adding new aliases.
