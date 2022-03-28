import React from 'react';
import styled from 'styled-components';
import Parser from 'html-react-parser';

const Location = ({address,workdaysBusinessHours,weekendBusinessHours,contactPhone,contactEmail, map}) => {
    return (
        <LocationSection>
            <Container>
                <LocationTitle>
                    КОНТАКТЫ ЗАЛА
                </LocationTitle>
                <LocationWrapper>
                    <LocationDetails>
                        <LocationAddress>
                            <LocationAddressTitle>
                                АДРЕС:
                            </LocationAddressTitle>
                            <LocationAddressText>
                                {address}
                            </LocationAddressText>
                        </LocationAddress>
                        <LocationTime>
                            <LocationTimeTitle>
                                ЧАСЫ РАБОТЫ:
                            </LocationTimeTitle>
                            <LocationTimeText>
                                ПН-ПТ: {workdaysBusinessHours}
                                <br></br>СБ-ВС: {weekendBusinessHours}
                            </LocationTimeText>
                        </LocationTime>
                        <LocationContacts>
                            <LocationContactsTitle>
                                КОНТАКТЫ:
                            </LocationContactsTitle>
                            <LocationContactsText>
                                {contactPhone}<br></br>
                                {contactEmail}
                            </LocationContactsText>
                        </LocationContacts>
                    </LocationDetails>
                    <LocationCard>
                        <td>{Parser(map.toString())}</td>
                    </LocationCard>
                </LocationWrapper>
            </Container>
        </LocationSection>
    )
}

const LocationSection = styled.div`
    background: #F5F5F5;
    padding-top:72px;
`

const Container = styled.div`
    max-width:1280px;
    margin: 0 auto;
`
const LocationTitle = styled.div`
    font-weight:700;
    font-size: 35px;
    text-align:center;
    padding-bottom:48px;
`;

const LocationWrapper = styled.div`
    display:flex;
    justify-content:center;
    padding-bottom:72px;
    @media (max-width:735px){
        flex-direction:column;
    }
`

const LocationDetails = styled.div`
    margin-right:75px;
    @media (max-width:1089px){
        margin-left:20px;
    }
    @media (max-width:728px){
        margin-left:0;
        margin-right:0;
        width:90%;
        margin: 0 auto;
        margin-bottom:60px;
    }
`

const LocationAddress = styled.div`
    margin-bottom:68px;
`

const LocationAddressTitle = styled.div`
    font-weight:700;
    font-size: 20px;
`

const LocationAddressText = styled.div`
    font-size:18px;
`

const LocationTime = styled.div`
    margin-bottom:50px;
`

const LocationTimeTitle = styled.div`
    font-weight:700;
    font-size: 20px;
`

const LocationTimeText = styled.div`
    font-size:18px;
`

const LocationContacts = styled.div``

const LocationContactsTitle = styled.div`
    font-weight:700;
    font-size: 20px;
`

const LocationContactsText = styled.div`
    font-size:18px;
`

const LocationCard = styled.div`
    iframe{
        width:708px;
        height:517px;
    }
    @media (max-width:1089px){
        iframe{
            width:100%;
            height:100%;
        }
    }
    @media (max-width:735px){
        text-align:center;
        iframe{
            width:90%;
        }
    }
`









export default Location;