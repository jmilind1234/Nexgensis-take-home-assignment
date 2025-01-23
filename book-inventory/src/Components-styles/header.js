import styled from "styled-components";

export const HeaderContainer = styled.div`
    overflow : hidden;
    background-color:rgb(252, 127, 127);
    padding: 20px 10px;
    border: 1px solid black;
    border-radius: 5px;
`;

export const Links = styled.a`
    float: left;
    color: black;
    text-align: center;
    padding: 12px;
    text-decoration: none;
    font-size: 18px; 
    line-height: 25px;
    border-radius: 4px;
`;

export const Logo = styled(Links)`
    font-size: 25px;
    font-weight: bold;
`
export const PagesHolder = styled.div`
    float: right;
`

