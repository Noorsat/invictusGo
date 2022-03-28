<<<<<<< HEAD
import React, {useEffect} from 'react';
import styled from 'styled-components';
import {payment} from '../../api';
import axios from 'axios';

const Payment = ({gym,item,setProcess, userName, userPhone, userMail, userDate, memberInfo}) => {
  

    const pay = () => {
        const url = "https://invictusgo-staging.herokuapp.com/";
        const id = memberInfo.memberId;
        const data = {
            "userId":id,
            "thankYouPageUrl" : url
        }
        payment(data);
=======
import React from 'react';
import styled from 'styled-components';

const Payment = ({gym,item,setProcess, userName, userPhone, userMail}) => {
    const processBackHandler = () => {
        setProcess(1);
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
    }
    return (
        <div>
            <PaymentSection>
                <Container>
                    <Process>
                        <RegistrationProcess>
                            Шаг 1. Регистрация
                        </RegistrationProcess>
                        <CheckProcess>
                            <CheckText>
                                Шаг 2. Проверка
                            </CheckText>
                        </CheckProcess>
                        <PaymentProcess className="active">
                            Шаг 3. Оплата   
                        </PaymentProcess>
                    </Process>
                    <PaymentWrapper>
                        <PaymentInfo>
                            <PaymentSuccess>
                                Все готово!
                            </PaymentSuccess>
                            <PaymentName>
                                <PaymentNameTitle>
                                    Имя
                                </PaymentNameTitle>
                                <PaymentNameText>
                                    {userName}
                                </PaymentNameText>
                            </PaymentName>
                            <PaymentPhone>
                                <PaymentPhoneTitle>
                                    Номер телефона
                                </PaymentPhoneTitle>
                                <PaymentPhoneText>
                                    {userPhone}
                                </PaymentPhoneText>
                            </PaymentPhone>
                            <PaymentMail>
                                <PaymentMailTitle>
                                    Электронная почта
                                </PaymentMailTitle>
                                <PaymentMailText>
                                    {userMail}
                                </PaymentMailText>
                            </PaymentMail>
<<<<<<< HEAD
=======
                            <CheckBtn>
                                <button onClick={processBackHandler}>Изменить данные</button>
                            </CheckBtn>
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
                        </PaymentInfo>
                        <RegResult>
                            <RegTitle>
                                Вы выбрали:
                            </RegTitle>
                            <RegGym>
                                {gym.name}
                            </RegGym>
                            <RegAddress>
                                {gym.address}
                            </RegAddress>
                            <RegTarif>
                                {item.name}
                            </RegTarif>
                            <RegAdvantages>
                                <ul>
                                    {
                                        item.advantages.map(item => {
                                            return (
                                                <li>
                                                    {item}
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </RegAdvantages>
                            <RegPrice>
                                Итого к оплате: {item.price} тг
                            </RegPrice>
                            <RegButton>
<<<<<<< HEAD
                                <button onClick={pay}>Оплатить</button>
=======
                                <button>Оплатить</button>
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
                            </RegButton>    
                        </RegResult>
                    </PaymentWrapper>
                </Container>
            </PaymentSection>
        </div>
    )
}

const PaymentSection = styled.div`
    background:#f5f5f5;
    @media (max-width:1040px){
        margin-bottom:55px;
    }
`;

const Container = styled.div`
    max-width:1082px;
    margin: 0 auto;
`


const Process = styled.div`
    display:flex;
    padding-top:79px;
    margin-bottom:48px;
`

const RegistrationProcess = styled.div`
    width:360px;
    padding-bottom:10px;
    border-bottom:1px solid #000;
    &.active{
        border-bottom:5px solid #000;
    }
    @media (max-width:768px){
        display:none;
    }
`

const CheckProcess = styled.div`
    width:360px;
    border-bottom:1px solid #000;
    padding-bottom:10px;
    &.active{
        border-bottom:5px solid #000;
    }
    @media (max-width:768px){
        display:none;
    }
`
const CheckText = styled.p`
    margin-left:20px;
`

const PaymentProcess = styled.div`
    width:360px;
    border-bottom:1px solid #000;
    padding-bottom:10px;
    &.active{
        border-bottom:5px solid #000;
    }
    @media (max-width:768px){
        width:90%;
        margin:0 auto;  
        font-weight:600;
    }
`


const RegResult = styled.div`
    background:#fff;
    padding-left:41px;
    padding-top:30px;
    padding-right:37px;
    position:relative;
    height:100%;
    @media (max-width:1040px){
        width:100%;
        padding-left:0;
        padding-right:0;
    }
`;

const RegTitle = styled.div`
    border-bottom:1px solid #d7d7d7;
    font-weight:600;
    font-size: 18px;
    letter-spacing: -0.0455px;
    padding-bottom:23px;
    @media (max-width:1040px){
        padding-left:41px;
    }
`

const RegGym = styled.div`
    font-weight:600;
    font-size:18px;
    margin-top:20px;
    margin-bottom:10px;
    @media (max-width:1040px){
        padding-left:41px;
    }
`;

const RegAddress = styled.div`
    max-width:280px;
    padding-bottom:22px;
    border-bottom:1px solid #d7d7d7;
    margin-bottom:20px;
    @media (max-width:1040px){
        max-width:100%;
        padding-left:41px;
    }
`   

const RegTarif = styled.div`
    font-weight:600;
    font-size:18px;
    margin-bottom:10px;
    @media (max-width:1040px){
        padding-left:41px;
    }
`

const RegAdvantages = styled.div`
    ul{
        list-style:initial;
        max-width:250px;
        margin-left:5px;
    }
    li{
        font-size:15px;
        margin-bottom:20px;
    }
    li:last-child{
        margin-bottom:29px;
    }
    margin-bottom:23px;
    border-bottom:1px solid #d7d7d7;
    @media (max-width:1040px){
        padding-left:41px;
    }
`

const RegPrice = styled.div`
    font-weight:600;
    font-size:18px;
    margin-bottom:55px;
    @media (max-width:1040px){
        padding-left:41px;
    }
`;

const RegButton = styled.div`
    text-align:center;
    position:absolute;
    left:0;
    width:100%;
    button{
        color:#fff;
        font-family:'Montserrat', sans-serif;
        font-weight:600;
        font-size:18px;
        background:#C11B1B;
        border:none;
        outline:none;
        padding:18px 0;
        position:relative;
        width:100%;
    }
    @media (max-width:1040px){
        max-width:100%;
        margin:0 auto;
        padding-bottom:60px;
    }
`


const PaymentWrapper = styled.div`
    display:flex;
    justify-content:space-between;
    @media (max-width:1058px){
        flex-direction:column;
    }
`

const PaymentInfo = styled.div` 
    @media (max-width:1058px){
        padding-left:36px;
    }
    @media (max-width:588px){
        padding-left:5%;
    }
`

const PaymentSuccess = styled.div`
    font-weight: 600;
    font-size: 25px;
    margin-bottom:44px;
`

const PaymentName = styled.div`
    margin-bottom:41px
`

const PaymentNameTitle = styled.div`
    font-weight: 600;
    font-size: 18px;
    mix-blend-mode: normal;
    color: #030303;
    line-height: 36px;
    opacity: 0.5;
`

const PaymentNameText = styled.div`
    color: #030303;
    font-weight: 600;
    font-size: 25px;
    line-height: 36px;
`

const PaymentPhone = styled.div`
    margin-bottom:41px;
`

const PaymentPhoneTitle = styled.div`
    font-weight: 600;
    font-size: 18px;
    mix-blend-mode: normal;
    color: #030303;
    line-height: 36px;
    opacity: 0.5;
`

const PaymentPhoneText = styled.div`
    color: #030303;
    font-weight: 600;
    font-size: 25px;
    line-height: 36px;
`

const PaymentMail = styled.div`
    margin-bottom:41px;
`

const PaymentMailTitle = styled.div`
    font-weight: 600;
    font-size: 18px;
    mix-blend-mode: normal;
    color: #030303;
    line-height: 36px;
    opacity: 0.5;`

const PaymentMailText = styled.div`
    color: #030303;
    font-weight: 600;
    font-size: 25px;
    line-height: 36px;
`

const CheckBtn = styled.div`
    button{
        background:transparent;
        outline:none;
        color:#8d8d8d;
        font-size:18px;
        border: 2px solid #CACACA;
        padding:8px 55px 7px;
    }
    padding-bottom:333px;
    @media (max-width:1040px){
        padding-bottom:28px;
    }
    @media (max-width:650px){
        button{
            width:94.5%;
        }
    }
`





export default Payment;