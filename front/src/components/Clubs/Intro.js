import React from 'react';
import styled from 'styled-components';
import bg from './bg.webp';

const Intro = ({clubName,motto}) => {
    return (
        <IntroSection>
            <IntroContent>
                <IntroInformation>
                    <IntroTitle>
                        {clubName}
                    </IntroTitle>
                    <IntroText>
                        {motto}
                    </IntroText>
                </IntroInformation>
            </IntroContent>
        </IntroSection>
    )
}

const IntroSection = styled.section`
    background: url(${bg});
    background-size:cover;
    background-position:center;
    backgroun-repeat:no-repeat;
    height:792px;
`;

const IntroInformation = styled.div`
    @media (max-width:900px){
        max-width:60%;
    }
    @media (max-width:545px){
        max-width:90%;
    }
`;  

const IntroContent = styled.div`
    background-image: -webkit-linear-gradient(top, rgba(0,0,0,0.50), rgba(0,0,0,0.30));
    height:792px;   
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;

const IntroTitle = styled.div`
    color:#fff;
    font-size:72px;
    font-weight: 600;   
    text-align:center;
    margin-bottom:39px;
    @media (max-width:815px){
        font-size:50px;
    }
    @media (max-width:545px){
        font-size:36px;
    }
`;

const IntroText = styled.div`
    font-size:18px;
    color:#fff;
    font-weight:300;
    text-align:center;
    @media (max-width:545px){
        font-size:16px;
    }
`;

export default Intro;