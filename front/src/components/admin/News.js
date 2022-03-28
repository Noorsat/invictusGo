import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Card,Button,Modal} from 'react-bootstrap';
import { getNews } from '../../api';
import Header from './Header';
import NewsAdd from './NewsAdd';

const News = () => {
    const [news, setNews] = useState("");

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    useEffect(async () => {
        let result = await getNews();
        setNews(result.data);
    })

    return (
        <Wrapper>
            <Header/>
            <NewsSection>
                <NewsButton>
                    <Button variant="danger" style={{width:200, marginLeft:'auto', marginRight:'auto', textAlign:'center' }} onClick={handleShow}>Создать новость</Button>
                </NewsButton>
                <NewsItems>
                {/* {
                    news.map(item => {
                        return ( 
                            <Card style={{ width: '18rem', marginRight:40, marginLeft:40}}>
                                <Card.Img variant="top" src={item.photoUrl[0]} />
                                <Card.Body>
                                    <Card.Title>{item}</Card.Title>
                                    <Button variant="primary" style={{marginRight:20}} onClick={() => handleShow2(item)}>Изменить</Button>
                                    <Button variant="primary">Удалить</Button>
                                </Card.Body>
                            </Card>
                        )
                    })
                } */}
                </NewsItems>
            </NewsSection>
            <Modal show={show} onHide={handleClose}>
                <NewsAdd handleClose={handleClose}/>        
            </Modal>
        </Wrapper> 
    )
}

const Wrapper = styled.div`
    display:flex;
`

const NewsSection = styled.div`
    width:100%;
`
const NewsButton = styled.div`
    text-align:center;
    margin-top:30px;
`

const NewsItems = styled.div``

export default News;