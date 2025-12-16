import { getCollection } from 'astro:content'

export async function getBlogSidebar() {
  const blogEntries = await getCollection('blog')

  const sidebarItems = blogEntries
    .sort(
      (a, b) =>
        new Date(b.data.date).getTime() - new Date(a.data.date).getTime(),
    )
    .map((entry) => ({
      label: entry.data.linkTitle ?? entry.data.title,
      link: `/blog/${entry.id}`,
    }))

  return [
    {
      label: 'Overview',
    },
    {
      label: 'Blog',
      items: [...sidebarItems],
      collapsed: false,
    },
  ]
}
