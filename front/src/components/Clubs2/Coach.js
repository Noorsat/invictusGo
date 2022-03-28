import React from 'react';
import styled from 'styled-components';

const Coach = ({coaches, clubName}) => {
    return (
        <CoachSection>
            <Container>
                <CoachTitle>
                    ТРЕНЕРЫ <span>{clubName}</span>
                </CoachTitle>
                <CoachItems>
                    {
                        coaches.map((item) => {
                            console.log(item);
                            return (
                                <CoachItem>
                                    <CoachItemImage>
                                        <img src={item.photoUrl} alt=""/>
                                    </CoachItemImage>
                                    <CoachItemTitle>
                                        {item.fullName}
                                    </CoachItemTitle>
                                    <CoachItemText>
                                        {item.description}
                                    </CoachItemText>
                                </CoachItem>
                            )
                        })
                    }
                </CoachItems>
            </Container>
        </CoachSection>
    );
}

const CoachSection = styled.section`
    background:#000;
    padding-top:200px;
`;

const Container = styled.div`
    max-width:1312px;
    margin: 0 auto;
`

const CoachTitle = styled.div`
    font-family: 'Neue bold';
    font-weight: 800;
    font-size: 60px;
    line-height:66px;
    letter-spacing: 3px;
    color: #FFFFFF;
    span{
        color:#C11B1B;

    }
`;

const CoachItems = styled.div`
    display:flex;
    justify-content:space-around;
    flex-wrap:wrap;
`

const CoachItem = styled.div`
    max-width:418px;
    width:418px;
    background:#fff;
    margin-bottom:90px;
    @media (max-width:420px){
        max-width:85%;
    }
`

const CoachItemImage = styled.div`
    img{
        width:373px;
    }
    @media (max-width:420px){
        img{
            width:100%;
        }
    }
    margin-bottom:20px;
`

const CoachItemTitle = styled.div`
    font-weight: 900;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 1.5px;
    color: #FFFFFF;
`

const CoachItemText = styled.div`
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 1.5px;
    color: #FFFFFF;
`



export default Coach;