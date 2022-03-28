import React from 'react';
import './../../App.css';
import styled from 'styled-components';
import bg from './bg.png';
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
                <HeaderWrapper className={`${burger === true ? 'active' : ''}`}>
                    <HeaderLogo>
                        <NavLink to="/" exact>
                            <img src="images/logo.png" alt="Logo" />
                        </NavLink>
                    </HeaderLogo>
                    <HeaderNav>
                        <img src={burgerImg} alt="burger" onClick={burgerHandler}/>
                        <ul>
                            <li><NavLink to="/" exact>ГЛАВНАЯ</NavLink></li>
                            <li><NavLink to="/clubs">КЛУБЫ</NavLink></li>
                            <li><NavLink to="/subscription">АБОНЕМЕНТЫ</NavLink></li>
                            <li><NavLink to="/coachs">ТРЕНЕРЫ</NavLink></li>
                            <li><NavLink to="/contacts">КОНТАКТЫ</NavLink></li>
                        </ul>
                    </HeaderNav>
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
                <HeaderMain>
                    <HeaderTitle>
                        BE ONE OF US
                    </HeaderTitle>
                    <HeaderText>
                        Сеть автоматизированных фитнес-клубов нового поколения
                        <br></br>Безлимитный абонемент всего за 9900 тг в месяц
                    </HeaderText>
                    <HeaderButton>
                        <NavLink to="/subscription">купить абонемент</NavLink>
                    </HeaderButton>
                </HeaderMain>
            </Container>
        </HeaderSection>
    )
}

const HeaderSection = styled.header`
    background-image: url(${bg});
    background-position: center;
    background-repeat: no-repeat;
    background-size:cover;
    height:100vh;
`;

const Container = styled.div`
    max-width: 1280px;
    margin: 0 auto;
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
        margin-top: 55px;
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

const HeaderMain = styled.div`
    margin-top: 135px;
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
    font-size: 70px;
    color: #fff;
    text-align: center;
    font-weight: 700;
    margin-bottom: 21px;
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
    letter-spacing: 3px;
    line-height: 22px;
    margin-bottom: 60px;
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
    text-align:center;
    a{
        background: #c11b1b;
        border: 2px solid #c11b1b;
        color: #fff;
        text-align: center;
        font-weight: bold;
        font-size: 18px;
        padding: 15px 160px;
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