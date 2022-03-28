import React, {useState} from 'react'
import AppInstall from './AppInstall';
import Clubs from './Clubs';
import Header from './Header'
import Questions from './Questions';
import Rate from './Rate';
import Slider from './Slider';
import TickerSection from './Ticker';

const Main = () => {
    const [current, setCurrent] = useState(0);
    const [clicked, setClicked] = useState(false);
    const [cardText, setCardText] = useState("Просторный тренажерный зал, оборудованный италь- янскими премиальными тренажерами Panatta Sport");
    const [burger, setBurger] = useState(false);
    return (
        <div>
            <Header/> 
            <TickerSection/> 
            {/* <Rate /> */}
            {/* <Slider current={current} setCurrent={setCurrent} cardText={cardText} setCardText={setCardText}/> */}
            <AppInstall/>
            {/* <Clubs/> */}
            {/* <Questions clicked={clicked} setClicked={setClicked}/> */}
        </div>
    )
}

export default Main;