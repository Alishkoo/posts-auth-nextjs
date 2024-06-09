'use client'

import Link from "next/link"
import parsePosts, { Post, usePosts } from "../../context/posts"
import { useEffect } from "react";
import postService from "@/app/services/postService";


type PostItemProps = {
    post: Post;
  };

interface PostProps {
    params: {
      postId: number;
    };
}

export default function PostById({params}: PostProps) {
    
    const {posts, setPosts} = usePosts();
    useEffect(() => {
        const fetchPosts = async() =>{
        try{
            const postsData = await postService.getPosts();
            
            setPosts(parsePosts(postsData));
        } catch (error){
            console.error('Failed to fetch user:', error);
        }
       };
        fetchPosts();
    }, []);


    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="max-w-xl">
          <img
            src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*z_5sz44FOBGUwhQqplFotw.jpeg"
            alt="Blog Post Cover Image"
            className="w-100 h-100 rounded-t-lg object-cover"
          />
          <div className="p-6 space-y-4">
            <h2 className="text-2xl font-bold">{posts[params.postId - 1]?.title}</h2>
            <div className="flex items-center space-x-4 text-gray-500 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <div>
                  <img 
                    src="https://miro.medium.com/v2/resize:fit:4800/format:webp/1*AFQ29SfdjBdj7NxKUXCHSw.jpeg" 
                    alt="Author Avatar" 
                    className="h-8 w-8 rounded-full object-cover"
                  />
                </div>
                <span className="text-sm font-medium">Views : {posts[params.postId - 1]?.views}</span>
              </div>
              <span className="text-sm">Likes: {posts[params.postId - 1]?.reactions.like} <br/> Dislikes: {posts[params.postId - 1]?.reactions.dislike}</span>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              {posts[params.postId - 1]?.body}
            </p>
            
          </div>
        </div>
      </div>
    );
  }
