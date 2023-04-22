/* eslint-disable react/prop-types */
import { BsFacebook, BsLinkedin } from 'react-icons/bs'
import { CgWebsite } from 'react-icons/cg'




const Social = ( {links} ) => {
    return ( <div className='flex flex-col gap-8 lg:gap-0 lg:flex-row w-full justify-between items-start lg:items-center my-10 lg:mt-20 lg:mb-0'>
        <a href={links[0]} target='_blank' className='flex justify-between items-center text-neutral-300' rel="noreferrer">
            <BsLinkedin className='text-2xl mr-4'/>
            <h3>LinkedIn</h3>
        </a>
        <a href={links[1]} target='_blank' className='flex justify-between items-center text-neutral-300' rel="noreferrer">
            <BsFacebook className='text-2xl mr-4'/>
            <h3>Facebook</h3>
        </a>
        <a href={links[2]} target='_blank' className='flex justify-between items-center text-neutral-300' rel="noreferrer">
            <CgWebsite className='text-2xl mr-4'/>
            <h3>Projects</h3>
        </a>
    </div> );

}
 
export default Social;