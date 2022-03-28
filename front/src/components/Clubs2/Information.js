import React from 'react';
import styled from 'styled-components';
import gogo from './GOGOGO.png';

const Information = ({gymArea, showersCount, lockersCount, clubArea, trainersCount, cardioTrainersCount}) => {
    return (
        <InformationSection>
            <Container>
                <InfoCards>
                    <InfoCard>
                        <InfoCardBackground>
                            <InfoCardTitle>
                                {gymArea} м2
                            </InfoCardTitle>
                            <InfoCardText>
                                площадь зала
                            </InfoCardText>
                        </InfoCardBackground>
                    </InfoCard>
                    <InfoCard>
                        <InfoCardBackground>
                            <InfoCardTitle>
                                {showersCount}
                            </InfoCardTitle>
                            <InfoCardText>
                                душевых
                            </InfoCardText>
                        </InfoCardBackground>
                    </InfoCard>
                    <InfoCard>
                        <InfoCardBackground>
                            <InfoCardTitle>
                                {lockersCount}
                            </InfoCardTitle>
                            <InfoCardText>
                                шкафчиков
                            </InfoCardText>
                        </InfoCardBackground>
                    </InfoCard>
                    <InfoCard>
                        <InfoCardBackground>
                            <InfoCardTitle>
                                {clubArea} м2
                            </InfoCardTitle>
                            <InfoCardText>
                                площадь клуба
                            </InfoCardText>
                        </InfoCardBackground>
                    </InfoCard>
                    <InfoCard>
                        <InfoCardBackground>
                            <InfoCardTitle>
                                {trainersCount}
                            </InfoCardTitle>
                            <InfoCardText>
                                единиц оборудования
                            </InfoCardText>
                        </InfoCardBackground>
                    </InfoCard>
                    <InfoCard>
                        <InfoCardBackground>
                            <InfoCardTitle>
                                {cardioTrainersCount}
                            </InfoCardTitle>
                            <InfoCardText>
                                кардио тренажеров
                            </InfoCardText>
                        </InfoCardBackground>
                    </InfoCard>
                </InfoCards>
               
            </Container>
                <GoImage>
                    <img src={gogo}/>
                </GoImage>
        </InformationSection>
    )
}

const InformationSection = styled.section`
    background:#000;
    height:110vh;
`;

const Container = styled.div`
    max-width:1312px;
    margin: 0 auto;
`

const GoImage = styled.div`
    background:url(${gogo});
    position:relative;
    bottom:270px;
    z-index:1;
`;

const InfoCards = styled.div`
    display:flex;
    flex-wrap:wrap;
    padding-top:96px;
    position:relative;
    z-index:100;
    @media (max-width:975px){
        display:flex;
        justify-content:center;
        margin-left:10%;
    }
    @media (max-width:450px){
        display:block;
        margin-left:53px;
        padding-bottom:50px;
    }
`

const InfoCardBackground = styled.div`
    margin-top:45px;
`

const InfoCard = styled.div`
   background: #1E1E1E;
   max-width:418px;
   margin-right:29px;
   margin-bottom:42px;
   width:418px;
   height:222px;
   &:nth-child(3){
       margin-right:0;
   }
   &:last-child{
       margin-right:0;
   }
   @media (max-width:975px){
    margin-right:0;
   }
`

const InfoCardTitle = styled.div`
    color:#fff;
    letter-spacing:2px;
    font-size:60px;
    font-weight:900;
    line-height: 75px;      
    text-align:center;  
    @media (max-width:1030px){
        max-width:100%;
        font-size:35px; 
    }
    @media (max-width:450px){
        min-width:150px;
    }
`

const InfoCardText = styled.div`
font-weight: 500;
text-align:center;
font-size: 18px;
line-height: 75px;
letter-spacing: 2px;

color: #FFFFFF;

    @media (max-width:1150px){
        max-width:100%;
    }
    @media (max-width:450px){
        min-width:220px;
    }
`   

export default Information;