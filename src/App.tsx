import './App.css'
import {Navbar} from './components/Navbar'
import {Hero} from './components/Hero'
import { CurrentSession } from './components/CurrentSession'
import { PreviousSession } from './components/PreviousSession'

function App() {

  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <CurrentSession /> 
        <PreviousSession />
      </div>
    </>
  )
}

export default App
