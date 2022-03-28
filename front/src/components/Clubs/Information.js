import React from 'react';
import styled from 'styled-components';

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
        </InformationSection>
    )
}

const InformationSection = styled.section`
    background:#F5F5F5;
`;

const Container = styled.div`
    max-width:1280px;
    margin: 0 auto;
`

const InfoCards = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    padding-top:96px;
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
    position:relative;
    background:#fff;
    width: 108.39px;
    height: 122px;
`

const InfoCard = styled.div`
   margin-bottom:90px;
   margin-right:190px;
   width:200px;
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
    color:#C11B1B;
    font-size:45px;
    position:absolute;
    width:200px;
    font-weight:700;
    letter-spacing: -0.0995313px;
    margin-bottom:20px;
    left:31px;
    top:9px;
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
    font-size: 18px;
    color: #000000;
    width:250px;
    font-weight:600;
    position:relative;
    left:31px;
    top:70px;
    @media (max-width:1150px){
        max-width:100%;
    }
    @media (max-width:450px){
        min-width:220px;
    }
`   

export default Information;