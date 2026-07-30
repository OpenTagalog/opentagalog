# Architectural Decisions

## 2026-07-30

- Use Astro Content Collections for lessons.
- Disable `markdown.smartypants` because of Windows mojibake issue during `render()`.
- Use `LessonLayout.astro` for all lessons.
- Store lessons as `.mdx`.
- Use reusable components for vocabulary cards and quizzes.
- Prefer HTML entities for UI icons instead of raw emoji in `.astro` files.