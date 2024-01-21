import React from 'react';
import './Login.css'
import { loginUrl } from './spotify';
function Login(){
    return (
        <div className='login'>
            <img src='https://imgs.search.brave.com/4lmRJJ-dNGoHiR10EVQbTLJhnE6DG5tEujzbmmzN3b8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZWRpZ2l0YWxhZ2Vu/Y3kuY29tLmF1L3dw/LWNvbnRlbnQvdXBs/b2Fkcy9TcG90aWZ5/X0xvZ28tcG5nLVJH/Qi1HcmVlbi5wbmc' alt=''/>
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login;