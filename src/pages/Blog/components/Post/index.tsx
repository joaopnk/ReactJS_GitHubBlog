import { PostContainer } from "./styles";

export function Post(){
    return (
        <PostContainer to="/post/1">
            <div>
                <strong>ReactJS_DTMoney</strong>
                <span>Há 4 dias atrás</span>
            </div>
            <p>
                Financial control project focused on API consumption (simulating using JSONServer), accessibility and performance
            </p>
        </PostContainer>
    )
}