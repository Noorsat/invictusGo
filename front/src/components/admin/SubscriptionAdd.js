import React, {useState,useEffect} from 'react';
import styled from 'styled-components';
import {Form,Button} from 'react-bootstrap';
import { createSubscription } from '../../api';

const SubscriptionAdd = ({handleClose}) => {
    const [achievement, setAchievement] = useState([]);
    const [bonus, setBonus] = useState([]);
    const [input,setInput] = useState("");

    const [subscription, setSubscription] = useState({
        bonus: [],
        advantages:[],
        type: "",
        firstMonth:0,
        nextMonths:0
    })

    const inputHandler = (e) => {
        setInput(e.target.value);
    }

    const achievementHandler = () => {
        setAchievement(achievement.concat(input))
        setSubscription({...subscription, advantages:subscription.advantages.concat(input)})
        setInput("");
    }

    const bonusHandler = () => {
        setBonus(bonus.concat(input));
        setSubscription({...subscription, bonus:subscription.bonus.concat(input)})
        setInput("");
    }


    const addSubscription = () => {
        createSubscription(subscription);
        handleClose();
    }

    return (
        <SubscriptionWrapper>
        <SubscriptionSection>
            <SubscriptionTitle>
                Добавить тариф
            </SubscriptionTitle>
        <Form className="pt-4">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Срок тариф</Form.Label>
            <Form.Control type="email" placeholder="Срок тарифа" value={subscription.type} onChange={e => setSubscription({...subscription, type:e.target.value})}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Цена первого месяца</Form.Label>
            <Form.Control type="email" placeholder="Цена первого месяца" value={subscription.firstMonth} onChange={e => setSubscription({...subscription, firstMonth:e.target.value})}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Цена со второго месяца</Form.Label>
            <Form.Control type="email" placeholder="Цена со второго месяца" value={subscription.nextMonths} onChange={e => setSubscription({...subscription, nextMonths:e.target.value})}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Что входит в цену</Form.Label>
            <Form.Control type="text" placeholder="Примущества или бонусы" className="mb-3" value={input} onChange={inputHandler}/>
            <Button variant="primary" onClick={achievementHandler} className="mb-3 mr-3" >Добавить примущества</Button>
            <Button variant="primary" onClick={bonusHandler} className="mb-3" >Добавить бонусы</Button>
            <Text>Список примущества</Text>
            <List>
                {
                    achievement.map(item => {
                        return (
                            <ListItem>{item}</ListItem>
                        )
                    })
                }
            </List>
            <Text>Список бонусов</Text>
            <List>
                {
                    bonus.map(item => {
                        return (
                            <ListItem>{item}</ListItem>
                        )
                    })
                }
            </List>
        </Form.Group>
        {
            subscription.bonus.length === 0 || subscription.advantages.length === 0 || subscription.type === "" || subscription.firstMonth === 0 || subscription.nextMonths === 0 ? <Button className="mb-3" variant="danger" onClick={() => alert("Не все инпуты заполнены")}>Создать</Button>  : <Button className="mb-3" variant="success" onClick={addSubscription}>Создать</Button>
        }
        </Form>
        </SubscriptionSection>
        </SubscriptionWrapper>
    )
}

const SubscriptionWrapper = styled.div`
    display:flex;
`

const SubscriptionSection = styled.div`
    width:90%;
    margin-left:20px;
    margin-right:20px;
`

const SubscriptionTitle = styled.div`
    text-align:center;
    font-weight:700;
    font-size:30px;
    padding-top:25px;
`

const List = styled.ul`
    list-style:initial;
    display:block;
    border-bottom:1px solid #c4c4c4;
    padding-bottom:10px;
`
const ListItem = styled.li`
    color:#000;
    font-weight:700
`

const Text = styled.div`
    border-bottom:1px solid #c4c4c4;
    padding-bottom:10px;
    font-weight:700
`



export default SubscriptionAdd;