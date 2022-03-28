import React, {useState} from 'react';
import styled from 'styled-components';
import arrow from './arrowDown.png';

<<<<<<< HEAD
const Select = ({text, options,gym, setGym,setOutput, dropDown, setDrop, selected, setSelected}) => {
=======
const Select = ({text, options,gym, setGym,setOutput}) => {
    const [dropDown, setDrop] = useState(false);
    const [selected, setSelected] = useState(false);
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3

    const drawList = () => {
        setDrop(!dropDown);
    }

    const selectGym = (index,e) => {
        document.querySelectorAll('.option').forEach(item => item.classList.remove('active'));
        const name = options[index].clubName;
        const address = options[index].address;
<<<<<<< HEAD
        const id  = options[index].clubId;
=======
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
        e.target.classList.add("active");
        setOutput(true);
        setSelected(true);
        setGym({
            name:name,
<<<<<<< HEAD
            address:address,
            id:id
=======
            address:address
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
        })
    }

    return (
        <Sel onClick={drawList}>
            <SelectBlock className={`${selected === true ? "selected" : ""}`}>
                <label >
                    {text}
                </label>
                {    
                    dropDown === true ? 
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
                    options.map((item,index) => {
                        return (
<<<<<<< HEAD
                                gym.name == item.clubName ? <OptionItem onClick={(e) => selectGym(index,e)} className={`option active`}>
                                    {item.clubName}
                                </OptionItem> :
                                <OptionItem onClick={(e) => selectGym(index,e)} className={`option`}>
                                    {item.clubName}
                                </OptionItem>
=======
                            <OptionItem onClick={(e) => selectGym(index,e)} className="option">
                                {item.clubName}
                            </OptionItem>
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
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
<<<<<<< HEAD
    cursor:pointer;
=======
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
    &:first-child{
        border-top:1px solid #fff;
    }
    &.active{
        color:#c4c4c4;
    }
`


export default Select;