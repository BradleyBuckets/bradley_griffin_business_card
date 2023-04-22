import Initials from "./Initials";
import Name from "./Name";
import Titles from "./Titles";
import AboutMe from "./AboutMe";
import Social from "./Social";


const Container = () => {
    let titles = ['first title', 'supervisor title', 'current job', 'certification']
    let bio = 'This is a random paragraph all about the individual and what they do. It will include stories and bio and current things going on in the persons life. This is a random paragraph all about the individual and what they do. It will include stories and bio and current things going on in the persons life. This is a random paragraph all about the individual and what they do. It will include stories and bio and current things going on in the persons life. This is a random paragraph all about the individual and what they do. It will include stories and bio and current things going on in the persons life.'
    let links = ['https://www.linkedin.com/', 'https://www.instagram.com/', 'https://www.facebook.com/']

    return ( <div className="m-6 w-2/5">
        <Initials letters={'DJ'} />
        <Name name={'Dohn Jarcy'} tagline={'Small tag line'}/>
        <Titles titles={titles}/>
        <AboutMe bio={bio}/>
        <Social links={links}/>
    </div> );
}
 
export default Container;