import React from 'react';
import styled from 'styled-components';
import Header from '../Subscription/Header';
import ErrorSection from './ErrorSection';

const Error404 = () => {
    return (   
        <ErrorPage>
            <Header/>
            <ErrorSection number="404" text="страница не найдена"/>
        </ErrorPage>
    )
}


const ErrorPage = styled.div`
    background: #F5F5F5;    
    padding-bottom:282px;
`;

export default Error404;