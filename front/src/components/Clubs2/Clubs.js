import React, {useState, useEffect} from 'react';
import { getClub, getClubs} from '../../api';
import Slider from '../Main/Slider';
import Coach from './Coach';
import Gallery from './Gallery';
import Header from './Header';
import Information from './Information';
import Intro from './Intro';
import Location from './Location';
import Others from './Others';

const Clubs = () => {
    const [burger, setBurger] = useState(false);
    const [club, setClub] = useState([]);
    const [coaches, setCoaches] = useState([])
    const [isFetching, setIsFetching] = useState(true);
    const [otherClubs, setOtherClubs] = useState([]);
    useEffect(async () => {
        setIsFetching(true);
        let id = window.location.href[window.location.href.length-1];
        let clubs = await getClubs();
        setOtherClubs(clubs.data);
        let result = await getClub(id);
        setClub(result.data.club);
        setCoaches(result.data.coaches);
        setIsFetching(false);
    }, [])

    
    if (isFetching===false){
        return (
            <>
                <Header burger={burger} setBurger={setBurger} clubName={club.clubName}/>
                <Information gymArea={club.gymArea} showersCount={club.showersCount} lockersCount={club.lockersCount} clubArea={club.clubArea} trainersCount={club.trainersCount} cardioTrainersCount={club.cardioTrainersCount}/>
                <Gallery photoUrl={club.photoUrl} tittleText={club.tittleText} descriptionText={club.descriptionText}/>
                <Coach coaches={coaches} clubName={club.clubName}/>
                <Location address={club.address} workdaysBusinessHours={club.workdaysBusinessHours} weekendBusinessHours={club.weekendBusinessHours} contactPhone={club.contactPhone} contactEmail={club.contactEmail} map={club.map} city={club.city}/>
                <Others otherClubs={otherClubs} id={club.clubId}/>
            </>
        )
    }else {
        return (
            <>
                <Header burger={burger} setBurger={setBurger} clubName={club.clubName}/>
                <Information gymArea={club.gymArea} showersCount={club.showersCount} lockersCount={club.lockersCount} clubArea={club.clubArea} trainersCount={club.trainersCount} cardioTrainersCount={club.cardioTrainersCount}/>
                <Location address={club.address} workdaysBusinessHours={club.workdaysBusinessHours} weekendBusinessHours={club.weekendBusinessHours} contactPhone={club.contactPhone} contactEmail={club.contactEmail} map={club.map} city={club.city}/>
                <Others otherClubs={otherClubs} id={club.clubId}/>
            </>
        )
    }        
}

export default Clubs;