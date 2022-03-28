import React, {useState} from 'react';
import styled from 'styled-components';
import left from './left.png';
import right from './right.png';

const Gallery = ({photoUrl,tittleText,descriptionText}) => {
    const [item, setItem] = useState(0);
    const fade = (e) => {
        e.target.classList.add('blur');
    }

    const remove = (e) =>{
        e.target.classList.remove('blur');
    }

    const changeImage = (e) => {
        const index = e.target.id;
        const imageUrl = photoUrl[index];
        setItem(index);
        document.getElementById('mainImg').src=imageUrl;
    }   

    const leftHandler = () => {
        let index = 0;
        if (item == 0){
            index = photoUrl.length-1;
        }else{
            index = item-1;
        }
        document.getElementById('mainImg').src = photoUrl[index];
        setItem(index);
    }

    const rightHandler = () => {
        let index = 0;
        if (item == photoUrl.length-1){
            index = 0; 
        }else{
            index = item + 1;
        }
        document.getElementById('mainImg').src = photoUrl[index];
        setItem(index);
    }

    return (
        <GallerySection>
            <Container>
                <GalleryWrapper>
                    <LeftArrow>
                        <img src={left} onClick={leftHandler}/>
                    </LeftArrow>
                    <GallerySlider>
                        <GalleryMainImage>
                            <img src={photoUrl[0]} alt="BigImage" id="mainImg"/>
                        </GalleryMainImage>
                        <GalleryImages>
                            {
                            photoUrl.map((item,index) => {
                                return (
                                    <GalleryImage>
                                        <img src={item} alt="gallery" onMouseOut={remove} onMouseOver={fade} key={index} id={index} onClick={changeImage}/>
                                    </GalleryImage>
                                )
                            })};
                        </GalleryImages>
                    </GallerySlider>
                    <RightArrow>
                        <img src={right} onClick={rightHandler}/>
                    </RightArrow>
                </GalleryWrapper>
            </Container>
        </GallerySection>
    );
}

const GallerySection = styled.section`
    background:#000;
`;

const Container = styled.div`
    max-width:1280px;
    margin:0 auto;
`

const LeftArrow = styled.div``;

const RightArrow = styled.div``;

const GalleryWrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    @media (max-width:1100px){
        display:flex;
        flex-direction:column;
        align-items:center;
    }
`

const GallerySlider = styled.div`
    text-align:center;
    margin-left:63px;
    margin-right:63px;   
    @media (max-width:1100px){
        margin-right:0;
        width:90%;
        margin:0 auto;
    }
`;

const GalleryMainImage = styled.div`
    margin-bottom:5px;
    img{
        max-width:760px;
        height:570px;
    }
    @media (max-width:1100px){
        img{
            max-width:100%;
            height:inherit;
            margin:0 auto;
        }
    }
`;

const GalleryImages = styled.div`
    display:flex;   
    @media (max-width:1100px){
        max-width:100%;
    }
`;

const GalleryImage = styled.div`
    margin-right:5px;
    opacity:1;
    img{
        width:60px;
        max-height:40px;
        transition:all 0.5s;
        opacity:1;
    }
    img.blur{
        opacity:0.5;
    }
    @media (max-width:670px){
        img{
            width:100%;
        }
    }
`;

const GalleryContent = styled.div`
    max-width:360px;
    @media (max-width:1100px){
        max-width:70%;
        margin-top:30px;
    }
`;

const GalleryTitle = styled.div`
    font-weight:600;
    font-size:24px;
    line-height: 1.35;
    margin-bottom:20px; 
`;

const GalleryText = styled.div`
    font-size:16px;
    line-height:1.55;
    font-weight:300;
`;

export default Gallery;