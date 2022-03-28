import React from 'react';
import styled from 'styled-components';
<<<<<<< HEAD
import moment from 'moment';
import { addContractMember } from '../../api';

const Check = ({gym,item,setProcess,userPhone, userName, userDate, userMail, setMemberInfo}) => {
=======
import Inputs from './Inputs';
import Select from './Select';
import Select2 from './Select2';

const Check = ({gym,item,setProcess,userPhone}) => {
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
    const processBackHandler = () => {
        setProcess(1);
    }
    const nextHandler = () => {
<<<<<<< HEAD
        const date = moment().format("L");
            const month = date.substring(0,2);
            const days = date.substring(3,5);
            const year = date.substring(6);
            const finalDate = year + "-" + month + "-" + days;
            const names = userName.split(' ');
            
            const data = {
                homeClubId: gym.id,
                personalData: {
                    firstName: names[0],
                    lastName: names[1],
                    birthDate: userDate,
                    phoneNumber: userPhone,
                    email: userMail
                },
                contractData: {
                    paymentPlanId: item.PerGymPaymentPlanId,
                    signUpDate:finalDate,
                    startDate:finalDate  
                }
            }
          
            console.log(data);
            setMemberInfo(addContractMember(data));
        setProcess(3);
    }

    const testJump = (e) => {
        if (e.target.value.length == 1){
            e.target = e.target.parentNode.nextSibling.firstChild.focus();
        }
        
            
        
    }

=======
        setProcess(3);
    }

>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
    return (
            <CheckSection>
                <Container>
                    <Process>
                        <RegistrationProcess>
                            Шаг 1. Регистрация
                        </RegistrationProcess>
                        <CheckProcess className="active">
                            <CheckText>
                                Шаг 2. Проверка
                            </CheckText>
                        </CheckProcess>
                        <PaymentProcess>
                            Шаг 3. Оплата   
                        </PaymentProcess>
                    </Process>
                    <CheckWrapper>
                        <CheckEmail>
                            <CheckEmailTitle>
                                Введите проверочный код
                            </CheckEmailTitle>
                            <CheckInputs>
                                <CheckInput>
<<<<<<< HEAD
                                    <input type="text" maxlength="1" onChange={e => testJump(e)}/> 
                                </CheckInput>
                                <CheckInput>
                                    <input type="text" maxlength="1" onChange={e => testJump(e)}/>
                                </CheckInput>
                                <CheckInput>
                                    <input type="text" maxlength="1" onChange={e => testJump(e)}/>
                                </CheckInput>
                                <CheckInput>
                                    <input type="text" maxlength="1" onChange={nextHandler}/>
=======
                                    <input type="text" maxlength="1"/>
                                </CheckInput>
                                <CheckInput>
                                    <input type="text" maxlength="1"/>
                                </CheckInput>
                                <CheckInput>
                                    <input type="text" maxlength="1"/>
                                </CheckInput>
                                <CheckInput>
                                    <input type="text" maxlength="1"/>
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
                                </CheckInput>
                            </CheckInputs>
                            <CheckCode>
                                SMS отправлен на номер: {userPhone}
                            </CheckCode>
                            <CheckBtn>
                                <button onClick={processBackHandler}>Изменить данные</button>
                            </CheckBtn>
                        </CheckEmail>
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
                                <button onClick={nextHandler}>Далее</button>
                            </RegButton>    
                        </RegResult>
                    </CheckWrapper>
                </Container>
            </CheckSection>
        )
}


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
        width:90%;
        margin:0 auto;  
        font-weight:600;
    }
`
const CheckText = styled.p`
    margin-left:20px;
    @media (max-width:768px){
        margin-left:0;
    }
    
`

const PaymentProcess = styled.div`
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

const RegResult = styled.div`
    background:#fff;
    padding-left:41px;
    padding-top:30px;
    padding-right:37px;
    position:relative;
    height:100%;
    margin-bottom:120px;
    @media (max-width:1040px){
        width:100%;
        padding-left:0;
        padding-right:0;
        margin-bottom:0px;
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


const CheckSection = styled.div`
    background: #F5F5F5;
    @media (max-width:1040px){
        margin-bottom:55px;
    }
`

const CheckWrapper = styled.div`
    display:flex;
    justify-content:space-between;
    @media (max-width:1058px){
        flex-direction:column;
    }
`

const CheckEmail = styled.div`
    padding-left:35px;
    @media (max-width:425px){
        padding-left:10px;
        max-width:95%;
        margin:0 auto;
    }
`

const CheckEmailTitle = styled.div`
    font-weight:600;
    font-size:25px;
    margin-bottom:41px;    
`
 

const CheckInputs = styled.div`
    display:flex;
    margin-bottom:20px;
    max-width:94.5%;
`

const CheckInput = styled.div`
    input{
        max-width:127px;
        height:150px;
        color:#c11b1b;
        font-size:100px;
        background:transparent;
        text-align:center;
        outline:none;
        border: 2px solid #000000;
    }
    margin-right:12px;
    &:last-child{
        margin-right:0;
    }
    @media (max-width:650px){
        margin-right:30px
        &:last-child{
            margin-right:0;
        }
        width:40%;
        input{
            width:100%;
        }
    }
`

const CheckCode = styled.div`
    font-size:18px;
    color:#030303;
    margin-bottom:35px;
    @media (max-width:650px){
        color:#B3B3B3;
        font-weight:600
    }
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


export default Check;