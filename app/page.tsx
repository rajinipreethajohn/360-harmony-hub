import Link from 'next/link'
import { getAllEditions } from '../lib/editions'
import EditionCard from '../components/EditionCard'


export default async function HomePage() {
  const editions = await getAllEditions()
  return (
    <>
      <h1 className="text-4xl font-serif text-center mb-3">🌗 360 Harmony Hub</h1>
      <p className="text-center mb-8 italic text-gray-600">
        Balance in motion — where logic meets intuition, science meets soul.
      </p>
      <div className="space-y-6">
        {editions.map((edition) => (
          <EditionCard key={edition.slug} edition={edition} />
        ))}
      </div>
      <div className="text-center mt-10">
        <Link href="/about" className="underline">About →</Link>
      </div>
    </>
  )
}
