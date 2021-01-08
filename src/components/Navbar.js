import React from 'react'
import styled,{css}from 'styled-components/macro';
import {Link} from 'react-router-dom';
import {menuData} from '../data/MenuData';
import { Button } from './Buttons';
import Bars from '../images/bars.svg';
import {GiCrystalBars} from 'react-icons/gi';
import { IoSend } from 'react-icons/io5';



const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
   
`;

const Navink=css`
color:#fff;
display: flex;
align-items: center;
padding: 0 1rem;
height: 100%;
cursor:pointer;
text-decoration: none;
`;

const Logo = styled(Link)`
     ${Navink}
     font-style: italic;
     &:hover{
        transform: translateY(-2px);
    }
`;

const MenuBar= styled.i`
  display: none;
  @media screen and(max-width: 768px)
{
    display: block;
    background-image: url(${Bars});
    background-size: contain;
    height: 40px;
    width: 40px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%,25%);
}
`;

const NavMenu= styled.div`
display: flex;
align-items: center;
margin-right: 30px;
@media screen and  (max-width: 768px){
    display: none;
}
`;

const NavMenuLinks= styled(Link)`
${Navink}
`;

const NavBtn=styled.div`
@media screen and (max-width: 768px){
    display: none;
}
    display: flex;
    align-items: center;
    margin-right: 24px;
`;



const Navbar = () => {
    return (
        <Nav>
            <Logo to='/'>My VILLA</Logo>
            <MenuBar />
                <NavMenu>
                    {menuData.map((item, index) =>(
                        <NavMenuLinks to={item.link} key={index}>{item.title} </NavMenuLinks>
                    ))}
                 </NavMenu>
                 <NavBtn>
                     <Button to={'/Contact'} primary="true" >Contact us</Button>
                     
                </NavBtn>
        </Nav>
    )
}

export default Navbar

