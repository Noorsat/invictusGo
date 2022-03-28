import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import {NavLink}from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { getClub, getClubs } from '../api';
<<<<<<< HEAD
import logo from './footer-logoo.png';
import qr from './qr.png';
import insta from './insta.png';
import facebook from './facebook.png';
=======
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3


const Footer = () => {
    const [clubs, setClubs] = useState([]);
    useEffect(async () => {
        let result = await getClubs();
<<<<<<< HEAD
    setClubs(result.data)
=======
        setClubs(result.data)
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
    }, [])
    return (
        <FooterSection>
            <Container>
                <FooterColumns>
                    <FooterColumn>
                        <FooterLogo>
<<<<<<< HEAD
                            <img src={logo} />
                        </FooterLogo>
                        <FooterSocials>
                             <FooterSocial>
                                <a href="https://www.facebook.com/invictusgokz/" target="_blank"><img src={facebook}/></a>
                             </FooterSocial>
                             <FooterSocial>
                                <a href="https://www.instagram.com/invictusgo/" target="_blank"><img src={insta}/></a>
=======
                            <img src="images/footer-logoo.png" />
                        </FooterLogo>
                        <FooterSocials>
                             <FooterSocial>
                                <a href="https://www.facebook.com/invictusgokz/" target="_blank"><img src="images/facebook.png"/></a>
                             </FooterSocial>
                             <FooterSocial>
                                <a href="https://www.instagram.com/invictusgo/" target="_blank"><img src="images/insta.png"/></a>
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
                             </FooterSocial>
                        </FooterSocials>
                        <FooterPowered>
                            Powered by Invictus Fitness
                        </FooterPowered>
                    </FooterColumn>
                    <FooterColumn>
                        <FooterTitle>
                            ФРАНЧАЙЗИ
                        </FooterTitle>
                        <FooterText>
                            Invictus Franchising
                        </FooterText>
                    </FooterColumn>
                    <FooterColumn>
                        <FooterTitle>
                            МЕНЮ
                        </FooterTitle>
                        <FooterText>
                            Invictus Franchising
                        </FooterText>
                        <FooterText>
<<<<<<< HEAD
                            <NavLink to="/subscription">Абонементы</NavLink>
=======
                            <NavLink to="/subscriptions">Абонементы</NavLink>
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
                        </FooterText>
                        <FooterText>
                            <NavLink to="/clubs">Клубы</NavLink>
                        </FooterText>
                        <FooterText>
                            <NavLink to="/coachs">Тренеры</NavLink> 
                        </FooterText>
                    </FooterColumn>
                    <FooterColumn>
                        <FooterTitle>
                            <NavLink to="/contacts">КОНТАКТЫ</NavLink>
                        </FooterTitle>
                        {
                            clubs.map(item => {
                                return (
<<<<<<< HEAD
                                    <React.Fragment>
                                        <FooterText>
                                            <NavLink to="/clubs">{item.clubName}</NavLink>
                                        </FooterText>
                                        <FooterText>
                                            <NavLink to="/clubs/">{item.contactPhone}</NavLink> 
                                        </FooterText>
                                    </React.Fragment>
=======
                                    <>
                                    <FooterText>
                                        <NavLink to="/clubs">{item.clubName}</NavLink>
                                    </FooterText>
                                    <FooterText>
                                        <NavLink to="/clubs/">{item.contactPhone}</NavLink> 
                                    </FooterText>
                                    </>
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
                                )
                            })
                        }
                    </FooterColumn>
<<<<<<< HEAD
                    <FooterQR>
                        <FooterQRImage>
                            <img src={qr} />
                        </FooterQRImage>
                        <FooterQRText>
                        Скачивайте мобильное
                        <br></br>приложение Invictus GO
                        </FooterQRText>
                    </FooterQR>
=======
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
                </FooterColumns>
            </Container>
        </FooterSection>
    )
}

const FooterSection = styled.footer`
    background: #000000;
    color: #ffffff;
    a{
        color:#fff;
        text-decoration: none;
    }
`

const Container = styled.div`
    max-width:1280px;
    margin: 0 auto;
<<<<<<< HEAD
    position:relative;
=======
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
`

const FooterColumns = styled.div`
    display: flex;
    padding-top: 48px;
    flex-wrap:wrap;
    @media (max-width:1280px){
        margin-left:45px;
    }
    @media (max-width:931px){
        display:flex;
        justify-content:space-around;
    }
    @media (max-width:694px){
        display:block!important;
    }

`
<<<<<<< HEAD

const FooterQR = styled.div`
    position:absolute;
    right:0;
`;


const FooterQRImage = styled.div`
    margin-bottom:15px;
`;

const FooterQRText = styled.div`
    font-size:15px;
    letter-spacing:-0.3px;
    opacity:0.7;
    text-align: right;
    color:#fff;
`; 

=======
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
const FooterColumn = styled.div`
    margin-right: 85px;
    &:first-child{
        margin-right:20px;
    }
    &:nth-child(2){
        padding-bottom:30px;
    }
    &:nth-child(3){
        padding-bottom:30px;
    }
    &:last-child{
        padding-bottom:68px;
    }
`;

const FooterLogo = styled.div`
    margin-bottom: 30px;
`;

const FooterSocials = styled.div`
    display: flex;
    margin-bottom: 31px;
`;

const FooterSocial = styled.div`
    margin-right: 15px;
    cursor:pointer;
`; 

const FooterPowered = styled.div`
    font-size: 14px;
    font-weight: 300;
    padding-bottom: 73px;
    @media (max-width: 694px){
        padding-bottom:31px!important;
    }
`;

const FooterTitle = styled.div`
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 25px;
`;

const FooterText = styled.div`
    font-weight: 300;
    font-size: 14px;
    margin-bottom: 11px;
`;

export default Footer;