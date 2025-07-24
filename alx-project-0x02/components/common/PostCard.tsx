import React from 'react'
import { PostProps } from '@/interfaces'
const PostCard = ({
    title, content, userId
}:PostProps) => {
  return (
    <div className="bg-white rounded-lg shadow p-5 border border-gray-200 hover:shadow-md transition">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{content}</p>
      <p className="text-sm text-gray-500">User ID: {userId}</p>
    </div>
  )
}

export default PostCard