import React, {useState} from 'react';
import Gyms from './Gyms';
import Header from './Header';
import Questions from './Questions';
import Rate from './Rate';
import Slider from './Slider';


const Main = () => {
    const [current, setCurrent] = useState(0);
    const [clicked, setClicked] = useState(false);
    const [cardText, setCardText] = useState("Просторный тренажерный зал, оборудованный италь- янскими премиальными тренажерами Panatta Sport");
    const [burger, setBurger] = useState(false);

    return (
        <>
            <Header burger={burger} setBurger={setBurger}/>
            <Slider current={current} setCurrent={setCurrent} cardText={cardText} setCardText={setCardText}/>
            <Rate/>
            <Gyms/>
            <Questions clicked={clicked} setClicked={setClicked}/> 
        </>
    )
}

export default Main;