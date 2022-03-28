import React, {useState} from 'react';
import styled from 'styled-components';

const Coach = (/*{coaches, clubName}*/) => {
    const [visible, setVisible] = useState(2);
    const [max, setMax] = useState(false);

    const coaches = [
        {
            photoUrl:"https://thumb.tildacdn.com/tild3339-3066-4134-a536-666535663135/-/resize/800x800/-/format/webp/6.jpg",
            fullName: "Асылхан Дуйсенов",
            description: "Он не будет с тобой церемонится - ты просто сделаешь это"
        },
        {
            photoUrl:"https://thumb.tildacdn.com/tild3339-3066-4134-a536-666535663135/-/resize/800x800/-/format/webp/6.jpg",
            fullName: "Асылхан Дуйсенов",
            description: "Он не будет с тобой церемонится - ты просто сделаешь это"
        },
        {
            photoUrl:"https://thumb.tildacdn.com/tild3339-3066-4134-a536-666535663135/-/resize/800x800/-/format/webp/6.jpg",
            fullName: "Асылхан Дуйсенов",
            description: "Он не будет с тобой церемонится - ты просто сделаешь это"
        },
        {
            photoUrl:"https://thumb.tildacdn.com/tild3339-3066-4134-a536-666535663135/-/resize/800x800/-/format/webp/6.jpg",
            fullName: "Асылхан Дуйсенов",
            description: "Он не будет с тобой церемонится - ты просто сделаешь это"
        },
        {
            photoUrl:"https://thumb.tildacdn.com/tild3339-3066-4134-a536-666535663135/-/resize/800x800/-/format/webp/6.jpg",
            fullName: "Асылхан Дуйсенов",
            description: "Он не будет с тобой церемонится - ты просто сделаешь это"
        },
        {
            photoUrl:"https://thumb.tildacdn.com/tild3339-3066-4134-a536-666535663135/-/resize/800x800/-/format/webp/6.jpg",
            fullName: "Асылхан Дуйсенов",
            description: "Он не будет с тобой церемонится - ты просто сделаешь это"
        },
        {
            photoUrl:"https://thumb.tildacdn.com/tild3339-3066-4134-a536-666535663135/-/resize/800x800/-/format/webp/6.jpg",
            fullName: "Асылхан Дуйсенов",
            description: "Он не будет с тобой церемонится - ты просто сделаешь это"
        },
        {
            photoUrl:"https://thumb.tildacdn.com/tild3339-3066-4134-a536-666535663135/-/resize/800x800/-/format/webp/6.jpg",
            fullName: "Асылхан Дуйсенов",
            description: "Он не будет с тобой церемонится - ты просто сделаешь это"
        },
        {
            photoUrl:"https://thumb.tildacdn.com/tild3339-3066-4134-a536-666535663135/-/resize/800x800/-/format/webp/6.jpg",
            fullName: "Асылхан Дуйсенов",
            description: "Он не будет с тобой церемонится - ты просто сделаешь это"
        },
    
    ]

    const showItems = (number) => {
        let visibleItems = [];
        for (let i = 0; i < number; i++){
            visibleItems.push(coaches[i]);
        }
        return visibleItems;
    }

    const addItems = () => {
        let number = visible+1;
        if (number == coaches.length/3){
            setMax(true);
            }else{
            setMax(false);
        }
        setVisible(number);
    }

    const closeAll = () => {
        setVisible(1);
        setMax(false);
    }

    return (
        <CoachSection>
            <Container>
                <FirstCircle>
                </FirstCircle>
                <CoachTitle>
                    ТРЕНЕРЫ <span>INVICTUS GO EMERALD</span>
                </CoachTitle>
                <CoachItems>
                    {
                        showItems(visible*3).map((item) => {
                            return (
                                <CoachItem>
                                    <CoachItemImage>
                                        <img src={item.photoUrl} alt=""/>
                                    </CoachItemImage>
                                    <CoachItemTitle>
                                        {item.fullName}
                                    </CoachItemTitle>
                                    <CoachItemText>
                                        {item.description}
                                    </CoachItemText>
                                </CoachItem>
                            )
                        })
                    }
                </CoachItems>
                <SecondCircle></SecondCircle>
                <LoadMore>
                    {max == true ? <p onClick={closeAll}>Скрыть</p> : <p onClick={addItems}>Загрузить еще </p> }
                </LoadMore>
            </Container>
        </CoachSection>
    );
}

const CoachSection = styled.section`
    background:#000;
    padding-top:200px;
    position:relative;
    padding-bottom:300px;
`;

const Container = styled.div`
    max-width:1312px;
    margin: 0 auto;
`

const CoachTitle = styled.div`
    font-family: 'Neue bold';
    font-weight: 800;
    font-size: 60px;
    line-height:66px;
    letter-spacing: 3px;
    margin-bottom:59px;
    color: #FFFFFF;
    span{
        color:#C11B1B;

    }
`;

const CoachItems = styled.div`
    display:flex;
    justify-content:space-around;
    flex-wrap:wrap;
    margin-bottom:115px;
`

const LoadMore = styled.div`
    p{
        background: #000000;
        border: 2px solid #C11B1B;
        max-width:378px;
        display:flex;
        justify-content:center;
        align-items:center;
        padding:20px 0px;
        margin:0 auto;
        color:#fff;
        font-weight:600;
        font-size: 18px;
        line-height: 22px;
        letter-spacing:1px;
    }
`;



const CoachItem = styled.div`
    max-width:418px;
    width:418px;
    height:476px;
    background:#000;
    border:1px solid #695454;
    margin-bottom:90px;
    position:relative;
    z-index:100;
    @media (max-width:420px){
        max-width:85%;
    }
`

const FirstCircle = styled.div`
    position:absolute;
    width:625px;
    height:625px;
    background: #C11B1B;
    z-index:2;
    filter: blur(350px);
    left:0;
    top:650px;
`;

const SecondCircle = styled.div`    
    width:488px;
    height:488px;
    background:#C11B1B;
    filter: blur(250px);
    position:absolute;
    top:800px;
    right:0;
    
`;



const CoachItemImage = styled.div`
    margin-left:20px;
    margin-top:20px;
    img{
        width:373px;
        height:302px;
    }
    @media (max-width:420px){
        img{
            width:100%;
        }
    }
    margin-bottom:26px;
`

const CoachItemTitle = styled.div`
    font-weight: 900;
    font-size: 20px;
    margin-left:20px;
    margin-bottom:20px;
    line-height: 24px;
    letter-spacing: 1.5px;
    color: #FFFFFF;
`

const CoachItemText = styled.div`
    font-weight: 500;
    margin-left:20px;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 1.5px;
    color: #FFFFFF;
`



export default Coach;