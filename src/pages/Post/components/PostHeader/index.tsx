import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCalendar, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { ExternalLink } from "../../../../components/ExternalLink";
import { PostHeaderContainer } from "./styles";

export function PostHeader(){
    const navigate = useNavigate();

    function goBack(){
        // Voltando uma rota
        navigate(-1);
    }

    return (
        <PostHeaderContainer>
            <header>
                <ExternalLink 
                    as="button" 
                    onClick={goBack}
                    icon={<FontAwesomeIcon icon={faChevronLeft} />} 
                    text="Voltar" 
                    href="#" 
                    variant="iconLeft"
                    />
                <ExternalLink text="Ver no Github" href="#" target="_blank"/>
            </header>

            <h1>Javascript Data types and data structures</h1>
            <ul>
                <li>
                    <FontAwesomeIcon icon={faGithub}/>
                    joaopnk
                </li>
                <li>
                    <FontAwesomeIcon icon={faCalendar} />
                    Há 2 dias
                </li>
                <li>
                    <FontAwesomeIcon icon={faComment} />
                    5 Comentararios
                </li>
            </ul>
            
        </PostHeaderContainer>
    )   
}