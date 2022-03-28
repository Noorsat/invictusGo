import React from 'react';
import styled from 'styled-components';
import logo from './logo.png'
import {NavLink} from 'react-router-dom';
import burgerImg from './burger.png';
import burgerClose from './close.png';

const Header = ({burger,setBurger}) => {
    const burgerHandler = (e) => {
        setBurger(!burger);
        if (burger === true){
            e.target.src = burgerImg;
        }else{
            e.target.src = burgerClose;
        }
    }
    return (
        <HeaderSection>
            <Container>
                <HeaderWrapper>
                    <HeaderLogo>
                        <NavLink to="/" exact>
                            <img src={logo} alt="Logo" />
                        </NavLink>
                    </HeaderLogo>
                    <HeaderList>
                        <img src={burgerImg} alt="Burger" onClick={burgerHandler}/> 
                        <ul>
                            <li><NavLink to="/" exact>ГЛАВНАЯ</NavLink></li>
                            <li><NavLink to="/clubs" exact >КЛУБЫ</NavLink></li>
                            <li><NavLink to="/subscription">АБОНЕМЕНТЫ</NavLink></li>
                            <li><NavLink to="/coachs">ТРЕНЕРЫ</NavLink></li>
                            <li><NavLink to="/contacts">КОНТАКТЫ</NavLink></li>
                        </ul>
                    </HeaderList>
                </HeaderWrapper>
                <BurgerMenu>
                    { burger === true ?  <ul>
                        <li><NavLink to="/" exact>ГЛАВНАЯ</NavLink></li>
                        <li><NavLink to="/clubs">КЛУБЫ</NavLink></li>
                        <li><NavLink to="/subscription">АБОНЕМЕНТЫ</NavLink></li>
                        <li><NavLink to="/coachs">ТРЕНЕРЫ</NavLink></li>
                        <li><NavLink to="/contacts">КОНТАКТЫ</NavLink></li>
                    </ul> : null}
                </BurgerMenu>
            </Container>
        </HeaderSection>
    )
}  

const HeaderSection = styled.header`
    background:#000;
    padding:30px 0;
`;

const Container = styled.div`
    max-width:1280px;
    margin: 0 auto;
`

const HeaderWrapper = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
`

const HeaderLogo = styled.div`
    @media (max-width:1280px){
        img{
            margin-left:20px;
        }
    }
`

const HeaderList = styled.div`
    ul{
        display:flex;
        margin-top:18px;
    }
    li{
        margin-right:70px;
        font-size:14px;
        font-weight:500;
    }
    li a{
        color:#fff;
        text-decoration:none;
    }
    li:last-child{
        margin-right:0;
    }
    img{
        display:none;
    }
    @media (max-width:1280px){
        ul{
            margin-right:20px;
        }
    }
    @media (max-width:940px){
        img{
            display:block;
            margin-right:37px;
        }
        ul{
            display:none;
        }
    }
`


const BurgerMenu = styled.div`
    position:absolute;
    width:100%;
    margin-top:30px;
    ul{
        width:100%;
        text-align:center;
        padding-left:0;
    }
    li{
        background:#000;
        padding:15px 0;
        border-bottom: 0.5px solid #5F5F5F;
    }
    li:first-child{
        border-top: 0.5px solid #5F5F5F;
    }
    a{
        color:#fff;
        text-decoration:none;
        font-size:16px;
        font-weight:600;
    }
    li:nth-child(2) a{
        color: #C11B1B;
    }
`


export default Header;