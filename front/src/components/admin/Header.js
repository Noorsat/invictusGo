import React from 'react';
import logo from './logo.png';
import {Navbar, Nav, Form} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';


const Header = () => {
    return (
        <Navbar bg="dark" className="flex-column" style={{paddingLeft:20, paddingTop:20}}>
            <NavLink to="/" style={{marginRight:20, marginBottom:20}}><img src={logo}/></NavLink>
            <NavLink to="/admin/club" style={{color:"#fff", marginRight:20, marginBottom:20}}>КЛУБ</NavLink>
            <NavLink to="/admin/coach" style={{color:"#fff", marginRight:20, marginBottom:20}}>ТРЕНЕРЫ</NavLink>
            <NavLink to="/admin/subscription" style={{color:"#fff", marginRight:20, marginBottom:20}}>ТАРИФЫ</NavLink>
            <NavLink to="/admin/news" style={{color:"#fff",     marginRight:20, marginBottom:20}}>НОВОСТИ</NavLink>
            <NavLink to="/admin/faq" style={{color:"#fff",marginRight:20, marginBottom:20}}>FAQ</NavLink>
        </Navbar>
    )
}  



export default Header