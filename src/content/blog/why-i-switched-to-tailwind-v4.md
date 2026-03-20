---
title: 'Why I Switched from Tailwind CSS v3 to v4'
description: 'After months of using Tailwind v4 in production, here is what changed, what improved, and what caught me off guard.'
pubDate: '2025-03-20'
heroImage: '/images/blog-placeholder-1.jpg'
category: 'Development'
---

After running Tailwind CSS v4 in production on my personal portfolio and client projects for the past few months, I wanted to share my honest experience. Spoiler: most of it is positive, but there are a few gotchas you should know about.

## The Good: CSS-First Configuration

The biggest shift in Tailwind v4 is the move to **CSS-first configuration**. Instead of managing a separate `tailwind.config.js` file, you now define everything directly in your CSS using the `@theme` directive.

```css
@theme {
  --color-primary: #c0c1ff;
  --color-secondary: #ec6a06;
  --font-family-headline: 'Space Grotesk', sans-serif;
}
```

This feels more natural. You're styling in the same place where styling happens. No context switching between files.

## The Good: Built-in Dark Mode Support

Dark mode is finally first-class. The `@custom-variant dark` directive lets you define dark mode as a Tailwind variant:

```css
@custom-variant dark (&:where(.dark, .dark *));
```

Then use it naturally:

```html
<div class="bg-white dark:bg-gray-900 text-black dark:text-white">
  Adaptive content
</div>
```

No plugins, no extra configuration. It just works.

## The Gotcha: Upgrade Path for Existing Projects

If you're migrating from v3, the path isn't completely smooth. Some plugins don't work yet, and you may need to adjust how you've structured custom utilities. The `@apply` directive behavior changed slightly too.

My recommendation: start fresh with v4 on a new project, or budget time for thorough testing if you're migrating an existing codebase.

## The Verdict

Tailwind CSS v4 represents a significant step forward. The CSS-first approach aligns with how modern styling actually works, and the performance improvements are real. If you've been waiting to upgrade, now is a good time to take the leap—just test thoroughly first.

Would I go back to v3? Not for new projects.
