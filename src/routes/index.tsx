import * as fs from 'node:fs'
import { useRouter, createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { Layout } from '../components/Layout'
import { PodcastCard } from '../components/PodcastCard'

const filePath = 'count.txt'

async function readCount() {
  return parseInt(
    await fs.promises.readFile(filePath, 'utf-8').catch(() => '0'),
  )
}

const getCount = createServerFn({
  method: 'GET',
}).handler(() => {
  return readCount()
})

const updateCount = createServerFn({ method: 'POST' })
  .validator((d: number) => d)
  .handler(async ({ data }) => {
    const count = await readCount()
    await fs.promises.writeFile(filePath, `${count + data}`)
  })

// Mock data - replace with actual data fetching
const mockPodcasts = [
  {
    id: '1',
    title: 'Tech Talk Today',
    author: 'John Doe',
    coverImage: 'https://picsum.photos/200',
    description: 'The latest in technology news and discussions.',
  },
  {
    id: '2',
    title: 'Science Hour',
    author: 'Jane Smith',
    coverImage: 'https://picsum.photos/201',
    description: 'Exploring the wonders of science and discovery.',
  },
  {
    id: '3',
    title: 'Business Insights',
    author: 'Mike Johnson',
    coverImage: 'https://picsum.photos/202',
    description: 'Deep dives into business strategies and market trends.',
  },
]

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <Layout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Featured Podcasts</h1>
          <p className="mt-2 text-gray-600">Discover and listen to your favorite podcasts</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockPodcasts.map((podcast) => (
            <PodcastCard key={podcast.id} {...podcast} />
          ))}
        </div>
      </div>
    </Layout>
  )
}