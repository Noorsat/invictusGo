import React from 'react';
import styled from 'styled-components';
import apple from './apple.png';
import google from './google.png';
import qr from './qr.png';

const AppInstall = () => {
    return (
        <AppInstallSection>
            <Container>
            <AppInstallWrapper>
                <AppContent>
                    <AppInstallTitle>
                        НАЧНИ СВОЙ ДЕНЬ<br></br> 
                        С ПРИЛОЖЕНИЕМ<br></br>
                        <span>INVICTUS GO</span>
                    </AppInstallTitle>
                    <AppInstallText>
                        Скачивайте приложение отсканировав QR-код. 
                    </AppInstallText>
                    <AppPhones>
                        <AppPhone>
                            <AppPhoneImg>
                                <img src={apple} alt=""/> 
                            </AppPhoneImg>
                            <AppPhoneText>
                                <span>Доступно в</span> <br></br>App Store
                            </AppPhoneText>
                        </AppPhone>
                        <AppPhone>
                            <AppPhoneImg>
                                <img src={google} alt=""/> 
                            </AppPhoneImg>
                            <AppPhoneText>
                            <span>Доступно в</span> <br></br>Google Play
                            </AppPhoneText>
                        </AppPhone>
                    </AppPhones>
                </AppContent>
                <AppImg>
                    <img src={qr} alt=""/>                    
                </AppImg>              
            </AppInstallWrapper>
            </Container>
        </AppInstallSection>
    )
}

const AppInstallSection = styled.section`
    background:#000;

`

const Container = styled.div`
    max-width:1619px;
    margin: 0 auto;
`

const AppContent = styled.div`
    position:relative;
    bottom:220px;
`

const AppInstallWrapper = styled.div`
    display:flex;
    align-items:center;
`

const AppInstallTitle = styled.div`
    color:#fff;
    font-family:'Neue bold';
    font-size:63px;
    letter-spacing: 3px;
    line-height: 69px;
    margin-bottom:20px;
    span{
        color:#C11B1B;
    }
`

const AppInstallText = styled.div`
    opacity:0.65;
    color:#fff;
    font-weight:500;
    font-size:  18px;
    letter-spacing:1.5px;
    margin-bottom:113px;
`

const AppPhones = styled.div`
    display:flex;
`

const AppPhone = styled.div`
    display:flex;
    align-items:center;
    background:#1e1e1e;
    width:270px;
    height:87px;
    margin-right:40px;
`

const AppPhoneImg = styled.div`
    margin-left:20px;
    margin-right:17px;
`

const AppPhoneText = styled.div`
    color:#fff; 
    letter-spacing:0.02em;
    font-size:24px;
    font-weight:500;
    line-height:25px;
    span{
        opacity:0.7;
        font-weight:600;
        font-size:15px;
    }
`

const AppImg = styled.div``;





export default AppInstall;