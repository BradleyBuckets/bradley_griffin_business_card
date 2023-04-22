/* eslint-disable react/prop-types */

const Name = ( {name, tagline}) => {
    return ( <div className=" mt-20 mb-10">
        <h2 className=" text-neutral-50 text-5xl my-2">{name}</h2>
        <h3 className=" text-neutral-400 text-2xl">{tagline}</h3>
    </div> );
}
 
export default Name;