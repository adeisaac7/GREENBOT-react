import { useState } from 'react'
import './Welcome.scss'
import Button from '../../components/Button'
import Setup from './Setup'
import ThemeToggle from '../../components/ThemeToggle'
import lautech from '../../../lautech.png'

function Welcome() {
  const [showInputs, setShowInputs] = useState(false)

  return (
    <div className='welcome-page'>
      <div className='theme-toggle-wrapper'>
        <ThemeToggle />
      </div>
      <div className='heading'>
        <img src={lautech} alt=''className='lautech'/>
        <h1 className={showInputs ? 'small-h1' : ''}>Chat with <span>GreenBot</span></h1>
        {!showInputs ?
          (
            <>
              <Button className='start-button' onClick={() => setShowInputs(true)}>Get started</Button>
            </>) :
          (<Setup />)
        }
      </div>
      <span className='disclaimer'>This application only connects Google API with your device.</span>
    </div>
  )
}

export default Welcome