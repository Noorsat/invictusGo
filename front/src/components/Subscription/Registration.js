import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { getClubs, getSubscriptions } from '../../api';
import Inputs from './Inputs';
import Select from './Select';
<<<<<<< HEAD
import { Modal, Button } from 'antd';
import Select2 from './Select2';
import agreement from './agreement.png';

const Registration = ({gym, setGym, item,setItem,setProcess, setUserName, setUserPhone,setUserMail, userName, userPhone, userMail, userDate, setUserDate,userCheckbox, setUserCheckbox, output, setOutput, output2, setOutput2, checkbox, setCheckbox, dropDown, setDrop, selected, setSelected, dropDown2, setDrop2, selected2, setSelected2}) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const [gyms, setGyms] = useState([]);
    const [tariffs, setTariffs] = useState([]);

    useEffect(async () => {
        // let result = await getClubs();
        // let result2 = await getSubscriptions(); 
        // setGyms(result.data)
        // setTariffs(result2.data);

        const data = [
            {
                clubName:"INVICTUS GO AKSAY",
                clubId:2,
                motto:"",
                gymArea:682,
                showersCount:20,
                lockersCount:292,
                clubArea:963,
                trainersCount:37,
                cardioTrainersCount:17,
                tittleText:"Центр притяжения любителей спорта среди карьеристов",
                descriptionText:"Расположенный в деловом центре столицы, Invictus GO Emerald стал точко...",
                address:"Аксай 5-й микрорайон, 25",
                weekendBusinessHours:"8:00-22:00",
                workdaysBusinessHours:"6:00-23:00",
                contactEmail:"zalinvictus@hello.com",
                contactPhone:"8 778 097 04 78‬",
                photoUrl : ["https://thumb.tildacdn.com/tild6325-3965-4634-b636-316662623038/-/format/webp/118457627_9383541633.jpg", "https://thumb.tildacdn.com/tild3829-6536-4531-b135-353163383432/-/format/webp/118504194_9383548399.jpg", "https://thumb.tildacdn.com/tild3231-6265-4063-b633-333431616636/-/format/webp/118541435_9383521499.jpg"],
                city: "Алматы",
                map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58717.04341384995!2d76.92161512532695!3d43.23776312715379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6002901db31c2f27!2sInvictus%20Samal!5e0!3m2!1sen!2skz!4v1628673233150!5m2!1sen!2skz" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
            }
        ]

        setGyms(data);

        const data2 = [
            {
            type:"месяц",
            firstMonth:15000,
            nextMonths :9990,
            bonus: ["Бонус"],
            advantages: ["Комфортная ежемесячная оплата", "Безлимитное посещение тренажерного зала", "Шкафчик в раздевалке", "Сауна"]
            },
            {
                type:"месяц",
                firstMonth:15000,
                nextMonths :9990,
                bonus: ["Бонус"],
                advantages: ["Комфортная ежемесячная оплата", "Безлимитное посещение тренажерного зала", "Шкафчик в раздевалке", "Сауна"]
            }
        ]

        setTariffs(data2)
    }, [])

    const processHandler = () => {
=======
import Select2 from './Select2';

const Registration = ({gym, setGym, item,setItem,setProcess, setUserName, setUserPhone,setUserMail, userName, userPhone, userMail, userDate, setUserDate,userCheckbox, setUserCheckbox}) => {
    const [gyms, setGyms] = useState([]);
    const [tariffs, setTariffs] = useState([]);
    const [output, setOutput] = useState(false);
    const [output2, setOutput2] = useState(false);

    useEffect(async () => {
        let result = await getClubs();
        let result2 = await getSubscriptions();
        setGyms(result.data)
        setTariffs(result2.data)
    }, [])

    const changeCheckbox = () => {
        setUserCheckbox(!userCheckbox)
    }

    const processHandler = () => {
        console.log(userPhone);
        console.log(userDate);
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
        setProcess(2);
    }
        return (
            <RegistrationSection>
            <Container>
                <Process>
                    <RegistrationProcess className="active">
<<<<<<< HEAD
                        Шаг 1 <br></br>Регистрация
                    </RegistrationProcess>
                    <CheckProcess>
                        Шаг 2 <br></br>Проверка
                    </CheckProcess>
                    <PaymentProcess>
                        Шаг 3 <br></br>Оплата   
=======
                        Шаг 1. Регистрация
                    </RegistrationProcess>
                    <CheckProcess>
                        <CheckText>
                            Шаг 2. Проверка
                        </CheckText>
                    </CheckProcess>
                    <PaymentProcess>
                        Шаг 3. Оплата   
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
                    </PaymentProcess>
                </Process>
                <RegWrapper>
                    <RegForm>
<<<<<<< HEAD
                    <SubscriptionName>
                        ЕЖЕМЕСЯЧНЫЙ АБОНЕМЕНТ
                    </SubscriptionName>   
                    <SubscriptionAmount>
                        12 990 ₸
                    </SubscriptionAmount>
                        <Inputs label="Имя фамилия" placeholder="Имя Фамилия" type="text" setUserName={setUserName} setUserPhone={setUserPhone} setUserMail={setUserMail} setUserDate={setUserDate} name="name" value={userName} />
                        <Inputs label="Номер телефона" placeholder="+7 (701) 123 45 67" type="tel" setUserName={setUserName} setUserPhone={setUserPhone} setUserMail={setUserMail} setUserDate={setUserDate} name="phone" value={userPhone} />
                        <Inputs label="Электронная почта" placeholder="invictus@go.kz" type="email" setUserName={setUserName} setUserPhone={setUserPhone} setUserMail={setUserMail} setUserDate={setUserDate} name="email" value={userMail} />
                        <Inputs label="Дата рождения" placeholder="22.04.2021" type="date" setUserName={setUserName} setUserPhone={setUserPhone} setUserMail={setUserMail} setUserDate={setUserDate} name="date" value={userDate}/>
                        <CheckBox>  
                            <Checkbox>
                                <input type="checkbox" required onClick={() => setCheckbox(!checkbox)} checked={checkbox}/>
                            </Checkbox>
                            <CheckBoxText>
                                <a href="">Я ознакомлен с <span>Согласием на обработку данных</span></a>
                            </CheckBoxText>
                        </CheckBox>
                        <Button type="primary" onClick={showModal}>
                            Open Modal
                        </Button>
                        {
                            userName != "" && userPhone != "" && userMail != "" && userDate != "" && checkbox== true ? 
                            <RegButtonRed onClick={() => setProcess(2)}>
                                Далее
                            </RegButtonRed>
                            :
                            <RegButton>
                                Далее
                            </RegButton>                        
                        }
                    </RegForm>
                    {/* <RegResult className={output === true ? `active` : ``}>
=======
                        <Select text="Выберите зал" options={gyms} gym={gym} setGym={setGym} setOutput={setOutput}/> 
                        <Select2 text="Выберите тариф" options={tariffs} item={item} setItem={setItem} setOutput2={setOutput2}/> 
                        <Inputs label="Ваше имя и фамилия" placeholder="Имя Фамилия" type="text" setUserName={setUserName} setUserPhone={setUserPhone} setUserMail={setUserMail} setUserDate={setUserDate} name="name" value={userName} />
                        <Inputs label="Номер телефона" placeholder="+7 (701) 123 45 67" type="tel" setUserName={setUserName} setUserPhone={setUserPhone} setUserMail={setUserMail} setUserDate={setUserDate} name="phone" value={userPhone} />
                        <Inputs label="Электронная почта" placeholder="invictus@go.kz" type="email" setUserName={setUserName} setUserPhone={setUserPhone} setUserMail={setUserMail} setUserDate={setUserDate} name="email" value={userMail} />
                        <Inputs label="Дата рождения" placeholder="22.04.2021" type="date" setUserName={setUserName} setUserPhone={setUserPhone} setUserMail={setUserMail} setUserDate={setUserDate} name="date" value={userDate}/>
                        <CheckBox>
                            <Checkbox>
                                <input type="checkbox" required onChange={changeCheckbox}/>
                            </Checkbox>
                            <CheckBoxText>
                                <a href="">Я согласен с <span>обработкой персональных данных</span></a>
                            </CheckBoxText>
                        </CheckBox>
                    </RegForm>
                    <RegResult className={output === true ? `active` : ``}>
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
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
                        <RegAdvantages className={output2 === true ? `active` : ``}>
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
                        <RegPrice className={output2 === true ? `active` : ``}>
                            Итого к оплате: {item.price} тг
                        </RegPrice>
<<<<<<< HEAD
                        <RegButton className={output2 === true ? `active` : ``} onClick={() => alert("Пожалуйста, заполните все поля!")}>
                            <a>Далее</a>
                        </RegButton>
                    </RegResult> */}
=======
                        
                            {
                                userName == "" || userPhone == "" || userMail == "" || userDate == "" || userCheckbox == false ?
                                <RegButton className={output2 === true ? `active` : ``} onClick={() => alert("Пожалуйста, заполните все поля!")}>
                                    <a>Далее</a>
                                </RegButton>
                                : <RegButton className={output2 === true ? `active` : ``} onClick={processHandler}>
                                <a>Далее</a>
                            </RegButton>
                            }
                    </RegResult>
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
            </RegWrapper>
            </Container>
        </RegistrationSection>
        )
}

const RegistrationSection = styled.section`
<<<<<<< HEAD
    background:#fff;
    position:relative;
=======
    background:#f5f5f5;
    @media (max-width:1040px){
        margin-bottom:55px;
    }
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
`

const Container = styled.div`
    max-width:1082px;
    margin: 0 auto;
`

<<<<<<< HEAD
const SubscriptionName = styled.div`
    font-weight: 800;
    font-size: 18px;
    letter-spacing:1px;
    line-height: 22px;
    margin-bottom:5px;
`

const SubscriptionAmount = styled.div`
    font-size:30px;
    font-weight:800;
    letter-spacing:1px;
    line-height: 37px;
    margin-bottom:15px;
`

const Process = styled.div`
    display:flex;
    margin-bottom:18px;
    margin-top:15px;
`

const RegistrationProcess = styled.div`
    min-width:135px;
    max-width:135px;
    font-weight:500;
    font-size:13px;
    border-bottom:1px solid #000;
    &.active{
        border-bottom:3px solid #c11b1b;
=======
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
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
    }
    @media (max-width:768px){
        width:90%;
        margin:0 auto;  
        font-weight:600;
    }
`

const CheckProcess = styled.div`
<<<<<<< HEAD
    min-width:135px;
    max-width:135px;
    border-bottom:3px solid #f2f2f2;    
    font-weight:500;
    opacity:0.6;
    font-size:13px;
=======
    width:360px;
    border-bottom:1px solid #000;
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
    padding-bottom:10px;
    &.active{
        border-bottom:5px solid #000;
    }
    @media (max-width:768px){
        display:none;
    }
`
<<<<<<< HEAD
const CheckText = styled.p``

const PaymentProcess = styled.div`
    min-width:135px;
    max-width:135px;
    border-bottom:3px solid #f2f2f2;
    opacity:0.6;
    font-weight:500;
    font-size:13px;
=======
const CheckText = styled.p`
    margin-left:20px;
`

const PaymentProcess = styled.div`
    width:360px;
    border-bottom:1px solid #000;
    padding-bottom:10px;
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
    &.active{
        border-bottom:5px solid #000;
    }
    @media (max-width:768px){
        display:none;
    }
`

const RegWrapper = styled.form`
    display:flex;   
    justify-content:space-between;
    @media (max-width:1058px){
        flex-direction:column;
    }
`;

const RegForm = styled.div``;

const RegResult = styled.div`
    display:none;
    background:#fff;
    padding-left:41px;
    padding-top:30px;
    padding-right:37px;
    height:100%;
    position:relative;
    &.active{
        display:block;
    }
    @media (max-width:1040px){
        width:100%;
        padding-left:0;
        padding-right:0;
    }
`;

const CheckBox = styled.div`
    display:flex;
<<<<<<< HEAD
    margin-top:49px;
    margin-bottom:20px;
=======
    align-items:center;    
    margin-top:49px;
    padding-bottom:46px;
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
    @media (max-width:1040px){
        width:90%;
        margin:0 auto;
        margin-top:20px;
    }
`

const Checkbox = styled.div`
    input{
<<<<<<< HEAD
        -moz-appearance:none;
        -webkit-appearance:none;
        -o-appearance:none;
        width:25px;
        height:25px;
        background:transparent;
        outline:1px solid #000!important;
        border:none!important;
        margin-right:12px;
        margin-left:0!important;
    }
    input:checked{
        background:url(${agreement});
    }
`

const CheckBoxText = styled.div`
    font-weight:500;
    font-size:14px;
    margin-top:2px;
=======
        width:30px;
        height:30px;
        background:transparent;
        border-radius:0!important;
        margin-right:12px;
        margin-left:0!important;
    }
