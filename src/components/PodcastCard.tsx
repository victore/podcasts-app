import * as React from 'react'
import { Link } from '@tanstack/react-router'

interface PodcastCardProps {
  id: string
  title: string
  author: string
  coverImage: string
  description: string
}

export function PodcastCard({ id, title, author, coverImage, description }: PodcastCardProps) {
  return (
    <Link
      to={`/podcast/${id}`}
      className="block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
    >
      <div className="p-6">
        <div className="flex items-center space-x-4">
          <img
            src={coverImage}
            alt={title}
            className="w-20 h-20 rounded-lg object-cover"
          />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <p className="text-sm text-gray-600">{author}</p>
          </div>
        </div>
        <p className="mt-4 text-sm text-gray-500 line-clamp-2">{description}</p>
      </div>
    </Link>
  )
} 