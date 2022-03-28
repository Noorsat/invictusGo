import React from 'react';
import styled from 'styled-components';

const CoachSection = ({coachsList, setCoachsList, selectedGym}) => {    
    return (
        <Container>
        <CoachsItems>
<<<<<<< HEAD
            {console.log(selectedGym)}
=======
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
            {
                selectedGym.map(element => {
                    return(
                        coachsList[element].map(item => {
<<<<<<< HEAD
                            console.log(item);
=======
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
                            return (
                                <CoachItem>
                                    <CoachItemImage>
                                        <img src={item.photoUrl}/>
                                    </CoachItemImage>
                                    <CoachItemName>
                                        {item.fullName}
                                    </CoachItemName>
                                    <CoachItemText>
                                        {
<<<<<<< HEAD
                                            item.description
=======
                                            item.motto
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
                                        }
                                    </CoachItemText>
                                </CoachItem>
                        )})
                    )}
                )
            }    
        </CoachsItems>
        </Container>
    )
}
const Container = styled.div`
    max-width:1280px;
    margin: 0 auto;
`
const CoachsItems = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    margin-top:20px;
    @media (max-width:425px){
        margin-left:20px;
    }
`
const CoachItem = styled.div`
    max-width:300px;
    margin-bottom:50px;
    margin-right:20px;
`
const CoachItemImage = styled.div`
    img{
        width:100%;
    }
    margin-bottom:20px;
`
const CoachItemName = styled.div`
    font-weight:500;
    font-size:18px;
    text-align:center;
    margin-bottom:10px;
`
const CoachItemText = styled.div`
    font-size:14px;
    text-align:center;
`



export default CoachSection;