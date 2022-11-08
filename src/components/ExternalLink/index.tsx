import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ComponentProps, ReactNode } from "react";
import { ExternalLinkContainer } from "./styles";

// Dizendo que o componente tem tudo que o container pode ter (container link) e também o text
type ExternalLinksProps = ComponentProps<typeof ExternalLinkContainer> &{
    text: string;
    // Para adiconar icone
    icon?: ReactNode;
    // Variante
    variant?: "iconLeft"

}
export function ExternalLink({text, icon, ...rest}: ExternalLinksProps){
    return (
        <ExternalLinkContainer {...rest}>
            {text}
            {/* Se não existir icon, exibe o icone abaixo */}
            {icon ?? <FontAwesomeIcon icon={faUpRightFromSquare} />}
        </ExternalLinkContainer>
    )
}