---
name: Extend tailwind-merge when adding custom @theme tokens
description: Custom Tailwind v4 @theme tokens (especially text-*) must be registered in extendTailwindMerge or cn() will silently strip classes
type: feedback
---

When adding custom `@theme` tokens in Tailwind v4 that share a prefix with another utility group (e.g. `--text-*` for font-size vs `text-*` for color), you must also update `extendTailwindMerge` in `src/lib/utils.ts`.

**Why:** `tailwind-merge` maintains its own static registry of known utilities. It doesn't auto-detect custom `@theme` tokens. Without registration, `twMerge` misidentifies custom font-size classes like `text-display-xl` as color classes, silently dropping them when they "conflict" with actual color classes like `text-text`. This caused all typography to render at browser-default 16px.

**How to apply:**
- Any time a new `--text-*` token is added to `@theme` in `globals.css`, add the corresponding suffix to the `extend.theme.text` array in `extendTailwindMerge` inside `src/lib/utils.ts`.
- The `text-` prefix is uniquely dangerous — it maps to both `font-size` and `color`. Other prefixes (`bg-`, `border-`, `font-`) don't have this ambiguity.
- Consider adding a test that asserts `cn(textVariants({ variant }))` preserves expected classes to catch this class of silent breakage.