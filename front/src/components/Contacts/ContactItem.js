import React from 'react';
import styled from 'styled-components';
import Parser from 'html-react-parser';

const ContactItem = ({name,address,city,phone,map}) => {
    return (
        <ClubWrapper>
            <ClubContent>
                <ClubContentTitle>
                    {name}
                </ClubContentTitle>
                <ClubContentAddress>
                    {address}
                </ClubContentAddress>
                <ClubContentCity>
                    г. {city}, Казахстан
                </ClubContentCity>
                <ClubContentPhone>
                    {phone}
                </ClubContentPhone>
            </ClubContent>
            <ClubMap>
            <td>{Parser(map)}</td>
            </ClubMap>
        </ClubWrapper>
    )
}

const ClubWrapper = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding-bottom:60px;
    padding-top:60px;
    @media (max-width:1280px){
        padding:60px 30px;
    }
    @media (max-width:1095px){
        display:block;
        max-width:90%;
        margin:0 auto;
    }
    `
const ClubContent = styled.div`
    max-width:460px;    
    @media (max-width:1095px){
        margin-bottom:30px;
        margin-left:30px;
    }
`
const ClubContentTitle = styled.div`
    color:#fff;
    margin-bottom:30px;
    font-size:28px;
    line-height:1.17;
    font-weight:600;
`
const ClubContentAddress = styled.div`
    font-size:20px;
    line-height:1.55;
    font-weight:300;
    color:#fff;
`
const ClubContentCity = styled.div`
    font-size:20px;
    line-height:1.55;
    font-weight:300;
    color:#818181;`
const ClubContentPhone = styled.div`
    font-size:20px;
    line-height:1.55;
    font-weight:300;
    color:#fff;
`
const ClubMap = styled.div`
    iframe{
        width:660px;
        height: 400px;
    }
    @media (max-width:1165px){
        iframe{
            width:600px;
            height:340px;
        }
    }
    @media (max-width:1095px){
        iframe{
            width:100%;
        }
    }
`

export default ContactItem;