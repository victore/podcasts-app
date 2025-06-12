import { createFileRoute } from '@tanstack/react-router'
import { Layout } from '../components/Layout'

// Mock data - replace with actual data fetching
const mockPodcast = {
  id: '1',
  title: 'Tech Talk Today',
  author: 'John Doe',
  coverImage: 'https://picsum.photos/200',
  description: 'The latest in technology news and discussions.',
  episodes: [
    {
      id: '1',
      title: 'The Future of AI',
      duration: '45:30',
      date: '2024-03-15',
      description: 'Exploring the latest developments in artificial intelligence.',
    },
    {
      id: '2',
      title: 'Web Development Trends',
      duration: '38:15',
      date: '2024-03-08',
      description: 'A deep dive into modern web development practices.',
    },
  ],
}

export const Route = createFileRoute('/podcast/$id')({
  component: PodcastDetail,
})

function PodcastDetail() {
  const { id } = Route.useParams()
  // In a real app, fetch podcast data based on id
  const podcast = mockPodcast

  return (
    <Layout>
      <div className="space-y-8">
        <div className="flex items-start space-x-8">
          <img
            src={podcast.coverImage}
            alt={podcast.title}
            className="w-48 h-48 rounded-lg object-cover"
          />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{podcast.title}</h1>
            <p className="mt-2 text-xl text-gray-600">{podcast.author}</p>
            <p className="mt-4 text-gray-600">{podcast.description}</p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Episodes</h2>
          <div className="space-y-4">
            {podcast.episodes.map((episode) => (
              <div
                key={episode.id}
                className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{episode.title}</h3>
                    <p className="mt-1 text-sm text-gray-600">{episode.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">{episode.duration}</p>
                    <p className="text-sm text-gray-500">{episode.date}</p>
                  </div>
                </div>
                <button
                  className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-200"
                >
                  Play Episode
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
} 