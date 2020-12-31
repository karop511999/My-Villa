import React from 'react'
import styled,{css}from 'styled-components/macro';

import {Link} from 'react-router-dom';
import {menuData} from '../data/MenuData';
import { Button } from './Buttons';
import Bars from '../images/bars.svg';
import {GiCrystalBars} from 'react-icons/gi';

const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  background: red;
`;

const NavLink=css`
color:#fff;
display: flex;
align-items: center;
padding: 0 1rem;
height: 100%;
cursor:pointer;
text-decoration: none;
`;

const Logo = styled(Link)`
     ${NavLink}
     font-style: italic;
     &:hover{
        transform: translateY(-2px);
    }
`;

const MenuBar= styled(GiCrystalBars)`
  display: none;
  @media screen and(max-width: 768px)
{
    display: block;
}
`;

const NavMenu= styled.div`
display: flex;
align-items: center;
margin-right: -48px;
@media screen and  (max-width: 768px){
    display: none;
}
`;

const NavMenuLinks= styled(Link)`
${NavLink}
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
            <Logo to='/'>My Villa</Logo>
            <MenuBar />
                <NavMenu>
                    {menuData.map((item, index) =>(
                        <NavMenuLinks to={item.link} key={index}>{item.title} </NavMenuLinks>
                    ))}
                 </NavMenu>
                 <NavBtn>
                     <Button to='/contact' primary='true'>Contact us</Button>
                </NavBtn>
        </Nav>
    )
}

export default Navbar

