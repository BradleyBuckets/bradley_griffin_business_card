import Initials from "./Initials";
import Name from "./Name";
import Titles from "./Titles";
import AboutMe from "./AboutMe";
import Social from "./Social";


const Container = () => {
    let titles = ['Web Developer', 'Real Estate Manager', 'Police Officer', 'Business Owner', 'Athlete', 'Lvl 2 Scrub']
    // let bio = 'This is a random paragraph all about the individual and what they do. It will include stories and bio and current things going on in the persons life. This is a random paragraph all about the individual and what they do. It will include stories and bio and current things going on in the persons life. This is a random paragraph all about the individual and what they do. It will include stories and bio and current things going on in the persons life. This is a random paragraph all about the individual and what they do. It will include stories and bio and current things going on in the persons life.'
    let links = ['https://www.linkedin.com/in/bradley-griffin-3a6003156/', 'https://www.facebook.com/profile.php?id=100011338274381', 'https://www.sarahhhstates.com']

    let myBio = "Griffin is a driven 22-year-old sports enthusiast who loves basketball, pickleball, and ultimate frisbee. When he's not on the court or field, he enjoys exploring his passions for web development, real estate, business, and law enforcement. As a versatile team player, he thrives in collaborative environments and is always looking for ways to innovate and improve. With a strong work ethic and an eagerness to learn, Griffin is ready to take on new challenges and make a valuable contribution to any organization."

    return ( <div className="ml-4 mr-8 lg:mx-10 my-6 w-11/12 lg:w-2/5">
        <Initials letters={'BG'} />
        <Name name={'Bradley Griffin'} tagline={'Low maintenance, high yield'}/>
        <Titles titles={titles}/>
        <AboutMe bio={myBio}/>
        <Social links={links}/>
    </div> );
}
 
export default Container;
