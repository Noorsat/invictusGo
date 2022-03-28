import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import styled from 'styled-components';
import { createQuestion } from '../../api';

const QuestionsAdd = ({handleClose}) => {
    const [faq,setFaq] = useState({
        id:'',
        question:'',
        answer:''
    });

    const createFaq = () => {
        createQuestion(faq);
        handleClose();
    }

    return (
        <QuestionWrapper>
        <QuestionSection>
            <QuestionTitle>
                Создать вопрос-ответ
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
                    faq.id === "" || faq.question === "" | faq.answer === "" ? <Button className="mb-3" variant="danger" onClick={() => alert("Не все инпуты заполнены")}>Создать</Button> : <Button className="mb-3" variant="success" onClick={createFaq}>Создать</Button>
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



export default QuestionsAdd;