import { SearchInputContainer } from "./styles";
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from "react-hook-form";

const searchFormSchema = z.object({
    query: z.string()
});

type SearchFormInput = z.infer<typeof searchFormSchema>;

interface SearchInputProps{
    postLenght: number;
    getPosts: (query?: string) => Promise<void>;
}

export function SearchInput({postLenght, getPosts}: SearchInputProps){
    const {register, handleSubmit} = useForm<SearchFormInput>({
        resolver: zodResolver(searchFormSchema)
    });


    async function handleSearchPosts(data: SearchFormInput){
        await getPosts(data.query);
    }

    return (
        <SearchInputContainer onSubmit={handleSubmit(handleSearchPosts)}>
            <header>
                <h3>Publicações</h3>
                <span>{postLenght} Publicações</span>
            </header>

            <input type="text" placeholder="Buscar conteúdo" {...register("query")}/>
        </SearchInputContainer>
    )
}