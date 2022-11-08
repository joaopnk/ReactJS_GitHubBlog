import { useCallback, useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { Post } from "./components/Post";
import { Profile } from "./components/Profile";
import { SearchInput } from "./components/SearchInput";
import { PostListContainer } from "./styles";

// Variaveis de ambiente ".env"
const username = import.meta.env.VITE_GITHUB_USERNAME;
const reponame = import.meta.env.VITE_GITHUB_REPONAME;


export interface IPost{
    title: string;
    body: string;
    created_at: string;
    number: number;
    html_url: string;
    comments: number;
    users: {
        login: string;
    };
}

export function Blog(){
    const [posts, setPosts] = useState<IPost[]>([]);

    // Estado de load para melhor experiencia do usuario
    const [isLoading, setIsLoading] = useState(true);

    const getPosts = useCallback(async (query: string = "") => {
        try{
            setIsLoading(true);
            const response = await api.get(`/search/issues?q=${query}%20repo:${username}/${reponame}`);

            console.log(response.data);
            setPosts(response.data.items);
        }
        finally{
            setIsLoading(false);
        }
    }, [posts]);

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <>
            <Profile />
            <SearchInput />
            <PostListContainer>
                {posts.map((post) => (
                    <Post 
                        key={post.number}
                        post={post}
                    />

                ))}
            </PostListContainer>
        </>
    )
}