import React, {useState, useEffect} from 'react';
import { deleteCoach, getCoachs } from '../../api';
import styled from 'styled-components';
import {Button,Card, Modal} from 'react-bootstrap';
import Header from './Header';
import CoachAdd from './CoachAdd';
import CoachUpdate from './CoachUpdate';

const Coach = () => {
    const [coachs, setCoachs] = useState([]);
    const [coach,setCoach] = useState([]);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = (item) => {
        setCoach(item);
        setShow2(true);
    }

    useEffect(async () => {
        let result = await getCoachs();
        console.log(result.data);
        setCoachs(result.data);
    }, [])

    const deleteHandler = (memberId) => {
        deleteCoach(memberId);
    }
    return (
        <Wrapper>
            <Header />
            <CoachsList>
                <CoachButtonAdd>
                    <Button variant="danger" style={{width:200}} onClick={handleShow}>Добавить тренера</Button>
                </CoachButtonAdd>
                <CoachItems>
                    {
                        coachs.map(item => {
                            return ( 
                                <Card style={{ width: '18rem', marginRight:40, marginLeft:40}}>
                                    <Card.Img variant="top" src={item.photoUrl} />
                                    <Card.Body>
                                        <Card.Title>{item.fullName}</Card.Title>
                                        <Button variant="primary" style={{marginRight:20}} onClick={() => handleShow2(item)}>Изменить</Button>
                                        <Button variant="primary" onClick={() => deleteHandler(item.memberId)}>Удалить</Button>
                                    </Card.Body>
                                </Card>
                            )
                        })
                    }
                </CoachItems>
            </CoachsList>
            <Modal show={show} onHide={handleClose}>
                <CoachAdd handleClose={handleClose}/>        
            </Modal>
            <Modal show={show2} onHide={handleClose2}>
                <CoachUpdate handleClose={handleClose2} coachItem={coach}/>        
            </Modal>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display:flex;
    justify-content:space-between;
`
const CoachsList = styled.div`
    width:100%;
`

const CoachButtonAdd = styled.div`
    text-align:center;
    margin-top:30px;
    margin-bottom:30px; 
`

const CoachItems = styled.div`
display:flex;
justift-content:space-around;
flex-wrap:wrap;
`;





export default Coach;