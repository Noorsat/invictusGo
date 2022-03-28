import React, {useState} from 'react';
import styled from 'styled-components';
import arrow from './arrowDown.png';

<<<<<<< HEAD
const Select2 = ({text, options,item, setItem, setOutput2, dropDown, setDrop, selected, setSelected}) => {
=======
const Select2 = ({text, options,item, setItem, setOutput2}) => {
    const [dropDown, setDrop] = useState(false);
    const [selected, setSelected] = useState(false);
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3

    const drawList = () => {
        setDrop(!dropDown);
    }

    const selectTariff = (index,e) => {
        document.querySelectorAll('.option2').forEach(item => item.classList.remove('active'));
        const name = options[index].type;
        const advan = options[index].advantages;
        const amount = options[index].nextMonths;
        e.target.classList.add("active");
        setSelected(true);
        setOutput2(true);
        setItem({
            name:name,
            advantages:advan,
<<<<<<< HEAD
            price:amount,
            PerGymPaymentPlanId: 1
=======
            price:amount
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
        })
    }
   

    return (
        <Sel onClick={drawList}>
            <SelectBlock className={`${selected === true ? "selected" : ""}`}>
                <label>
                    {text}
                </label>
                {    
<<<<<<< HEAD
                    dropDown === true ?     
=======
                    dropDown === true ? 
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
                    <Image onClick={drawList} className="rotate">
                        <img src={arrow} alt="Arrow"/>
                    </Image>
                    :   
                    <Image onClick={drawList}>
                        <img src={arrow} alt="Arrow"/>
                    </Image>
                }
            </SelectBlock>
            <Options className={`${dropDown === true ? "active" : ""}`}>
                {
<<<<<<< HEAD
                    options.map((option,index) => {
                        return (
                            item.name === option.type ?                             
                            <OptionItem onClick={(e) => selectTariff(index,e)} className="option2 active">
                                {option.type}
                            </OptionItem>
                            :
                            <OptionItem onClick={(e) => selectTariff(index,e)} className="option2">
                                {option.type}
=======
                    options.map((item,index) => {
                        return (
                            <OptionItem onClick={(e) => selectTariff(index,e)} className="option2">
                                {item.type}
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
                            </OptionItem>
                        )
                    })
                }
            </Options>
        </Sel>
    )
}


const Sel = styled.div`
    max-width:575px;
    margin-bottom:21px;
    @media (max-width:1041px){
        max-width:95%;
        margin:0 auto 21px;
    }
`
const SelectBlock = styled.div`
    background:#000;
    width:100%;
    height:63px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    
    label{
        font-weight:600;
        color:#fff;
        font-size:18px;
        line-height:63px;
        padding-left:23px;
        padding-top:3px;
    }
    &.selected label{
        color:#c4c4c4; 
    }  
    img{
        padding-right:26px;
    }
    @media (max-width:1041px){
        max-width:95%;
        margin:0 auto;
    }
`

const Image = styled.div`
    &.rotate{
        transform: rotate(180deg);
        margin-right:26px;
    }
`

const Options = styled.div`
    display:none;
    &.active{
        display:block;
    }
    @media (max-width:1041px){
        max-width:95%;
        margin:0 auto;
    }
`

const OptionItem = styled.div`
    max-width:100%;
    background:#000;
    color:#fff;
    font-weight:700;
    padding:20px 0;
    border-bottom:1px solid #fff;
    padding-left:23px;
    &:first-child{
        border-top:1px solid #fff;
    }
    &.active{
        color:#c4c4c4;
    }
`


export default Select2;