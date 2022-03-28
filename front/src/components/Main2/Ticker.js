import React from 'react'
import styled from 'styled-components';
import Ticker from 'react-ticker'
 

const TickerSection = () => {
    return (
        <TickerWrapper>
            <WhiteLine>
            </WhiteLine>
            <TickerComponent>
                <Ticker speed={10} className="ticker_a">
                    {({ index }) => (
                        <>
                            <TickerTitle>ТАРИФЫ</TickerTitle>
                        </>
                    )}
                </Ticker>
            </TickerComponent>
        </TickerWrapper>
    )
}

const TickerWrapper = styled.div`
    background:#000;
` 

const TickerTitle = styled.h1`
    letter-spacing:3px;
    font-size:60px;
    font-family:'Neue bold';
    font-weight:900;
    margin-right:170px!important;
    padding-top:15px;
    
`

const TickerComponent = styled.div`
    background: #C11B1B;
    position: absolute;
    width:101%!important;
    color:#000;
    z-index:100000;
    transform: rotate(-3.99deg);
    .ticker{
        height:105px!important;
        
    }
`
const WhiteLine = styled.div`
    background:#fff;
    width:101%;
    height:105px;
    content:'';
    position:absolute;
    left:-5px;
    transform: rotate(3.99deg);
`

export default TickerSection;
