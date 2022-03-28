import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import 'react-phone-number-input/style.css';
<<<<<<< HEAD
import PhoneInput, { formatPhoneNumber, formatPhoneNumberIntl, isValidPhoneNumber } from 'react-phone-number-input';
=======
import PhoneInput from 'react-phone-number-input';
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';


const  Inputs = ({label,placeholder,type,setUserName,setUserPhone, setUserMail,setUserDate, name, value}) => {
<<<<<<< HEAD
    const [nameCheck, setNameCheck] = useState(true); 
    const [phoneCheck, setPhoneCheck] = useState(true);
    const [emailCheck, setEmailCheck] = useState(true);
    const [phoneSettings, setPhoneSettings] = useState(true);
    const [emailEmptyCheck, setEmailEmptyCheck] = useState(true);
    const [phoneValue, setPhoneValue] = useState("+7")
 
=======
    const [value2, setValue] = useState(value);

>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
    useEffect(() => {
        document.querySelector('.ant-picker-input').firstChild.value = value; 
    })

    const inputChangeHandler = (e) => {
        if (e.target.name === "name"){
<<<<<<< HEAD
            if (e.target.value.length > 0){
                setNameCheck(true);
                e.target.style.border = "2px solid #232323"
            }else {
                setNameCheck(false);
                e.target.style.border = "1px solid #C11B1B"
            }
            setUserName(e.target.value)
        }else if (e.target.name === "email"){
            if (e.target.value.length > 0){
                setEmailEmptyCheck(true);
                e.target.style.border = "2px solid #232323"
            }else {
                setEmailEmptyCheck(false);
                e.target.style.border = "1px solid #C11B1B"
            }
            let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if ( re.test(e.target.value)){
                setEmailCheck(true);
            }else{
                setEmailCheck(false);
                e.target.style.border = "1px solid #C11B1B" 
            }
            setUserMail(e.target.value);
=======
            setUserName(e.target.value)
        }else if (e.target.name === "email"){
            setUserMail(e.target.value)
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
        }
    }

    const phoneHandler = () => {
<<<<<<< HEAD
        console.log(isValidPhoneNumber(document.querySelector('.PhoneInputInput').value));
        if (document.querySelector('.PhoneInputInput').value.length > 0 && isValidPhoneNumber(document.querySelector('.PhoneInputInput').value) == true){
            document.querySelector('.PhoneInput').style.border = "2px solid #232323";
            setPhoneCheck(true);
            setPhoneSettings(true);
        }else if (document.querySelector('.PhoneInputInput').value.length > 0 && isValidPhoneNumber(document.querySelector('.PhoneInputInput').value) == false){
            document.querySelector('.PhoneInput').style.border = "1px solid #C11B1B";
            setPhoneSettings(false);
            setPhoneCheck(true);
        }else {
            document.querySelector('.PhoneInput').style.border = "1px solid #C11B1B";
            setPhoneCheck(false);
            setPhoneSettings(true);
        }
        setUserPhone(document.querySelector('.PhoneInputInput').value);
        
    }
    
    const dateHandler = () => {
        console.log(document.querySelector('.ant-picker-input').firstChild.value.length);
        if (document.querySelector('.ant-picker-input').firstChild.value.length > 0){
            document.querySelector('.ant-picker-input').firstChild.style.border = "2px solid #232323";
        }else{
            document.querySelector('.ant-picker-input').firstChild.style.border = "1px solid #C11B1B";
        }
=======
        setUserPhone(document.querySelector('.PhoneInputInput').value);
    }

    const dateHandler = () => {
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
        setUserDate(document.querySelector('.ant-picker-input').firstChild.value);
    }

    return (
        <InputSection>
            <InputLabel>   
<<<<<<< HEAD
                {label}
=======
                {label}<span>*</span>
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
            </InputLabel>
            {
                type === "tel" ? 
                <PhoneInput
<<<<<<< HEAD
                    style={{marginBottom:20}}
                    defaultCountry="KZ"
                    country="KZ"
                    value={phoneValue}
                    placeholder="+7"
=======
                    placeholder={placeholder}
                value={value2}
                    defaultCountry="KZ"
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
                    onChange={phoneHandler} 
                    required
                    />
                : type === "date" ? 
<<<<<<< HEAD
                <DatePicker onChange={dateHandler} required name={name} placeholder="" />
                :
                <input type={type} required onChange={inputChangeHandler} name={name} value={value}/> 
            }   
            {
                type=="text" && nameCheck == false ? <NameError>Обязательное поле для заполнения</NameError> : ""
            }
            {
                type=="tel" && phoneCheck == false ? <NameError>Обязательное поле для заполнения</NameError> : ""
            }
            {
                type=="tel" && phoneSettings == false ? <NameError>Неправильный ввод номера</NameError> : ""
            }
            {
                type=="email" && emailEmptyCheck == false ? <NameError>Обязательное поле для заполнения</NameError> : ""
            }
             {
                type=="email" && emailEmptyCheck == true && emailCheck === false ? <NameError>Неправильный ввод почты</NameError> : ""
=======
                <DatePicker onChange={dateHandler} placeholder={placeholder} required name={name} />
                :
                <input placeholder={placeholder} type={type} required onChange={inputChangeHandler} name={name} value={value}/> 
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
            }
        </InputSection>
    )
}

