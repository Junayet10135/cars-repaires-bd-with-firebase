import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center mt-5'>
            <p><small>copyright &copy; by JH Tamim {year} </small></p>
        </footer>
    );
};

export default Footer;