import React from 'react';
import styled from 'styled-components';

const Slider = ({current,setCurrent,slides,cardText,setCardText}) => {
    const SliderData = [
        {
            image:'./images/slider.png'
        },
        {
            image:'https://img.freepik.com/free-vector/hand-painted-background-violet-orange-colours_23-2148427578.jpg?size=626&ext=jpg'
        },
        {
            image:'https://cdn.wallpapersafari.com/16/3/y79Y3b.png'
        }
    ]
    const length = SliderData.length;   


    const nextSlide = () => {
        setCurrent(current === length-1 ? 0 : current+1)
        if (current === 0){   
            document.getElementById('programs').classList.add("active");
            document.getElementById('gyms').classList.remove('active');
            setCardText("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
            document.getElementById('training').classList.remove("active");
        }else if (current === 1){
            document.getElementById('programs').classList.remove("active");
            document.getElementById('gyms').classList.remove('active');
            document.getElementById('training').classList.add("active");
            setCardText("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
        }else if (current === 2){
            document.getElementById('programs').classList.remove("active");
            document.getElementById('gyms').classList.add('active');
            document.getElementById('training').classList.remove("active");
            setCardText("Просторный тренажерный зал, оборудованный италь- янскими премиальными тренажерами Panatta Sport");
        }
        
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length-1 : current-1)
        if (current === 0){   
            document.getElementById('programs').classList.add("active");
            document.getElementById('gyms').classList.remove('active');
            document.getElementById('training').classList.remove("active");
            setCardText("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        }else if (current === 1){
            document.getElementById('programs').classList.remove("active");
            document.getElementById('gyms').classList.remove('active');
            document.getElementById('training').classList.add("active");
            setCardText("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
        }else if (current === 2){
            document.getElementById('programs').classList.remove("active");
            document.getElementById('gyms').classList.add('active');
            document.getElementById('training').classList.remove("active");
            setCardText("Просторный тренажерный зал, оборудованный италь- янскими премиальными тренажерами Panatta Sport");
        }
    }

    const gymsHandler = () => {
        setCurrent(0);
        document.getElementById('programs').classList.remove("active");
        document.getElementById('gyms').classList.add('active');
        document.getElementById('training').classList.remove("active");
    }

    const programsHandler = () => {
        setCurrent(1);
        document.getElementById('programs').classList.add("active");
        document.getElementById('gyms').classList.remove('active');
        document.getElementById('training').classList.remove("active");
    }

    const trainingHandler = () => {
        document.getElementById('programs').classList.remove("active");
        document.getElementById('gyms').classList.remove('active');
        document.getElementById('training').classList.add("active");
        setCurrent(2);
    }

    const changeDots = (index) => {
        setCurrent(index);
        const dots = document.querySelectorAll('#dots');
        for (let i = 0; i <= 2; i++){
            if (i === index){
                dots[i].classList.add('active');
            }else{
                dots[i].classList.remove('active');
            }
        }
    }
    
    return (
        <SliderSection>
            <Container>
                <SliderTitles   >
                    <div id="gyms" className="active" onClick={gymsHandler}>
                        ЗАЛЫ
                    </div>
                    <div id="programs" onClick={programsHandler}>
                        ПРОГРАММЫ
                    </div>
                    <div id="training" onClick={trainingHandler}>
                        ТРЕНИРОВКИ
                    </div>
                </SliderTitles>
                <Carousel>    
                    <LeftArray>
                        <img src="images/left-arr.png" onClick={prevSlide}/>
                    </LeftArray>
                    <SliderItem className="slider">
                    {
                    SliderData.map((slide,index) => {
                        return(                            
                            <SliderPhoto className={index === current ? 'slide active' : 'slide'} key={index}>
                                {index === current && (
                                    <img src={slide.image} alt="" className="image"/>
                                )}
                            </SliderPhoto>
                        )
                    })
                    }   
                    </SliderItem>
                    <RightArray className="right-arr">
                        <img src="images/right-arr.png" onClick={nextSlide}/>
                    </RightArray>
                </Carousel>
                <Dots>
                    <DotsItems>
                        {
                            SliderData.map((dots,index) => {
                                return (
                                    <DotsItem  className={index === current ? 'active' : ''} onClick={() => changeDots(index)} id="dots"></DotsItem>
                            )
                            })
                        }
                    </DotsItems>
                </Dots>
                <Card>
                    <CardTitle>
                        {cardText}
                    </CardTitle>
                    <CardText>
                        GO
                    </CardText>
                </Card>
            </Container>
        </SliderSection>
    )
}

const SliderSection = styled.section`
    background:#000;
       @media (max-width:768px){
       padding-top:70px!important;
   }
`
const Container = styled.div`
    max-width: 1280px;
    margin: 0 auto;
`;

const SliderTitles = styled.div`
    display: none;
    justify-content: center;
    margin-bottom: 30px;
    margin-left: 80px;
    div{
        font-size: 35px;
        font-weight: 700;
        color: grey;
        margin-right: 50px;
        cursor:pointer;
    }
    div.active{
        color:black;
    }
    @media (max-width:768px){
        div{
            font-size:28px!important;
        }
    }
    @media (max-width:670px){
        margin-left:0!important;
        div{
            display:none;
        }
        div.active{
            display:block;
            margin:0;
        }
    }
`;

const Carousel = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width:1161px){
        margin-bottom:20px;
    }
`;

const LeftArray = styled.div`
    margin-right: 36px;
    @media (max-width:1100px){
        margin-right:18px;
        margin-left:10px;
    }
    @media (max-width:670px){
        img{
            width:27px;
        }
    }
    @media (max-width:420px){
        img{
            width:20px;
        }
    }
`;

const SliderItem = styled.div``;

const RightArray = styled.div`
    margin-left: 31px;
    @media (max-width:1100px){
        margin-right:10px;
        margin-left:18px;
    }
    @media (max-width:670px){
        img{
            width:27px;
        }
    }
    @media (max-width:420px){
        img{
            width:20px;
        }
    }
`;

const SliderPhoto = styled.div`
    img{
        width:100%;
    }
`

const Card = styled.div`
    width:0;
    height:0;
    border-top: 180px solid #C11B1B; 
    border-right: 323px solid #C11B1B;
    border-bottom:60px solid transparent;
    position:relative;
    top:-150px;
    left:110px;
    @media (max-width:1161px){
        display:none;
    }
`

const CardTitle = styled.div`
  font-size: 18px;
  line-height: 22px;
  position:absolute;
  width:270px;
  top:-150px;
  left:27px;
  color:#fff;
`;

const CardText = styled.div`
    font-size: 70px;
    color: #fff;
    font-weight: 700;
    position:absolute;
    top:-50px;
    left:200px;
`;

const Dots = styled.div`
    display:none;
    @media (max-width:670px){
        display:block!important;
        margin-bottom:100px;
    }
`

const DotsItems = styled.div`
    display:flex;
    justify-content:center;
`

const DotsItem = styled.div`
    content:'',
    display:block;
    width:10px;
    height:10px;
    background: #E6E6E6;
    border-radius:50%;
    margin-right:10px;
    &:last-child{
        margin-right:0;
    }
    &.active{
        background: #C11B1B;
    }
`

export default Slider;