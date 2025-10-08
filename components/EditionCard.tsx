import Link from 'next/link'

type Edition = {
  slug: string
  title: string
  date: string
  summary?: string
}

export default function EditionCard({ edition }: { edition: Edition }) {
  return (
    <Link
      href={`/editions/${edition.slug}`}
      className="block rounded-2xl border border-gray-300 p-5 bg-white hover:shadow-sm transition-shadow"
    >
      <h3 className="text-xl font-semibold mb-1">{edition.title}</h3>
      <p className="text-sm text-gray-600 mb-2">{edition.date}</p>
      {edition.summary && <p className="text-gray-700">{edition.summary}</p>}
    </Link>
  )
}
