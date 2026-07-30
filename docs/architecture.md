# OpenTagalog Architecture

## Project Overview

OpenTagalog is a free, open-source educational website for learning Tagalog from beginner to advanced level.

The primary goals are:

* Teach practical everyday Tagalog.
* Keep lessons short and interactive.
* Make learning enjoyable.
* Be usable on desktop and mobile devices.
* Keep the website fast with minimal JavaScript.
* Allow future contributors to add lessons without modifying the site's code.

---

# Technology

Framework:

* Astro

Content:

* Astro Content Collections
* MDX lesson files

Language:

* TypeScript where appropriate

Hosting:

* Static website

---

# Project Structure

src/

* components/

  * Reusable UI components.
  * Vocabulary cards.
  * Audio buttons.
  * Quiz components.
  * Navigation.
  * Dictionary components.

* content/

  * lessons/

    * One MDX file per lesson.

* layouts/

  * Shared layouts.
  * LessonLayout.astro is used for every lesson.

* pages/

  * Static pages.
  * Lesson routes.
  * Dictionary.
  * About.
  * Future grammar reference.

---

# Lesson Structure

Each lesson consists of:

* Title
* Description
* Difficulty level
* Lesson content
* Vocabulary
* Example sentences
* Exercises
* Quiz
* Navigation to previous and next lesson

Lessons are written in MDX.

Content should remain educational.

Presentation should be handled by reusable Astro components.

---

# Course Structure

The complete course is planned to contain approximately 180 lessons.

Suggested progression:

1. Greetings
2. Introductions
3. Numbers
4. Time
5. Days and Months
6. Family
7. Food
8. Shopping
9. Directions
10. Travel

...

Advanced lessons include:

* Grammar
* Verb focus system
* Sentence construction
* Formal vs informal speech
* Idioms
* Conversation practice

---

# Components

Current components:

* LessonCard
* LessonLayout
* VocabularyCard
* AudioButton

Future components:

* Quiz
* Flashcard
* Progress tracker
* Grammar box
* Warning box
* Culture note
* Native speaker audio
* Pronunciation comparison

---

# Audio

Current implementation:

Browser speech synthesis.

Future implementation:

Native speaker recordings stored under:

public/audio/

Each vocabulary word should eventually have an associated audio file.

---

# Dictionary

A searchable Tagalog-English dictionary will be integrated into the website.

Future lessons should reuse dictionary entries instead of duplicating vocabulary definitions.

---

# Design Principles

The website should:

* Remain simple.
* Be fast.
* Be accessible.
* Work well on mobile.
* Avoid unnecessary JavaScript.
* Prefer reusable components over duplicated code.

---

# Important Technical Decisions

* Lessons use Astro Content Collections.
* Lesson pages are rendered using `render()` from `astro:content`.
* `markdown.smartypants` is disabled because it causes mojibake when rendering content collections on the current Windows development environment.
* HTML entities are preferred over raw emoji in `.astro` files to avoid encoding issues during development.
* Lesson content should contain educational material only. Presentation belongs in reusable components.

---

# Development Philosophy

When adding new functionality:

1. Create a reusable component.
2. Keep lessons as simple as possible.
3. Avoid duplicating code.
4. Design features so they can be reused by all 180 lessons.

This project is intended to grow over many years. Maintainability is more important than implementing shortcuts.
