import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import {Form, Button} from 'react-bootstrap';
<<<<<<< HEAD
import { getClubs, signupCoach, updateCoach } from '../../api';
=======
import { signupCoach, updateCoach } from '../../api';
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
import Header from './Header';

const CoachUpdate = ({handleClose,coachItem}) => {
    const [achievement, setAchievement] = useState([]);
    const [input,setInput] = useState("");

    const [certificate, setCertificate] = useState([]);
    const [input2, setInput2] = useState("");
    const [coach, setCoach] = useState({
        fullName : coachItem.fullName,
        email: coachItem.email,
        password: coachItem.password,
        club: coachItem.club,
        clubId: coachItem.clubId,
        photoUrl: coachItem.photoUrl,
        memberId:coachItem.memberId,
        instagramLink:coachItem.instagramLink,
        achievements:coachItem.achievements,
        experience:coachItem.experience,
        certificates:coachItem.certificates,
        type: coachItem.type,
        motto:coachItem.motto
    }); 
<<<<<<< HEAD
    const [gyms, setGyms] = useState([]);
    useEffect(async () => {
        let result = await getClubs();
        setGyms(result.data);
    },[]);
=======

>>>>>>> 07f340609eaeac8a073acc8610760690331252a3

    const inputHandler = (e) => {
        setInput(e.target.value);
    }

    const achievementHandler = () => {
        setAchievement(achievement.concat(input))
        setCoach({...coach, achievements:coach.achievements.concat(input)});
        setInput("");
    }

    const input2Handler = (e) => {
        setInput2(e.target.value);
    }

    const certificateHandler = () => {
        setCertificate(certificate.concat(input2))  
        setCoach({...coach, certificates:coach.certificates.concat(input)});
        setInput2("");
    }

<<<<<<< HEAD
    const handleCoachSign = (coach) => {
        updateCoach(coach);
    }

    const findClubId = (text) => {
        let id = 0;
        gyms.map(item => {
            if ((item.clubName).localeCompare(text)){
               id = item.clubId;
            }
        })
        return id;
    }


=======
    const handleCoachSign = () => {
        updateCoach();
    }

>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
    return (
        <CoachWrapper>
        <CoachSection>
            <CoachTitle>
                Изменить данные тренера
            </CoachTitle>
        <Form className="pt-4">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Имя тренера</Form.Label>
            <Form.Control value={coach.fullName} onChange={e => setCoach({...coach, fullName: e.target.value})} type="text" placeholder="Имя тренера" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Member Id</Form.Label>
            <Form.Control value={coach.memberId} onChange={e => setCoach({...coach, memberId: e.target.value})} type="text" placeholder="Member Id" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email</Form.Label>
            <Form.Control value={coach.email} onChange={e => setCoach({...coach, email: e.target.value})} type="text" placeholder="Email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Password</Form.Label>
            <Form.Control value={coach.password} onChange={e => setCoach({...coach, password: e.target.value})} type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Клуб</Form.Label>
<<<<<<< HEAD
            <Form.Control as="select" onChange={e => setCoach({...coach, club:e.target.value, clubId: findClubId(e.target.value)}) }>
                {
                        gyms.map(item => {
                        return (
                            <option>{item.clubName}</option>
                        )
                    })
                }
                <option>Aksay</option>
=======
            <Form.Control as="select" onChange={e => setCoach({...coach, club:e.target.value})}>
                <option>Invictus Go Samal</option>
                <option>Invictus Go Aksay</option>
                <option>Invictus Go Sauran</option>
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
            </Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Club Id</Form.Label>
<<<<<<< HEAD
            <Form.Control type="text" placeholder="Club Id" value={coach.clubId} readOnly="true"/>
=======
            <Form.Control type="text" placeholder="Club Id" value={coach.clubId} onChange={e => setCoach({...coach, clubId: e.target.value})}/>
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Фотка</Form.Label>
            <Form.Control type="text" placeholder="Фотка (ссылка)" value={coach.photoUrl} onChange={e => setCoach({...coach, photoUrl: e.target.value})}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Цитата</Form.Label>
            <Form.Control type="text" placeholder="Цитата тренера" value={coach.motto} onChange={e => setCoach({...coach, motto: e.target.value})}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Instagram</Form.Label>
            <Form.Control type="text" placeholder="Instagram" value={coach.instagramLink} onChange={e => setCoach({...coach, instagramLink: e.target.value})}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Достижение</Form.Label>
            <Form.Control type="text" placeholder="Достижение" className="mb-3" value={input} onChange={inputHandler}/>
            <Button variant="primary" onClick={achievementHandler} className="mb-3">Добавить достижение</Button>
            <Text>Список достижение</Text>
            <List>
                {
                    achievement.map(item => {
                        return (
                            <ListItem>{item}</ListItem>
                        )
                    })
                }
            </List>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Опыт работы</Form.Label>
            <Form.Control type="text" placeholder="Опыт работы" value={coach.experience} onChange={e => setCoach({...coach, experience:e.target.value })}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Обучение и сертификаты</Form.Label>
            <Form.Control type="text" placeholder="Обучение и сертификаты" className="mb-3" value={input2} onChange={input2Handler}/>
            <Button variant="primary" onClick={certificateHandler} className="mb-3">Добавить обучение и сертификаты:</Button>
            <Text>Список обучение и сертификаты:</Text>
            <List>
                {
                    certificate.map(item => {
                        return (
                            <ListItem>{item}</ListItem>
                        )
                    })
                }
            </List>
        </Form.Group>
        </Form>
        {
<<<<<<< HEAD
            coach.fullName === "" || coach.email === "" || coach.password === "" || coach.club === "" || coach.clubId === 0 || coach.photoUrl === "" || coach.memberId === 0 || coach.instagramLink === "" || coach.achievements.length === 0 || coach.experience === 0 || coach.certificates.length === 0 || coach.type !== "coach" || coach.motto === "" ? <Button className="mb-3" variant="danger" onClick={() => alert("Не все инпуты заполнены")}>Изменить</Button> : <Button className="mb-3" variant="success" onClick={() => handleCoachSign(coach)}>Изменить</Button>
=======
            coach.fullName === "" || coach.email === "" || coach.password === "" || coach.club === "" || coach.clubId === 0 || coach.photoUrl === 0 || coach.memberId === 0 || coach.instagramLink === "" || coach.achievements.length === 0 || coach.experience === 0 || coach.certificates.length === 0 || coach.type !== "coach" || coach.motto === "" ? <Button className="mb-3" variant="danger" onClick={() => alert("Не все инпуты заполнены")}>Изменить</Button> : <Button className="mb-3" variant="success" onClick={() => handleCoachSign(coach)}>Изменить</Button>
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
        }
        </CoachSection>
        </CoachWrapper>
    )
}

const CoachWrapper = styled.div`
    display:flex;
`

const CoachSection = styled.div`
    width:90%;
    margin-left:20px;
    margin-right:20px;
`

const CoachTitle = styled.div`
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




export default CoachUpdate;