'use client';
import {useState} from 'react';
import {getPostsBySearch} from '@/services/getPosts';

type Props = {
    onSearch: (value: any[]) => void;
}

const PostSearch = ({onSearch}: Props) => {
    const [search, setSearch] = useState('');

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        const posts = await getPostsBySearch(search);
        onSearch(posts);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                value={search} 
                onChange={e => setSearch(e.target.value)} 
                placeholder='Search'
                type='search'
            />
            <button type='submit'>Search</button>
        </form>
    );
}

export default PostSearch;