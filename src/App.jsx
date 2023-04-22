import dohn from './assets/dohn.png'
import Container from './components/Conatiner'

function App() {
  
  return (
    <div className=" bg-neutral-800 flex justify-start">
      <img src={dohn} alt="Business man in black and white"  className=' max-w-lg rounded-2xl m-6'/>
      <Container/>
    </div>
  )
}

export default App
