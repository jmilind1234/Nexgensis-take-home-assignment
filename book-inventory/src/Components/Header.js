import {HeaderContainer, Logo, PagesHolder, Links} from "../Components-styles/header";

function Header(){
    return(
        <HeaderContainer>
            <Logo>Nexgensis</Logo>
            <PagesHolder>
                <Links href="#">Home</Links>
                <Links href="contact">Contact</Links>
                <Links href="about">About</Links>
                <Links href="feedback">Feedback</Links>
            </PagesHolder>
        </HeaderContainer>
    )
}

export default Header;