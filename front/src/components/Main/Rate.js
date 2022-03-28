import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { getSubscriptions } from '../../api';
import './../../App.css';

const Rate = () => {

    const [rate, setRate] = useState([]);

    useEffect(async () => {
        let result = await getSubscriptions();
        setRate(result.data)
    },[])
        return (
        <RateSection>
            <Container>
                <RateTitle>
                    <h1>ТАРИФЫ</h1>
                </RateTitle>
                <RateItems>
                    {
                        rate.map(item => {
                            return (
                                <RateItem>
                                <RateItemHeader>
                                    <RateItemHeaderFirst>
                                        <span>
                                            {item.type}<br></br>
                                        </span>
                                        Первый месяц - {item.firstMonth}тг
                                    </RateItemHeaderFirst>
                                    <RateItemHeaderSecond>
                                        <span>{item.nextMonths} тг</span><br></br>со второго месяца
                                    </RateItemHeaderSecond>
                                </RateItemHeader>
                                <RateListItems>
                                    {
                                        item.advantages.map(adv => {
                                            return (
                                                <RateListItem>
                                                <RateItemListImg>
                                                    <img src="images/correct.png"/>
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
                                    <img src="images/rate.png"/>
                                </RateItemFooter>
                                </RateItem>
                            )
                        })
                    }
                </RateItems>
            </Container>
        </RateSection>
    );
};

const RateSection = styled.div`
    background: #f5f5f5;
`

const Container = styled.div`
    max-width: 1280px;
    margin: 0 auto;
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
    overflow:auto;
    &::-webkit-scrollbar{
        width:0;
    }
`


const RateItem = styled.div`
    margin-right:79px;
    @media (max-width:585px){
        width:300px;
    }
    @media (max-width:408px){
        margin-right:25px!important;
    }
    @media (max-width:345px){
        margin-right:15px!important;
    }
`;

const RateItemHeader = styled.div`
    display: flex;
    border-bottom: 3px solid #f5f5f5;
    background:#fff;
`;

const RateItemHeaderFirst = styled.div`
    font-size: 15px;
    font-weight: 300;
    color: #c11b1b;
    margin-right: 65px;
    margin-top: 35px;
    margin-left: 33px;
    span{
        font-weight: 700;
        font-size: 25px;
        color: #000;
        line-height: 30px;
    }
`;

const RateItemHeaderSecond = styled.div`
    font-weight: 300;
    font-size: 15px;
    line-height: 18px;
    color: #c11b1b;
    padding-right: 41px;
    margin-top: 23px;
    margin-bottom: 19px;
    span{
        font-weight: bold;
        font-size: 35px;
        line-height: 43px;
    }
`

const RateListItems = styled.div`
    padding-top: 27px;
    width:0;
    height:0;
    border-top: 430px solid #fff; 
    border-right: 474px solid #fff;
    border-bottom:200px solid transparent;
    position:relative;
    @media (max-width:585px){
        border-top: 330px solid #fff; 
        border-right: 300px solid #fff;
        border-bottom:100px solid transparent;
    }
`;

const RateListItem = styled.div`
    display: flex;
    align-items: center;
    margin-left: 39px;  
    margin-bottom: 25px;
    position:relative;
    top:-400px;
    width:400px;
    @media (max-width:585px){
        max-width:290px;
        margin-left:15px;
        top:-340px;
    }
`;
const RateItemListImg = styled.div`
    margin-right: 14px; 
`;
const RateItemListText = styled.div`
    width: 300px;
    font-size: 20px;
    @media (max-width:584px){
        font-size:16px;
        font-weight:500;
    }
`
const RateItemFooter = styled.div`
    img{
        position:relative;
        top:-180px;
        right:15px;
        margin-left: 350px;
        margin-top: 30px;
    }
    @media (max-width:585px){
        img{
            margin-left:185px;
            top:-160px;
        }
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