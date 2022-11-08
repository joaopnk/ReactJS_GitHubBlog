import { ExternalLink } from "../../../../components/ExternalLink";
import { ProfileContainer, ProfileDetails, ProfilePicture } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons';

export function Profile(){
    return (
        <>
            <ProfileContainer>
                <ProfilePicture src="https://github.com/joaopnk.png" />
                <ProfileDetails>
                    <header>
                        <h1>João Pedro</h1>
                        <ExternalLink text="Github" href="#" />
                    </header>
                    <p>
                        Passionate about web development and always looking to learn new technologies.
                    </p>
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faGithub} />
                            Joaopnk
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faBuilding} />
                            Labsoft
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faUserGroup} />
                            13 Seguidores
                        </li>
                    </ul>
                </ProfileDetails>
            </ProfileContainer>
        </>
    )
}