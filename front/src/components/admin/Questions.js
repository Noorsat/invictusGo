import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Button,Card, Modal} from 'react-bootstrap';
import { deleteFaq, getFaq } from '../../api';
import Header from './Header';
import QuestionsAdd from './QuestionsAdd';
import QuestionsUpdate from './QuestionsUpdate';

const Questions = () => {
    const [questions, setQuestions] = useState([]);
    const [questionItem, setQuestionItem] = useState([]);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = (item) => {
        setQuestionItem(item);
        setShow2(true);
    }

    useEffect(async () => {
        let result = await getFaq();
        setQuestions(result.data);
    },[])

    const deleteHandler = (question) => {
        deleteFaq(question);
    }

    return (   
        <Wrapper>
            <Header/>
            <QuestionsWrapper>
                <QuestionsAddButton>
                    <Button variant="danger" style={{width:300}} onClick={handleShow}>Добавить вопрос-ответ</Button>
                </QuestionsAddButton>
                <QuestionsItems>
                    {
                        questions.map(item => {
                            return ( 
                                <Card style={{ width: '18rem', marginRight:40, marginLeft:40, marginBottom:10, marginTop:10}}>
                                    <Card.Img variant="top" src={item.photoUrl} />
                                    <Card.Body>
                                        <Card.Title>{item.question}</Card.Title>
                                        <Button variant="primary" style={{marginRight:20}} onClick={() => handleShow2(item)}>Изменить</Button>
                                        <Button variant="primary" onClick={() => deleteHandler(item.question)}>Удалить</Button>
                                    </Card.Body>
                                </Card>
                            )
                        })
                    }
                </QuestionsItems>
            </QuestionsWrapper>
            <Modal show={show} onHide={handleClose}>
                <QuestionsAdd handleClose={handleClose}/>        
            </Modal>
            <Modal show={show2} onHide={handleClose2}>
                <QuestionsUpdate handleClose={handleClose2} questionItem={questionItem}/>        
            </Modal>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display:flex;
`
const QuestionsWrapper = styled.div`
    width:100%;
`
const QuestionsAddButton = styled.div`
    text-align:center;
    margin-top:30px;
`

const QuestionsItems = styled.div`
    display:flex;
    justyify-content:space-around;
    flex-wrap:wrap;
`

export default Questions;