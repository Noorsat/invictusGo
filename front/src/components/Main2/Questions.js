import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { getFaq } from '../../api';

const Questions = ({clicked,setClicked}) => {
    const [faqs, setFaqs] = useState([]);

    useEffect(async () => {
        let result = await getFaq();
        setFaqs(result.data)
    }, [])

    const toggle = index => {
        if (clicked === index){
            return setClicked(null);
        }
        setClicked(index)
    }
    return (
        <QuestionSection id="questions">
            <Container>
                <QuestionTitle>
                    ОСТАЛИСЬ ВОПРОСЫ<span>?</span>
                </QuestionTitle>
                <FirstCircle></FirstCircle>
                <QuestionItems> 
                    <QuestionColumn>
                    {faqs.map((item,index) => {
                        if (index === 0 || index % 2 === 0){
                        return (
                        <div className={`question__item  ${clicked === index ? "active" : ''}`} onClick={() => toggle(index)}>
                                <QuestionItemHeader className="question__item-header">
                                    <QuestionItemText>{item.question}</QuestionItemText>
                                    <QuestionItemImg>
                                        {clicked === index ? <img src="images/close.png" onClick={() => toggle(index)}/> : <img src="images/open.png" onClick={() => toggle(index)}/>}  
                                    </QuestionItemImg>
                                </QuestionItemHeader>
                                {clicked === index ?
                                <QuestionItemAnswer className={`${clicked === index ? "active" : ''}`}>
                                    {item.answer}
                                </QuestionItemAnswer>
                                : null}
        
                            </div>            
                        )
                        }
                    })}
                    </QuestionColumn>
                    <QuestionColumn>
                    {faqs.map((item,index) => {
                        if (index % 2 === 1){
                        return (
                            <div className={`question__item  second__column ${clicked === index ? "active" : ''}`} onClick={() => toggle(index)}>
                                <QuestionItemHeader className="question__item-header">
                                    <QuestionItemText>{item.question}</QuestionItemText>
                                    <QuestionItemImg>
                                        {clicked === index ? <img src="images/close.png" onClick={() => toggle(index)}/> : <img src="images/open.png" onClick={() => toggle(index)}/>}  
                                    </QuestionItemImg>
                                </QuestionItemHeader>
                                {clicked === index ?
                                <QuestionItemAnswer className={`${clicked === index ? "active" : ''}`}>
                                    {item.answer}
                                </QuestionItemAnswer>
                                : null}
        
                            </div>            
                        )
                        }
                    })}
                    </QuestionColumn>
                </QuestionItems>
                <SecondCircle></SecondCircle>
            </Container>
        </QuestionSection>
    )
}

const QuestionSection = styled.div`
    background: #000;
    position:relative;
`

const Container = styled.div`
    max-width:1312px;
    margin: 0 auto;
`

const QuestionTitle = styled.div`
    padding-top: 72px;
    font-size: 60px;
    font-weight: 700;
    color:#fff;
    margin-bottom: 40px;
    font-family:'Neue bold';
    span{
        color:#C11B1B;
    }
`

const QuestionItems = styled.div`
    position:relative;   
    display:flex;
    justify-content:center;
    flex-wrap:wrap;   
    padding-bottom: 175px;
    z-index:100;
    .question__item{
        margin-right:66px;
        height:90px;
        width:507px;
        padding-top:5px;
    }
    .second__column{
        margin-right:0!important;

    }
    @media (max-width:507px){
        .question__item{
        width:300px;
        }
    }
    .question__item.active{
        margin-bottom:30px;
        height:50%;
    }
`;

const QuestionItemHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const QuestionItemText = styled.span`
    margin-left: 30px;  
    display:flex;
    justify-content:center;
    align-items:center;
    height:90px;
`;

const QuestionItemImg = styled.div`
    padding-right: 36px;

`   
const QuestionItemAnswer = styled.div`
    background: #fff;
    padding-left: 31px;
    padding-top: 20px;
    padding-right:37px;
    padding-bottom:15px;
`;

const QuestionColumn = styled.div``

const FirstCircle = styled.div`
    background: #C11B1B;
    filter: blur(250px);
    width:625px;
    height:625px;
    left:0; 
    top:240px;
    position:absolute; 
    z-index:1; 
`

const SecondCircle = styled.div`
    background: #C11B1B;
    filter: blur(190px);
    width:315px;
    height:315px;
    right:160px;
    top:600px;
    position:absolute; 
    z-index:1; 
`


export default Questions;