import React, {useState, useEffect} from 'react';
import { getClub} from '../../api';
import Slider from '../Main/Slider';
import Coach from './Coach';
import Gallery from './Gallery';
import Header from './Header';
import Information from './Information';
import Intro from './Intro';
import Location from './Location';

const Clubs = () => {
    const [burger, setBurger] = useState(false);
    const [club, setClub] = useState([]);
    const [coaches, setCoaches] = useState([])
    const [isFetching, setIsFetching] = useState(true);
    useEffect(async () => {
        setIsFetching(true);
        let id = window.location.href[window.location.href.length-1]
        let result = await getClub(id);
        setClub(result.data.club);
        setCoaches(result.data.coaches);
        setIsFetching(false);
    }, [])

    
    if (isFetching===false){
        return (
            <>
                <Header burger={burger} setBurger={setBurger}/>
                <Intro clubName={club.clubName} motto={club.motto}/>
                <Information gymArea={club.gymArea} showersCount={club.showersCount} lockersCount={club.lockersCount} clubArea={club.clubArea} trainersCount={club.trainersCount} cardioTrainersCount={club.cardioTrainersCount}/>
                <Gallery photoUrl={club.photoUrl} tittleText={club.tittleText} descriptionText={club.descriptionText}/>
                <Coach coaches={coaches}/>
                <Location address={club.address} workdaysBusinessHours={club.workdaysBusinessHours} weekendBusinessHours={club.weekendBusinessHours} contactPhone={club.contactPhone} contactEmail={club.contactEmail} map={club.map}/>
            </>
        )
    }else {
        return (
            <>
                <Header burger={burger} setBurger={setBurger}/>
                <Intro clubName={club.clubName} motto={club.motto}/>
                <Information gymArea={club.gymArea} showersCount={club.showersCount} lockersCount={club.lockersCount} clubArea={club.clubArea} trainersCount={club.trainersCount} cardioTrainersCount={club.cardioTrainersCount}/>
                <Location address={club.address} workdaysBusinessHours={club.workdaysBusinessHours} weekendBusinessHours={club.weekendBusinessHours} contactPhone={club.contactPhone} contactEmail={club.contactEmail} map={club.map}/>
            </>
        )
    }        
}

export default Clubs;