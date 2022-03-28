import React, {useState} from 'react';
import styled from 'styled-components';
import {Form, Button} from 'react-bootstrap';
import { createClub, updateClub } from '../../api';

const ClubUpdate = ({handleClose, clubItem}) => {

    const [photos, setPhotos] = useState(0);
    const [gallery, setGallery] = useState([]);

    const [club,setClub] = useState({
        clubName:clubItem.clubName,
        clubId:clubItem.clubId,
        motto:clubItem.motto,
        photoUrl:clubItem.photoUrl,
        gymArea: clubItem.gymArea,
        showersCount: clubItem.showersCount,
        lockersCount: clubItem.lockersCount,
        clubArea: clubItem.clubArea,
        trainersCount: clubItem.trainersCount,
        cardioTrainersCount: clubItem.cardioTrainersCount,
        tittleText: clubItem.tittleText,
        descriptionText: clubItem.descriptionText,
        address: clubItem.address,
        weekendBusinessHours: clubItem.weekendBusinessHours,
        workdaysBusinessHours: clubItem.workdaysBusinessHours,
        contactEmail:clubItem.contactEmail,
        contactPhone:clubItem.contactPhone,
        city:clubItem.city,
        map:clubItem.map
    })

    const renderPhotos = (count) => {
        const arr = [];
        for (let i = 0; i < count; i++){
            arr[i] = '1';
        }
        setGallery(arr);
    }

    const counter = (e) => {
        setPhotos(e.target.value);
    }
    
    const clubHandler = () => {
        updateClub(club);
        handleClose();
    }

    return (
        <ClubWrapper>
        <ClubSection>
            <ClubTitle>
                Изменить данные клуба
            </ClubTitle>
        <Form className="pt-4">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Название клуба</Form.Label>
            <Form.Control type="text" placeholder="Название клуба" value={club.clubName} onChange={e => setClub({...club,clubName:e.target.value})}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Город</Form.Label>
            <Form.Control type="text" placeholder="Город" value={club.city} onChange={e => setClub({...club, city:e.target.value})}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Адрес</Form.Label>
            <Form.Control type="text" placeholder="Адрес" value={club.address} onChange={e => setClub({...club, address:e.target.value})}/>
        </Form.Group>  
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Карта</Form.Label>
            <Form.Control type="text" placeholder="Карта" value={club.map} onChange={e => setClub({...club, map:e.target.value})}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Club ID</Form.Label>
            <Form.Control type="text" placeholder="Club ID" value={club.clubId} onChange={e => setClub({...club,clubId:e.target.value})}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Титул клуба</Form.Label>
            <Form.Control type="text" placeholder="Титул клуба" value={club.motto} onChange={e => setClub({...club, motto: e.target.value})}/>
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Background Image</Form.Label>
            <Form.Control type="text" placeholder="Background Image Url" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>ЧАСЫ РАБОТЫ</Form.Label>
            <Form.Control type="text" placeholder="ПН-ПТ" className="mb-3" value={club.workdaysBusinessHours} onChange={e => setClub({...club, workdaysBusinessHours:e.target.value})}/>
            <Form.Control type="text" placeholder="СБ-ВС" value={club.weekendBusinessHours} onChange={e => setClub({...club, weekendBusinessHours :e.target.value})}/>
        </Form.Group>  
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>КОНТАКТЫ</Form.Label>
            <Form.Control type="text" placeholder="Номер телефона" className="mb-3" value={club.contactPhone} onChange={e => setClub({...club, contactPhone:e.target.value})}/>
            <Form.Control type="text" placeholder="Email" value={club.contactEmail} onChange={e => setClub({...club, contactEmail:e.target.value})}/>
        </Form.Group>  
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Площадь зала</Form.Label>
            <Form.Control type="text" placeholder="Площадь зала" value={club.gymArea} onChange={e => setClub({...club, gymArea:e.target.value})}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Количество душевых</Form.Label>
            <Form.Control type="text" placeholder="Количество душевых" value={club.showersCount} onChange={e => setClub({...club, showersCount:e.target.value})}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Количество шкафчиков</Form.Label>
            <Form.Control type="text" placeholder="Количество шкафчиков" value={club.lockersCount} onChange={e => setClub({...club, lockersCount:e.target.value})}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Площадь клуба</Form.Label>
            <Form.Control type="text" placeholder="Площадь клуба" value={club.clubArea} onChange={e => setClub({...club, clubArea:e.target.value})}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Единиц оборудования</Form.Label>
            <Form.Control type="text" placeholder="Единиц оборудования" value={club.trainersCount} onChange={e => setClub({...club, trainersCount:e.target.value})}/>
        </Form.Group>   
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Кардио тренажеров</Form.Label>
            <Form.Control type="text" placeholder="Кардио тренажеров" value={club.cardioTrainersCount} onChange={e => setClub({...club, cardioTrainersCount:e.target.value})}/>
        </Form.Group>   
        <Form.Group roup controlId="formFile" className="mb-3">
            <Form.Label>Сколько картинок в слайдере?</Form.Label>
            <Input>
            <Form.Control type="text" placeholder="Сколько картинок в слайдере?" onChange={counter}/>
            </Input>
            <ImagesText onClick={() => renderPhotos(photos)}>
                Загрузить картинки
            </ImagesText>
            {
                gallery.map(item => {
                    return (
                        <InputItem>
                            <Form.Control type="text" placeholder="Photo url" />
                        </InputItem>
                    )
                })
            }
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Слайдер титул</Form.Label>
            <Form.Control type="text" placeholder="Кардио тренажеров" value={club.tittleText} onChange={e => setClub({...club, tittleText:e.target.value})}/>
        </Form.Group>   
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Слайдер титул</Form.Label>
            <Form.Control type="text" placeholder="Кардио тренажеров" value={club.descriptionText} onChange={e => setClub({...club, descriptionText:e.target.value})}/>
        </Form.Group>   
        {
           club.clubName === "" || club.clubId === 0 || club.photoUrl.length === 0 || club.gymArea === 0 || club.showersCount === 0 || club.lockersCount === 0 || club.clubArea === 0 || club.trainersCount === 0 || club.cardioTrainersCount === 0 || club.tittleText === "" || club.descriptionText === "" || club.address === "" || club.weekendBusinessHours === "" || club.workdaysBusinessHours === "" || club.contactEmail === "" || club.contactPhone === "" || club.map === "" || club.city === "" ? <Button className="mb-3" variant="danger" onClick={() => alert("Не все инпуты заполнены")}>Изменить</Button> : <Button className="mb-3" variant="success" onClick={clubHandler}>Изменить</Button>  
        }
        </Form>
        </ClubSection>
        </ClubWrapper>
    )
}

const ClubWrapper = styled.div`
    display:flex;
`

const ClubSection = styled.div`
    margin-left:20px;
    width:90%; 
    margin-right:30px;
`

const ClubTitle = styled.div`
    text-align:center;
    font-weight:700;
    font-size:30px;
    padding-top:25px;
`

const Input = styled.div`
    input{
        width:300px;
    }
`
const ImagesText = styled.div`
    background:#040404;
    max-width:200px;
    text-align:center;
    padding:10px 20px;
    color:#fff;
    border-radius:25px;
    margin-top:10px;
`

const InputItem = styled.div`
    margin-bottom:10px;
    margin-top:10px;
`

export default ClubUpdate;