/* eslint-disable react/prop-types */
import { RxDot } from 'react-icons/rx'


const Titles = ( { titles }) => {

    return ( <div className='flex justify-start items-center text-neutral-300 mb-10 flex-wrap'>
        {titles.map((item, index) => (
            <>
                <p>{item}</p>
                {index !== (titles.length - 1) && <RxDot className=' mx-4'/>}
            </>
        ) )}
    </div> );
}
 
export default Titles;