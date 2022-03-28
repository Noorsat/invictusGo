import React, {useEffect, useState} from "react";
import styled from 'styled-components';
import {Button,Card, Modal} from 'react-bootstrap';
import Header from "./Header";
import { getSubscriptions, updateSubscription } from "../../api";
import SubscriptionAdd from "./SubscriptionAdd";
import SubscriptionUpdate from "./SubscriptionUpdate";

const SubscriptionList = () => {
    const [subsc, setSubsc] = useState([]);
    const [subscItem, setSubscItem] = useState([]);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = (item) => {
        setSubscItem(item);
        setShow2(true);
    }

    useEffect(async () => {
        let result = await getSubscriptions();
        setSubsc(result.data);
    },[])
    return (
        <Wrapper>
            <Header/>
            <Subscriptions>
                <SubscriptionAddButton>
                    <Button variant="danger" style={{width:200}} onClick={handleShow}>Добавить тариф</Button>
                </SubscriptionAddButton> 
                <SubscriptionItems>
                    {
                        subsc.map(item => {
                            return ( 
                                <Card style={{ width: '18rem', marginRight:40, marginLeft:40}}>
                                    <Card.Body>
                                        <Card.Title>{item.type}</Card.Title>
                                        <Button variant="primary" style={{marginRight:20}} onClick={() => handleShow2(item)}>Изменить</Button>
                                    </Card.Body>
                                </Card>
                            )
                        })
                    }
                </SubscriptionItems>
            </Subscriptions>
            <Modal show={show} onHide={handleClose}>
                <SubscriptionAdd handleClose={handleClose}/>        
            </Modal>
            <Modal show={show2} onHide={handleClose2}>
                <SubscriptionUpdate handleClose={handleClose2} subscItem={subscItem}/>        
            </Modal>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display:flex;
`

const Subscriptions = styled.div`
    width:100%;
`

const SubscriptionAddButton = styled.div`
    text-align:center;
    margin-top:30px;
    margin-bottom:30px; 
`;

const SubscriptionItems = styled.div`
    display:flex;
    justift-content:space-around;
    flex-wrap:wrap;
`;

export default SubscriptionList;