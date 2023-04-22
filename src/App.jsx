import griff from './assets/griff52.png'
import Container from './components/Conatiner'

function App() {
  
  return (
    <div className=" bg-neutral-800 flex flex-col lg:flex-row justify-start">
      <img src={griff} alt="Business man in black and white"  className='w-11/12 mx-auto lg:max-w-lg rounded-2xl lg:mx-12 my-6'/>
      <Container/>
    </div>
  )
}

export default App
