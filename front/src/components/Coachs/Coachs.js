import React, {useState, useEffect} from 'react';
import { isDOMComponentElement } from 'react-dom/test-utils';
import styled from 'styled-components';
import Header from './Header';
import coach1 from './coach1.webp';
import coach2 from './coach2.webp';
import coach3 from './coach3.webp';
import CoachSection from './CoachSection';
<<<<<<< HEAD
import { getClubs, getCoachs } from '../../api';
=======
import { getCoachs } from '../../api';
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3

const Coachs = () => {
    const [gyms, setGym] = useState(false);
    const [clubs, setClubs] = useState(false);
    const [coach, setCoachs] = useState([])
<<<<<<< HEAD
    const [selectedList, setSelectedList] = useState([]);
    const initialArr  = [];
    const initialSelected = []; 
    const coachs=[];
    useEffect(async () => {
        //setIsFetching(true);
        let result = await getCoachs();
        let result2 = await getClubs();
        result2.data.map((item,index) => {
            initialSelected.push({
                name: item.clubName,
                choose:false,
                index:index
            })
        })
        for (let i = 0; i < result2.data.length; i++){
            coachs.push([]);
        }
        result.data.map(item => {
            console.log(item);
            let id = 2;
=======

    const coachs = [
        [],
        [],
        []
    ]
    useEffect(async () => {
        //setIsFetching(true);
        let result = await getCoachs();
        result.data.map(item => {
            let id = item.clubId;
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
            coachs[id-1].push(item);
        })
        setCoachs(result.data)
        //setIsFetching(false);
<<<<<<< HEAD
        const arr = []; 
        for (let i = 0; i < result2.data.length; i++){
            arr.push(i);
            initialArr.push(i);
        }
=======
        const arr = [0,1,2]
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
        selectedList.map(item => {
            arr.push(item.index);
        })
        setSelectedGym(arr);
    }, [])
        
<<<<<<< HEAD
    const [selectedGym, setSelectedGym] = useState(initialArr);
=======
    const [selectedGym, setSelectedGym] = useState([0,1,2]);
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3

       
    const [coachsList,setCoachsList] = useState(coachs);

<<<<<<< HEAD
    const [selected, setSelected] = useState(initialSelected);
=======
    const [selected, setSelected] = useState([
        {
            name:"Invictus GO Aksay",
            choose:false,
            index:0
        },
        {
            name:"Invictus GO Emerald",
            choose:false,
            index:1
        },
        {
            name:"Invictus GO Sauran",
            choose:false,
            index:2
        }
    ]);

    const [selectedList, setSelectedList] = useState([]);
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3

    const [coachsCount, setCoachsCount] = useState(0);

    useEffect(() =>{
        const arr = []
<<<<<<< HEAD
        let count =  0;
        selectedList.map(item => {
            console.log(item);
            arr.push(item.index)
        })
        console.log(arr);
=======
        let count = 0;
        selectedList.map(item => {
            arr.push(item.index);
            count += coachs[item.index].length
        })
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
        setSelectedGym(arr);
        setCoachsCount(count);
    }, [selectedList])

    const gymsHandler = () => {
        console.log(coachs);
        setGym(!gyms);
    }

    const clubsHandler = () => {
        setClubs(!clubs);
    }

    const checkboxHandler = (index) => {
        selected[index].choose = !selected[index].choose;
        setSelected(selected);
        setSelectedList(selected.filter(item => item.choose === true));
    }

    const removeClub = (name) => {
        for (let i = 0; i < selected.length; i++){
            if (selected[i].name == name){
                selected[i].choose = !selected[i].choose;
            }
        }
        setSelected(selected);
        setSelectedList(selected.filter(item => item.choose === true));
    }

    const removeAll = () => {
        for (let i = 0; i < selected.length; i++){
            selected[i].choose = false;
        }
        setSelected(selected);
        setSelectedList(selected.filter(item => item.choose === true));
    }
    const [burger, setBurger] = useState(false);

    return (
        <CoachsSection>
            <Header burger={burger} setBurger={setBurger}/>
            <Container>
                <CoachsTitle>
                    ТРЕНЕРЫ
                </CoachsTitle>
                <FiltersTitle onClick={gymsHandler}>
                    <FiltersImage>
                        <svg class="t-store__filter__opts-mob-btn-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63.42 100"><path class="cls-1" d="M13.75,22.59V.38h-6V22.59a10.75,10.75,0,0,0,0,20.64V99.62h6V43.23a10.75,10.75,0,0,0,0-20.64Z"></path><path class="cls-1" d="M63.42,67.09a10.75,10.75,0,0,0-7.75-10.32V.38h-6V56.77a10.75,10.75,0,0,0,0,20.64V99.62h6V77.41A10.75,10.75,0,0,0,63.42,67.09Z"></path></svg>
                    </FiltersImage>
                    <FiltersText>
                        Фильтры
                    </FiltersText>
                </FiltersTitle>
                <Clubs className={`${gyms === true ? 'active' : ''}`}>
                    <ClubsTitle onClick={clubsHandler} className={`${clubs === true ? 'active' : ''}`}>
                        Зал
                    </ClubsTitle>
                    <ClubsList className={`${clubs === true ? 'active' : ''}`}>
                        {
                            selected.map((item,index) => {
<<<<<<< HEAD
                                console.log(item)
=======
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
                                return (
                                    <ClubItem>
                                        <Checkbox>
                                            <input type="checkbox" id={index} onChange={() => checkboxHandler(index)} checked={item.choose}/> 
                                        </Checkbox>
                                        <ClubText>
                                            <label for={index}>{item.name}</label> 
                                        </ClubText>
                                    </ClubItem> 
                                )
                            })
                        }
                    </ClubsList>
                </Clubs>
                <SelectedClubs>
                    {   
                        selectedList.map((item) => {
                            return (
                                <SelectedItem onClick={() => removeClub(item.name)}>
                                    {item.name}
                                </SelectedItem> 
                            )
                        })
                    }
                    {
                        selectedList.length >= 2 ?
                            <RemoveAll onClick={removeAll}>Очистить все</RemoveAll>
                        : null
                    }
                </SelectedClubs>
                {
                    coachsCount > 0 ?
                    <CoachsCount>
                        Найдено: {coachsCount}
                    </CoachsCount> : null    
                }
            
                <CoachSection coachsList={coachsList} setCoachsList={setCoachsList} selectedGym={selectedGym}/>
            </Container>
        </CoachsSection>
    )
}

const CoachsSection = styled.section``

const CoachsTitle = styled.div`
    padding-top:32px;
    font-weight:700;
    font-size:35px;
    text-align:center;
    margin-bottom:70px;
`;

const FiltersTitle = styled.div`
    display:flex;
    align-items:center;
    margin-bottom:30px;
    cursor:pointer;
`

const FiltersImage = styled.div`
    svg{
        width:15px;
        color:#808080;
    }
    margin-right:10px;
`

const FiltersText = styled.div`
    color:#808080;
    font-weight:700;
`   

const Container = styled.div`
    max-width:1280px;
    margin: 0 auto;
    @media (max-width:1280px){
        max-width:90%;
    }
`

const Clubs = styled.div`
    border-top: 1px solid rgba(0,0,0,.2);
    border-bottom: 1px solid rgba(0,0,0,.2);
    padding:10px 0;
    margin-bottom:20px;
    display:none;
    &.active{
        display:block;
    }
`

const ClubsTitle = styled.div`
    position:relative;
    &::after{
        content: '';
        display:block;
        width: 5px;
        height: 5px;
        border-style: solid;
        border-width: 1px;
        border-color: transparent #000 #000 transparent;
        position: absolute;
        transform: rotate(315deg);
        bottom:8px;
        right:3px;
        margin: auto;
        pointer-events: none;
    }
    &.active::after{
        transform:rotate(45deg)
    }
`

const ClubsList = styled.div`
    position:relative;
    left:-4px;
    margin-top:15px;
    display:none;
    &.active{
        display:block;
    }
`


const ClubItem = styled.div`
    display:flex;
    align-items:center;
    margin-bottom:8px;
    &:last-child{
        margin-bottom:0;
    }
`

const Checkbox = styled.div`
    margin-right: 10px; 
    position:relative;
    input{
        -webkit-appearance: none;
        height: 20px;
        width: 20px;
        border:2px solid #000;
    }
    input:checked::after{
        content: '';
        position: absolute;
        left: 8px;
        top: 6px;
        width: 3px;
        height: 8px;
        border: solid #000;
        font-weight:700;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
    }
`

const ClubText = styled.div``

const SelectedClubs = styled.div`
    display:flex;
    align-items:center;

`

const SelectedItem = styled.div`
    position:relative;
    background-color: rgba(130,130,130,.2);
    text-align:center;
    padding:10px 0;
    font-size:14px;
    width:190px;
    padding-left:15px;
    border-radius:30px; 
    margin-right:10px;
    &::after{
        content: "✕";
        position: absolute;
        top: 0px;
        bottom: 11px;
        left: 10px;
        margin-top: auto;
        margin-bottom: auto;
        margin-right: 4px;
        height: 10px;
        font-size: 14px;
        line-height: 1;
        padding: 3px;
        border-radius:10px;
    }
`

const RemoveAll = styled.div`
    border-bottom:1px dashed;
    padding-bottom:4px;
    margin-left:10px;
    cursor:pointer;
`

const CoachsCount = styled.div`
    margin-top:20px;
`



export default Coachs;