import {HeaderContainer, Logo, PagesHolder, Links} from "../Components-styles/header";
import { NavLink } from "react-router-dom";
function Header(){
    return(
        <HeaderContainer>
            <Logo>Nexgensis</Logo>
            <PagesHolder>
                <NavLink to="/">Home</NavLink>
                <NavLink to="contact">Contact</NavLink>
                <NavLink to="about">About</NavLink>
                <NavLink to="feedback">Feedback</NavLink>
            </PagesHolder>
        </HeaderContainer>
    )
}

export default Header;