import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { getClubs } from '../../api';
import './../../App.css';
import Gym from './Gym';

const Gyms = () => {
    const [gyms,setGyms] = useState([]);
    useEffect(async () => {
        let result = await getClubs();
        setGyms(result.data);
    }, [])
    return (
        <GymsSection>
            <Container>
                <GymsTitle>
                    ЗАЛЫ <span>INVISTUS GO</span>
                </GymsTitle> 
                <GymsItems>
                    {
                        gyms.map((item,index) => {
                            return (
                                <Gym url={item.photoUrl[0]} name={item.clubName} location={item.address} key={index} clubId={item.clubId}/>
                            )
                        })    
                    }
                </GymsItems>
            </Container>
        </GymsSection>
        )
}

const GymsSection = styled.div``;

const Container = styled.div`
    max-width: 1280px;
    margin: 0 auto;
`

const GymsTitle = styled.div`
    font-size: 35px;
    font-weight: 700;
    text-align: center;
    margin-top: 50px;
    margin-bottom: 100px;
    span{
        color:#c11b1b;
    }
`

const GymsItems = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-bottom: 50px;
`


export default Gyms;