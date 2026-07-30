# Architectural Decisions

## 2026-07-30

### Markdown processor

Astro's `markdown.smartypants` option has been deprecated.

OpenTagalog uses the new Markdown processor configuration instead.

Smartypants remains disabled because enabling it currently causes mojibake (`Don’t`, `“`) when rendering MDX content collections on Windows.

Issue reported upstream:
https://github.com/withastro/astro/issues/17555

When the upstream issue is resolved, this decision should be revisited.

## 2026-07-30

- Use Astro Content Collections for lessons.
- Disable `markdown.smartypants` because of Windows mojibake issue during `render()`.
- Use `LessonLayout.astro` for all lessons.
- Store lessons as `.mdx`.
- Use reusable components for vocabulary cards and quizzes.
- Prefer HTML entities for UI icons instead of raw emoji in `.astro` files.