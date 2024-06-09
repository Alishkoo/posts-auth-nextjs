'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import postService from '../services/postService'

export interface Post {
    id: number;
    title: string;
    body: string;
    tags: string[];
    reactions:{
        like: number;
        dislike: number;
    }
    views: number;
    userId: number;
}

interface PostsContextType{
    posts: Post[];
    setPosts: (posts: Post[]) => void;
}

export const PostsContext = createContext<PostsContextType | undefined>(undefined);

const Provider: React.FC <{ children: ReactNode}> = ({children}) => {
    const [posts, setPosts] = useState<Post[]>([]);

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

    const valueToShare = {
        posts,
        setPosts
    }

    return (
        <PostsContext.Provider value={valueToShare}>
            {children}
        </PostsContext.Provider>
    );
};

const usePosts = () => {
    const context = useContext(PostsContext);

    if(!context){
        throw new Error('usePosts must be used within a PostsProvider');
    }
    return context;
};

export default function parsePosts(input: any): Post[] {
    return input.posts.map((post: any) => ({
        id: post.id,
        title: post.title,
        body: post.body,
        tags: post.tags,
        reactions: {
            like: post.reactions.likes,
            dislike: post.reactions.dislikes
        },
        views: post.views,
        userId: post.userId
    }));
}

export {Provider, usePosts}
