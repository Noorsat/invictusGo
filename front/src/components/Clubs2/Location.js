import React from 'react';
import styled from 'styled-components';
import Parser from 'html-react-parser';

const Location = ({address,workdaysBusinessHours,weekendBusinessHours,contactPhone,contactEmail, map, city}) => {
    return (
        <LocationSection>
            <Container>
                <LocationWrapper>
                    <LocationDetails>
                        <LocationTitle>
                            КОНТАКТЫ
                        </LocationTitle>
                        <LocationAddress>
                            <LocationAddressTitle>
                                АДРЕС:
                            </LocationAddressTitle>
                            <LocationCity>
                                г. {city}
                            </LocationCity>
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
    background: #000;
    padding-top:72px;
`

const Container = styled.div`
    max-width:1280px;
    margin: 0 auto;
`
const LocationTitle = styled.div`
    font-weight:700;
    font-family:'Neue bold';
    font-size:60px;
    line-height:66px;
    letter-spacing:3px;
    color:#fff;
    margin-bottom:34px;
`;

const LocationCity = styled.div`
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 1.5px;
    color: #FFFFFF;
    margin-bottom:10px;
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
    margin-bottom:24px;
`

const LocationAddressTitle = styled.div`
    letter-spacing:1.5px;
    font-size:20px;
    font-weight:900;
    color:#fff;
    line-height:24px;
    margin-bottom:20px;
`

const LocationAddressText = styled.div`
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 1.5px;
    color: #FFFFFF;
    opacity: 0.65;
`

const LocationTime = styled.div`
    margin-bottom:24px;
`

const LocationTimeTitle = styled.div`
    font-weight: 900;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 1.5px;
    color: #FFFFFF;
    margin-bottom:20px;
`

const LocationTimeText = styled.div`
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 1.5px;
    color: #FFFFFF;
`

const LocationContacts = styled.div``

const LocationContactsTitle = styled.div`
font-weight: 900;
font-size: 20px;
line-height: 24px;
letter-spacing: 1.5px;
color: #FFFFFF;
margin-bottom:20px;
`

const LocationContactsText = styled.div`
font-weight: 500;
font-size: 16px;
line-height: 20px;
letter-spacing: 1.5px;
color: #FFFFFF;
`

const LocationCard = styled.div`
    iframe{
        width:764px;
        height:460px;
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