const InputSection = styled.div`
<<<<<<< HEAD
    margin-bottom:15px; 
    .PhoneInputCountry{
        left:15px;
        height:54px;
        display:none!important;
=======
    .PhoneInputCountry{
        left:15px;
        height:68px;
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
    }
    option{
        display:none;
    }
    .PhoneInputCountrySelectArrow{
        display:none!important;
    }
    .PhoneInput{
        border:1px solid #000;
<<<<<<< HEAD
        height:54px;
    }
    PhoneInputCountrySelect{
        display:none!important;
=======
        height:68px;
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
    }
    input{
        background:transparent;
        border:none;
        outline:none;
        border:1px solid #000;
<<<<<<< HEAD
=======
        padding:20px 0px 20px 22px;
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
        font-family:'Montserrat', sans-serif;
        font-weight:600;
        color:#000;
        font-size:18px;
<<<<<<< HEAD
        max-width: 405px;
        width:405px;
        padding-left:15px;
        height: 54px;
    }
    .PhoneInputInput{
        border:none!important;
    }
    .PhoneInputInput input{
        height:54px!important;
=======
        width:100%;
        margin-bottom:20px;
    }
    .PhoneInputInput{
        border:none!important;
        height:68px;
        padding-top:42px;
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
    }
    anticon {
        display:none;
    }
    .ant-picker-input input{
        background:transparent!important;
        border:none;
        outline:none;
<<<<<<< HEAD
=======
        padding:20px 0px 0px 22px;
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
        font-family:'Montserrat', sans-serif;
        font-weight:600;
        color:#000;
        font-size:18px;
        width:100%!important;
<<<<<<< HEAD
        padding-left:15px;
        height:54px;
=======
        margin-bottom:20px;
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
    }
    .ant-picker{
        background:transparent!important;
        border:1px solid #000;
        width:100%;
        padding:0;
    }
    .ant-picker-suffix{
<<<<<<< HEAD
        display:none;
=======
        padding-right:10px; 
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
    }
    .ant-picker-focused{
        box-shadow:none!important;
    }
    @media (max-width:1041px){
        width:90%;
        margin:20px auto 0;
        input{
            width:100%;
        }
    }
    @media (max-width:500px){
        width:90%;
        input{
            width:100%
        }
    }
`


const InputLabel = styled.div`
<<<<<<< HEAD
    font-size:15px;
    color:#232323;
    margin-bottom:5px;
`

    const NameError = styled.div`
    letter-spacing: -0.3px;
    font-size:14px;
    color: #C11B1B;
    margin-top:8px;
    `

=======
    font-size:18px;
    font-weight:600;
    margin-bottom:10px;
    span{
        color:#C11B1B;
    }
`

>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
export default Inputs;