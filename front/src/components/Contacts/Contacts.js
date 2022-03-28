import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { getClubs } from '../../api';
import ContactItem from './ContactItem';
import Header from './Header';

const Contacts = () => {
    const [burger, setBurger] = useState(false);
    const [clubs, setClubs] = useState([]);

    useEffect(async () => {
        let result = await getClubs();
        setClubs(result.data)
    },[])

    return (   
        <ContactsSection>
            <Container>
            <Header burger={burger} setBurger={setBurger}/>
            {
                clubs.map(item => {
                    return (
                        <ContactItem name={item.clubName} address={item.address} city={item.city} phone={item.contactPhone} map={item.map}/>
                    );
                })
            }
            </Container>
        </ContactsSection>
    )
}

const ContactsSection = styled.section`
    background:#000;
`

const Container = styled.div`
    max-width:1280px;
    margin:0 auto;
`



export default Contacts;