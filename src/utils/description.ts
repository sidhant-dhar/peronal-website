import type { CollectionEntry } from 'astro:content'
import MarkdownIt from 'markdown-it'

type ExcerptScene = 'list' | 'meta' | 'og' | 'rss'

const parser = new MarkdownIt()

// Generate an excerpt from Markdown content
export function generateExcerpt(
  content: string,
  _: ExcerptScene,
): string {
  if (!content)
    return ''

  const length = 140

  // Remove all HTML tags and decode HTML entities
  const plainText = parser.render(content)
    .replace(/<[^>]*>/g, '')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, '\'')
    .replace(/&nbsp;/g, ' ')

  // Replace line breaks with spaces
  const normalizedText = plainText.replace(/\s+/g, ' ')
  const excerpt = normalizedText.slice(0, length).trim()
  // Add ellipsis if text was truncated
  return normalizedText.length > length ? `${excerpt}...` : excerpt
}

// Automatically generate a description for the article
export function generateDescription(
  post: CollectionEntry<'posts'>,
  scene: ExcerptScene,
): string {
  // If the article already has a description, return it directly
  if (post.data.description)
    return post.data.description

  return generateExcerpt(post.body, scene)
}
