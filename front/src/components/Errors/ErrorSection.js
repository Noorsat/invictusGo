import React from 'react';
import styled from 'styled-components';
import leftArrow from './leftArrow.png';
import {NavLink} from 'react-router-dom';

const ErrorSection = ({number,text}) => {
    return (
        <ErrorShow>
            <ErrorNumber>
                {number}
            </ErrorNumber>
            <ErrorText>
                {text}
            </ErrorText>
            <ErrorRemove>
                <ErrorContent>
                    <ErrorRemoveImg>
                        <img src={leftArrow} alt="left" />
                    </ErrorRemoveImg>
                    <ErrorRemoveText>
                        <NavLink to="/">вернуться на главную</NavLink>
                    </ErrorRemoveText>
                </ErrorContent>
            </ErrorRemove>
        </ErrorShow>
    )
}

const ErrorShow = styled.div`
    border: 10px solid #000;
    max-width:761px;
    height: 650px;
    margin: 0 auto;
    margin-top:224px;
    position:relative;
`

const ErrorNumber = styled.div`
    font-size: 200px;
    text-align:center;
    color: #C11B1B;
    font-weight: bold;  
    margin-top:150px;
`

const ErrorText = styled.div`
    color: #c11b1b;
    font-weight: bold;
    font-size: 34px;
    text-align: center;
`

const ErrorContent = styled.div`
    display:flex;
    position:absolute;
    right:50px;
    top:55px;
    width:550px;
`

const ErrorRemove = styled.div`
    position:absolute;
    bottom:-90px;
    left:-10px;
    height:0;
    width:0;
    border-top:197px solid transparent;
    border-left:781px solid #c11;
    border-bottom:100px solid #c11;
    `

const ErrorRemoveImg = styled.div`
    margin-right:10px;
    margin-top:7px;
`

const ErrorRemoveText = styled.div`
    a{
        color:#fff;
        font-weight: bold;
        font-size: 34px;
        text-decoration:none;
    }
`

export default ErrorSection;