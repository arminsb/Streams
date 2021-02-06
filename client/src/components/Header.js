import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';
import '../styleSheet.css';

export default function Header() {
    return (
<div className='ui clearing segment' id='container'>
        <div className='ui secondary  menu'>
            <Link to='/' className='item' id='container'>
                streamer
            </Link>
            <div className='right menu' id='container'>
            <Link to='/' className='item' id='container'>
                All Streams
            </Link>
            <GoogleAuth />
            </div>
        </div>
        </div>
    );
};
