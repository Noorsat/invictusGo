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
        <QuestionSection>
            <Container>
                <QuestionTitle>
                    ЧАСТЫЕ ВОПРОСЫ
                </QuestionTitle>
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
                </QuestionItems>
            </Container>
        </QuestionSection>
    )
}

const QuestionSection = styled.div`
    background: #f5f5f5;
`

const Container = styled.div`
    max-width:1280px;
    margin: 0 auto;
`

const QuestionTitle = styled.div`
    text-align: center;
    padding-top: 72px;
    font-size: 35px;
    font-weight: 700;
    margin-bottom: 40px;
`

const QuestionItems = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content: space-around;
    padding-bottom: 175px;
    .question__item{
        width:507px;
        padding-top:5px;
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
    padding-top: 25px;
    padding-bottom:28px;
`

const QuestionItemText = styled.span`
    margin-left: 30px;  
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


export default Questions;