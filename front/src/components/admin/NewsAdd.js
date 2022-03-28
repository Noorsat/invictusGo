import React, {useState, useRef, useEffect} from 'react';
import styled from 'styled-components';
import {Form,Button } from 'react-bootstrap';
import { createPost } from '../../api';
import Header from './Header';
import EmailEditor from 'react-email-editor';

const NewsAdd = ({handleClose}) => {
    const [post, setPost] = useState({
        html:'',
    })

    const addPost = () => {
        createPost(post);
    }

    const emailEditorRef = useRef(null);

    const exportHtml = () => {
      emailEditorRef.current.editor.exportHtml((data) => {
        const { design, html } = data;
        setPost({...post, html:html})
      });
      handleClose();
    };
  
    const onLoad = () => {
   
    };

    return (
        <NewsWrapper>
        <div>
            <EmailEditor
            ref={emailEditorRef}
            onLoad={onLoad}
            />
            <Button style={{marginTop:20,marginLeft:20,marginBottom:20}} onClick={exportHtml}>Создать новость</Button>
        </div>
        </NewsWrapper>
    )
}

const NewsWrapper = styled.div`
    display:flex;
`;

const NewsSection = styled.div`
    width:90%;
    margin-left:20px; 
    margin-right:20px;
`

const NewsTitle = styled.div`
    text-align:center;
    font-weight:700;
    font-size:30px;
    padding-top:25px;
`


export default NewsAdd;