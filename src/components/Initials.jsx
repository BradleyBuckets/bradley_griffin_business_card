/* eslint-disable react/prop-types */
const Initials = ( {letters} ) => {
    return ( <div className=" w-20 h-20 border-2 rounded-full border-neutral-500 flex justify-center items-center">
        <h2 className=" text-4xl text-neutral-500">{letters}</h2>
    </div> );
}
 
export default Initials;