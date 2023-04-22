
/* eslint-disable react/prop-types */
import React from 'react';
import { BsFacebook, BsLinkedin, BsInstagram } from 'react-icons/bs'




const Social = ( {links} ) => {
    return ( <div className='flex w-full justify-between items-center mt-20'>
        <a href={links[0]} target='_blank' className='flex justify-between items-center text-neutral-300' rel="noreferrer">
            <BsLinkedin className='text-2xl mr-4'/>
            <h3>LinkedIn</h3>
        </a>
        <a href={links[1]} target='_blank' className='flex justify-between items-center text-neutral-300' rel="noreferrer">
            <BsFacebook className='text-2xl mr-4'/>
            <h3>Facebook</h3>
        </a>
        <a href={links[2]} target='_blank' className='flex justify-between items-center text-neutral-300' rel="noreferrer">
            <BsInstagram className='text-2xl mr-4'/>
            <h3>Intagram</h3>
        </a>
    </div> );

}
 
export default Social;