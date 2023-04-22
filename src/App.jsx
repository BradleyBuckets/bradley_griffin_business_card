import griff from './assets/griff52.png'
import Container from './components/Conatiner'

function App() {
  
  return (
    <div className=" bg-neutral-800 flex justify-start">
      <img src={griff} alt="Business man in black and white"  className=' max-w-lg rounded-2xl mx-12 my-6'/>
      <Container/>
    </div>
  )
}

export default App
