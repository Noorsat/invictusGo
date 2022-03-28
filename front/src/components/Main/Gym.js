import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const Gym = ({url,name,location,clubId}) => {
    return (
        <GymItem>
            <GymItemImg>
                <img src={url} alt="Gym"/>
            </GymItemImg>
            <GymItemName>
                {name}
            </GymItemName>
            <GymItemFooter>
                <GymItemFooterBtn>
                    <NavLink to={"/club/" + clubId}>страница клуба</NavLink>
                </GymItemFooterBtn>
                <GymItemLocation>
                    г. {location}
                </GymItemLocation>
            </GymItemFooter>
        </GymItem>
    )
}

const GymItem = styled.div`
    margin-bottom:60px;
`;

const GymItemImg = styled.div`
    img{
        width:300px;
        margin-bottom:20px;
    }
`
const GymItemName = styled.div`
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 25px;
`

const GymItemFooter = styled.div`
    display: flex;
    align-items: center;
    @media (max-width:447px){
        display:block;
    }
`

const GymItemFooterBtn = styled.div`
    a{
        color: #fff;
        background: #000;
        text-decoration: none;
        font-weight: 700;
        padding: 10px 15px;
        margin-right: 20px;
    }
    @media (max-width:447px){
        margin-bottom:25px;
    }
`;

const GymItemLocation = styled.div`
    font-weight: 700;
`

export default Gym;