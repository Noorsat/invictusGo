import React from 'react';
import './../../App.css';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import burgerImg from './burger.png';
import burgerClose from './close.png';
import logo from './logo.png';
import {Link} from 'react-scroll';
import bg from './club-bg.png';

const Header = ({burger,setBurger, clubName}) => {
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
                <HeaderWrapper className={`${burger === true ? 'active' : ''}`}>
                    <HeaderLogo>
                        <NavLink to="/" exact>
                            <img src={logo} alt="Logo" />
                        </NavLink>
                    </HeaderLogo>
                    <HeaderNav>
                        <img src={burgerImg} alt="burger" onClick={burgerHandler}/>
                        <ul>
                            <li><NavLink to="/" exact>ГЛАВНАЯ</NavLink></li>
                            <li><Link  to="clubs" spy={true} smooth={true} duration={100}>КЛУБЫ</Link></li>
                            <li><Link  to="subscription" spy={true} smooth={true} duration={100} offset={450}>АБОНЕМЕНТЫ</Link></li>
                            <li><Link  to="questions" spy={true} smooth={true} duration={100}>ВОПРОСЫ</Link></li>
                            <li><NavLink to="/contacts">КОНТАКТЫ</NavLink></li>
                        </ul>
                    </HeaderNav>
                </HeaderWrapper>
                <BurgerMenu>
                    { burger === true ?  <ul>
                        <li><NavLink to="/" exact>ГЛАВНАЯ</NavLink></li>
                        <li><Link  to="clubs" spy={true} smooth={true}>КЛУБЫ</Link></li>
                        <li><Link  to="subscription" spy={true} smooth={true} duration={100} offset={450}>АБОНЕМЕНТЫ</Link></li>
                        <li><Link  to="questions" spy={true} smooth={true} duration={100}>ВОПРОСЫ</Link></li>
                        <li><NavLink to="/contacts">КОНТАКТЫ</NavLink></li>
                    </ul> : null}
                </BurgerMenu>
                <MainTitle>
                    {clubName}
                </MainTitle>
                <MainButton>
                    <NavLink to="/">Виртуальный тур</NavLink>
                </MainButton>
            </Container>
        </HeaderSection>
    )
}

const HeaderSection = styled.header`
    background:url(${bg});
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    height:100vh;
`;

const Container = styled.div`
    max-width: 1415px;
    margin: 0 auto;
`;

const MainTitle = styled.div`
    font-family:'Neue bold';
    color:#fff;
    letter-spacing:2px;
    font-size:72px;
    font-weight:800;
    line-height: 75px;
    text-align:center;
    margin-top:93px;
    margin-bottom:105px;
`;

const MainButton = styled.div`
    font-weight:600;
    color:#fff;
    font-size:18px;
    line-height: 22px;
    text-align: center;
    letter-spacing: 1px;
    a{
        background: #C11B1B;
        padding:25px 175px;
        color:#fff;
        text-decoration:none;
    }
`;

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    &.active{
        background:#000;
        padding-bottom:30px;
    }
`;

const HeaderLogo = styled.div`
    img{
        margin-top: 35px;
    }
    @media (max-width:1280px){
        img{
            margin-left:30px;
        }
    }
`

const HeaderNav = styled.nav`
    ul{
        display:flex;
    }
    img{
        display:none;
    }
    li{
        color: #fff;
        font-weight: 500;
        font-size: 14px;
        text-decoration:none;  
    }
    a{
        color: #fff;
        font-weight: 500;
        font-size: 14px;
        margin-right: 50px;
        text-decoration:none;
    }
    @media (max-width:940px){
        img{
            display:block;
            margin-right:37px;
            margin-top: 20px;
        }
        ul{
            display:none;
        }
    }
`

const HeaderMainLeft = styled.div`
    margin-top:250px;
`;

const HeaderMainRight = styled.div``;

const HeaderMain = styled.div`
    display:flex;
    justify-content:space-between;
        @media (max-width:755px){
        max-width:60%;
        margin: 100px auto 0;
    }
    @media (max-width:420px){
        margin-top:30px;
        max-width:90%!important;
    }
    @media (width:320px){
        margin-top:50px!important;
    }
`;

const HeaderTitle = styled.div`
    font-size: 55px;
    color:#fff;
    letter-spacing: 2px;
    font-weight: 800;
    font-family:'Neue bold';
    margin-bottom: 80px;
    @media (max-width:420px){
        margin-top:80px!important;
        font-size:46px;
    }
    @media (width:320px){
        font-size:30px;
        margin-top:0px;
    }
`;

const HeaderText = styled.div`
    color: #fff;
    font-weight: 500;
    font-size: 18px;
    text-align: center;
    line-height: 22px;
    margin-bottom: 75px;
    @media (max-width:420px){
        font-size:15px;
        margin-top:30px;
        width:100%;
        line-height: 27px!important;
    }
    @media (width:320px){
        margin-top:15px;
        width:100%!important;

    }
`;

const HeaderButton = styled.div`
    a{
        background: #c11b1b;
        border: 2px solid #c11b1b;
        color: #fff;
        text-align: center;
        font-weight: bold;
        font-size: 18px;
        padding: 25px 172px;
        text-decoration:none;
    }
    @media (max-width:660px){
        a{
            padding:13px 40px;
            font-size:18px!important;
        }
    }
`

const BurgerMenu = styled.div`
    position:absolute;
    width:100%;
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
    li:first-child a{
        color: #C11B1B;
    }
`



export default Header;