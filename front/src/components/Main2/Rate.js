import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { getSubscriptions } from '../../api';
import './../../App.css';
import Carousel from 'react-elastic-carousel';
import clubBg from './clubs-bg.png';

const Rate = () => {
    const breakPoints = [ 
        {
            width:1, itemsToShow:3.2
        }
    ]  

    const [rate, setRate] = useState([]);

    useEffect(async () => {
        let result = await getSubscriptions();
        setRate(result.data)
    },[])
        return (
        <RateSection id="subscription">
            <Background>
            <Container>
                <RateItems>
                    <Carousel breakPoints={breakPoints}>
                    {
                        rate.map(item => {
                            return (
                                <RateItem>
                                <RateItemHeader>
                                    <RateItemHeaderFirst>
                                        {item.type.toUpperCase()} АБОНЕМЕНТ
                                    </RateItemHeaderFirst>
                                    <RateItemHeaderSecond>
                                        {item.firstMonth} ₸
                                    </RateItemHeaderSecond>
                                </RateItemHeader>
                                <RateListItems>
                                    {
                                        item.advantages.map(adv => {
                                            return (
                                                <RateListItem>
                                                <RateItemListImg>
                                                </RateItemListImg>
                                                <RateItemListText>
                                                    {adv}
                                                </RateItemListText>
                                            </RateListItem>
                                            )
                                        }) 
                                    }
                                </RateListItems>
                                <RateItemFooter>
                                    <button>Купить</button>
                                </RateItemFooter>
                                </RateItem>
                            )
                        })
                    }
                    </Carousel>
                </RateItems>
            </Container>
            </Background>
        </RateSection>
    );
};

const RateSection = styled.div`
    background: #000;
    padding-top:200px;
`

const Background = styled.div`
    background:url(${clubBg});
    background-size:contain;
    background-repeat:no-repeat;
    height:100%;
    padding-bottom:320px;
`

const Container = styled.div`
    padding-left:64px;
`;

const RateTitle = styled.div`
  font-size: 35px;
  text-align: center;
  padding-top: 78px;
  font-weight: 700;
  margin-bottom: 51px;
  @media (max-width:670px){
      font-size:28px;
  }
`

const RateItems = styled.div`
    display: flex;
    padding-left:10px;
    padding-top:400px;
    overflow:auto;
    &::-webkit-scrollbar{
        width:0;
    }
`


const RateItem = styled.div`
    background: linear-gradient(208.65deg, rgba(0, 0, 0, 0.26) 0%, #000000 101.04%, rgba(0, 0, 0, 0.38) 101.04%);
    border: 1px solid rgba(255, 255, 255, .4);
    max-width:100%!important;
    height:561px;
    position:relative;
    margin-right:29px;
`;

const RateItemHeader = styled.div`
`;

const RateItemHeaderFirst = styled.div`
    font-weight:800;
    font-size:18px;
    letter-spacing:1px;
    margin-top:20px;
    margin-left:35px;
    color:#fff;
`;

const RateItemHeaderSecond = styled.div`
    font-weight:800;
    font-size:43px;
    letter-spacing:1px;
    margin-left:35px;
    color:#fff;
`

const RateListItems = styled.div`
    padding-top: 27px;
`;

const RateListItem = styled.div`
    display: flex;
    align-items: center;
    margin-left: 35px;  
    margin-bottom: 25px;
    width:400px;
    @media (max-width:585px){
        max-width:290px;
        margin-left:15px;
        top:-340px;
    }
`;
const RateItemListImg = styled.div`
    margin-right: 14px; 
    content:'';
    width:11px;
    height:11px;
    background:#fff;
`;
const RateItemListText = styled.div`
     font-size: 18px;
    font-weight:500;
    color:#fff;
`
const RateItemFooter = styled.div`
    text-align:center;
    left:35px;
    position:absolute;
    bottom:25px;
    button{
        background:#fff;
        border:none;
        outline:none;
        color:#000;
        transition:all 0.5s ease;
        padding:20px 147px;
        font-size:18px;
        font-weight:600;
    }
    &:hover button{
        background:#C11B1B;
        color:#fff;
    }
`

const RateItemFooter2 = styled.div`
    img{
        position:relative;
        top:-180px;
        right:15px;
        margin-left: 350px;
        margin-top: 30px;
    }
    @media (max-width:566px){
        img{
            margin-left:190px;
            top:-160px;
        }
    }
`;


export default Rate;