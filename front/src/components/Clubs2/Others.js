import React, {useState, useEffect, useRef  } from 'react';
import styled from 'styled-components';
import clubBg from './clubs-bg.png';
import Carousel from 'react-elastic-carousel'
import { getClubs } from '../../api';

const Others = ({otherClubs,id}) => {
    const [gyms, setGyms] = useState(otherClubs); 
    
   
   const breakPoints = [ 
       {
           width:1, itemsToShow:3.2
       }
   ]  
    
    return (
        <ClubsSection id="clubs">
            <Background>
            <Container>
                <ClubsHeader>
                    <ClubsTitle>
                        ДРУГИЕ ЗАЛЫ <span>INVICTUS GO</span>
                    </ClubsTitle>
                    <SliderDots>
                    </SliderDots>
                </ClubsHeader>
                <ClubSlider>
                <Carousel breakPoints={breakPoints}> 
                    {
                        gyms.map(gym => {
                            if (id != gym.clubId){
                                return (
                                    <ClubItem>
                                        <ClubItemImg>
                                            <img src={gym.photoUrl[0]} alt=""/>
                                        </ClubItemImg>
                                        <ClubItemTitle>
                                            {gym.clubName}
                                        </ClubItemTitle>
                                        <ClubItemCity>
                                            г. {gym.city}     
                                        </ClubItemCity> 
                                        <ClubItemAddress>
                                            {gym.address}
                                        </ClubItemAddress>
                                        <ClubItemPhone>
                                            {gym.contactPhone}
                                        </ClubItemPhone>
                                        <ClubButton>
                                            <a href="">Подробнее</a>
                                        </ClubButton>
                                    </ClubItem> 
                                )
                            }
                        })        
                    }
                </Carousel>
                </ClubSlider>
            </Container>
            </Background>
        </ClubsSection>
    )
}

const ClubsSection = styled.section`
background:#000;
`;

const Background = styled.div`
    background:url(${clubBg});
    background-repeat:no-repeat;
    background-size:contain;
    height:100%;
    padding-bottom:400px;
`

const ClubSlider = styled.div`
    position:relative;
`

const Container = styled.div`
    padding-left:64px;
`; 

const ClubsHeader = styled.div`
    margin-bottom:110px;
`;

const ClubsTitle = styled.div`
    font-family:'Neue bold';
    color:#fff;
    font-weight:900;
    font-size:63px;
    letter-spacing:3px;
    span{
        color:#C11B1B;
    }
`;

const SliderDots = styled.div``;

const Item = styled.div``;


const ClubItem = styled.div`
    max-width:418px!important;
    width:100%!important; 
    height:558px;
    background:#1e1e1e;
    position:relative;
    margin-right:30px;
    transition:all 0.5s ease-in-out;
    &:hover {
        background:#C11B1B;
    }
    &:hover a{
        background:#000;
        color:#fff;
    }
`;

const ClubItemImg = styled.div`
    height:255px;
    margin:0 auto;
    padding-top:15px;
    text-align:center;
    margin-bottom:20px;
    img{
        width:380px;
    }
`;

const ClubItemTitle = styled.div`
    font-weight:900;
    font-size:22px;
    letter-spacing:2.5px;
    color:#fff;
    margin-left:18px;
    margin-bottom:20px;
`;

const ClubItemCity = styled.div`
    font-weight:500;
    font-size:16px;
    letter-spaceing:1.5px;
    color:#fff;
    margin-left:18px;
    margin-bottom:10px; 
`;

const ClubItemAddress = styled.div`
    color:#fff;
    opacity:0.65;
    font-weight:500;
    font-size:16px;
    letter-spacing: 1.5px;
    margin-left:18px;
`;

const ClubItemPhone = styled.div`
    color:#fff;
    opacity:0.65;
    font-weight:500;
    font-size:16px;
    letter-spacing: 1.5px;
    margin-left:18px;
`;

const ClubButton = styled.div`
    position:absolute;
    bottom:32px;    
    left:18px;
    a {
        color:#fff;
        font-size:18px;
        font-weight:600;
        letter-spacing:1px;
        color:#fff;
        text-decoration:none;
        background:#C11B1B;
        padding:25px 131px;
    }
    
`;



export default Others;

