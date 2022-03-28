import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import styled from 'styled-components';
import { createQuestion, updateFaq } from '../../api';

const QuestionsUpdate = ({handleClose, questionItem}) => {
    const [faq,setFaq] = useState({
        id:questionItem.faqId,
        question:questionItem.question,
        answer:questionItem.answer
    });

    const updateFaq = () => {
        updateFaq(faq);
        handleClose();
    }

    return (
        <QuestionWrapper>
        <QuestionSection>
            <QuestionTitle>
                Изменить вопрос-ответ
            </QuestionTitle>
            <Form className="pt-4">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Id</Form.Label>
                    <Form.Control type="text" placeholder="Id" value={faq.id} onChange={e => setFaq({...faq, id:e.target.value})}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Вопрос</Form.Label>
                    <Form.Control type="text" placeholder="Вопрос" value={faq.question} onChange={e => setFaq({...faq, question:e.target.value})}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Ответ</Form.Label>
                    <Form.Control type="text" placeholder="Ответ" value={faq.answer} onChange={e => setFaq({...faq, answer: e.target.value})}/>
                </Form.Group>
                {
                    faq.id === "" || faq.question === "" || faq.answer === "" ? <Button className="mb-3" variant="danger" onClick={() => alert("Не все инпуты заполнены")}>Изменить</Button> : <Button className="mb-3" variant="success" onClick={updateFaq}>Изменить</Button>
                }
            </Form >
        </QuestionSection>
        </QuestionWrapper>
    )
}

const QuestionWrapper = styled.div`
    display:flex;
`

const QuestionSection = styled.div`
    width:90%;
    margin-left:20px;
    margin-right:20px;
`

const QuestionTitle = styled.div`
    text-align:center;
    font-weight:700;
    font-size:30px;
    padding-top:25px;
`

export default QuestionsUpdate;