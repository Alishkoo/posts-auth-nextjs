'use client'

import Link from "next/link"
import { Post } from "../context/posts"

type PostItemProps = {
  post: Post;
};

export default function PostItem({ post } : PostItemProps) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-xl">
        <img
          src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*z_5sz44FOBGUwhQqplFotw.jpeg"
          alt="Blog Post Cover Image"
          className="w-100 h-100 rounded-t-lg object-cover"
        />
        <div className="p-6 space-y-4">
          <h2 className="text-2xl font-bold">{post.title}</h2>
          <div className="flex items-center space-x-4 text-gray-500 dark:text-gray-400">
            <div className="flex items-center space-x-2">
              <div>
                <img 
                  src="https://miro.medium.com/v2/resize:fit:4800/format:webp/1*AFQ29SfdjBdj7NxKUXCHSw.jpeg" 
                  alt="Author Avatar" 
                  className="h-8 w-8 rounded-full object-cover"
                />
              </div>
              <span className="text-sm font-medium">Views : {post.views}</span>
            </div>
            <span className="text-sm">Likes: {post.reactions.like} <br/> Dislikes: {post.reactions.dislike}</span>
          </div>
          <p className="text-gray-700 dark:text-gray-300">
            {post.body}
          </p>
          <Link
            href={`/post/${post.id}`}
            className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            prefetch={false}
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
