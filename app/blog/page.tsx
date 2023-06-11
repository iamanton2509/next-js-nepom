'use client';
import {Metadata} from 'next';
import {useState, useEffect} from 'react';
import LoadingPosts from './loading';
import Posts from '@/components/Posts';
import {getAllPosts} from '@/services/getPosts';
import PostSearch from '@/components/PostSearch';

// async function getData(){
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
//         next: {
//             revalidate: 60
//         }
//     });

//     if (!response.ok){
//         throw new Error('Unable to fetch posts');
//     }
//     return response.json();
// }

// export const metadata: Metadata = {
//     title: "Blog | Create Next App"
// }
// export default async function Blog()
export default function Blog() {
    // const posts = await getData();
    const [posts, setPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        getAllPosts()
        .then(setPosts)
        .finally(() => setLoading(false))
    }, []);

    return (
        <>
            <h1>Blog</h1>
            <PostSearch onSearch={setPosts} />
            {loading ? <LoadingPosts /> : (
                <Posts posts={posts} />
            )}
        </>
    );
}