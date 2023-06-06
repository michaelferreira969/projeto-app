import logo from "../../img/logo.png"
import { HeaderContainer } from "./Header.styles"

export function Header() {
    return (
        <HeaderContainer>
            <img src={logo} alt="Logo"/>
        </HeaderContainer>
    )
}