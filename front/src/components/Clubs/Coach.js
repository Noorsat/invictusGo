import React from 'react';
import styled from 'styled-components';

const Coach = ({coaches}) => {
    return (
        <CoachSection>
            <Container>
                <CoachTitle>
                    ТРЕНЕРЫ
                </CoachTitle>
                <CoachItems>
                    {
                        coaches.map((item) => {
                            return (
                                <CoachItem>
                                    <CoachItemImage>
                                        <img src={item.photoUrl} alt=""/>
                                    </CoachItemImage>
                                    <CoachItemTitle>
                                        {item.fullname}
                                    </CoachItemTitle>
                                    <CoachItemText>
                                        {item.motto}
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

const CoachSection = styled.section``;

const Container = styled.div`
    max-width:1280px;
    margin: 0 auto;
`

const CoachTitle = styled.div`
    font-weight:700;
    font-size:35px;
    text-align:center;
    margin-bottom:70px;
`;

const CoachItems = styled.div`
    display:flex;
    justify-content:space-around;
    flex-wrap:wrap;
`

const CoachItem = styled.div`
    max-width:373px;
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
    text-align:center;
    font-weight:500;
    font-size:20px;
    margin-bottom:20px;
`

const CoachItemText = styled.div`
    font-weight:400;
    font-size:14px;
    line-height:1.55;
    text-align:center;
`



export default Coach;