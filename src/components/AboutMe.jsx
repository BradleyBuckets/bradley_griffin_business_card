/* eslint-disable react/prop-types */
import React from 'react';


const AboutMe = ( { bio }) => {
    return ( <div className="my-10">
        <h2 className=" text-[28px] text-neutral-300 my-2">More about me</h2>
        <div className="w-24 border-b-[1px] border-neutral-500"></div>
        <p className="text-neutral-400 my-6">{bio}</p>
    </div> );
}
 
export default AboutMe;