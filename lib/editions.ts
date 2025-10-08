import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const EDITIONS_DIR = path.join(process.cwd(), 'content/editions')

export type EditionMeta = {
  slug: string
  title: string
  date: string
  summary?: string
}

// Get all editions (for homepage + archive)
export async function getAllEditions(): Promise<EditionMeta[]> {
  const files = fs.readdirSync(EDITIONS_DIR).filter((f) => f.endsWith('.mdx'))
  const editions = files.map((filename) => {
    const slug = filename.replace(/\\.mdx$/, '')
    const raw = fs.readFileSync(path.join(EDITIONS_DIR, filename), 'utf-8')
    const { data } = matter(raw)
    return {
      slug,
      title: data.title as string,
      date: data.date as string,
      summary: data.summary as string | undefined,
    }
  })
  // Sort by most recent first
  return editions.sort((a, b) => (a.date < b.date ? 1 : -1))
}

// Get a single edition (for /editions/[slug])
export async function getEditionBySlug(slug: string) {
  const file = path.join(EDITIONS_DIR, `${slug}.mdx`)
  const raw = fs.readFileSync(file, 'utf-8')
  const { content, data } = matter(raw)
  return {
    slug,
    content,
    ...(data as { title: string; date: string; summary?: string }),
  }
}
