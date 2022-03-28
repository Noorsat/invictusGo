import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { deleteClub, getClubs } from '../../api';
import {Card,Button,Modal} from 'react-bootstrap';
import Header from './Header';
import ClubAdd from './ClubAdd';
import ClubUpdate from './ClubUpdate';

const Club = () => {
    const [club, setClub] = useState([]);
    const [clubItem, setClubItem] = useState([]);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

const [show2, setShow2] = useState(false)
    const handleClose2 = () => setShow2(false);
    const handleShow2 = (item) => {
        setClubItem(item);
        setShow2(true);
    }

    useEffect(async () => {
        let result = await getClubs();
        setClub(result.data);
    }, [])

    const deleteHandler = (id) => {
        console.log(id);
        deleteClub(id);
    }
    return (
        <div>
        <Container>
            <Header />
            <Clubs>
            <ButtonCreate>
                <Button variant="danger" style={{width:200, marginLeft:'auto', marginRight:'auto', textAlign:'center' }} onClick={handleShow}>Создать клуб</Button>
            </ButtonCreate>
            <Wrapper>
                {
                    club.map(item => {
                        return ( 
                            <Card style={{ width: '18rem', marginRight:40, marginLeft:40, marginBottom:20}}>
                                <Card.Img variant="top" src={item.photoUrl[0]} />
                                <Card.Body>
                                    <Card.Title>{item.clubName}</Card.Title>
                                    <Button variant="primary" style={{marginRight:20}} onClick={() => handleShow2(item)}>Изменить</Button>
                                    <Button variant="primary" onClick={() => deleteHandler(item.clubId)}>Удалить</Button>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </Wrapper>
            </Clubs>
        </Container>
        <Modal show={show} onHide={handleClose}>
            <ClubAdd handleClose={handleClose}/>        
        </Modal>

        <Modal show={show2} onHide={handleClose2}>
            <ClubUpdate handleClose={handleClose2} clubItem={clubItem}/>        
        </Modal>

        </div>
    )
}

const Container = styled.div`
    display:flex;
`

const Wrapper = styled.div`
    display:flex;
    justify-content:space-around;
    flex-wrap:wrap;
    margin-top:30px;
`
const ButtonCreate = styled.div`
    text-align:center;
    margin-top:30px;
`

const Clubs = styled.div``;


export default Club;