`

const CheckBoxText = styled.div`
    font-weight:600;
    font-size:18px;
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
    span{
        color:#c11b1b;
        border-bottom: 1px solid #C11B1B;
    }
    a{
        text-decoration:none;
        color:#000;
    }
`

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
        padding-left:0!important;
    }
    li{
        font-size:15px;
        margin-bottom:20px;
    }
    li:last-child{
        margin-bottom:29px;
    }
    margin-bottom:23px;
    &.active{
        border-bottom:1px solid #d7d7d7;
    }
    @media (max-width:1040px){
        padding-left:41px;
    }
`

const RegPrice = styled.div`
    display:none;
    font-weight:600;
    font-size:18px;
    margin-bottom:55px;
    &.active{
        display:block;
    }
    @media (max-width:1040px){
        padding-left:41px;
    }
`;

const RegButton = styled.div`
<<<<<<< HEAD
    text-align:center;
=======
    display:none;
    text-align:center;
    position:absolute;
    width:100%;
    left:0;
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
    color:#fff;
    font-family:'Montserrat', sans-serif;
    font-weight:600;
    font-size:18px;
<<<<<<< HEAD
    background: #1E1E1E;
    opacity:0.7;
    border:none;
    outline:none;
    padding:15px 0;
=======
    background:#C11B1B;
    border:none;
    outline:none;
    padding:18px 0;
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
    }
    @media (max-width:1040px){
        margin:0 auto;
    }
    &.active{
        display:block;
    }
`

<<<<<<< HEAD
const RegButtonRed = styled.div`
    text-align:center;
    color:#fff;
    font-family:'Montserrat', sans-serif;
    font-weight:600;
    font-size:18px;
    background: #C11B1B;
    border:none;
    outline:none;
    padding:15px 0;
`

const NameError = styled.div`
    font-size:14px;
    letter-spacing: -0.3px;
    color: #C11B1B;
`

=======
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
export default Registration;