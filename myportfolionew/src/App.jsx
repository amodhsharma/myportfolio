import { useState } from 'react'
import './App.css'
import StaticOne from './components/staticOne'
import ScrollIntroduction from './components/ScrollIntroduction'
import ScrollAreas from './components/ScrollAreas'
import ScrollProjects from './components/ScrollProjects'
import ScrollSkills from './components/ScrollSkills'
import ScrollSocial from './components/ScrollSocial'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <StaticOne />

        <div className="scrollable"
        style={{height: '100vh', overflowY: 'auto'}}>
          <ScrollIntroduction />
          <ScrollAreas />
          <ScrollProjects />
          <ScrollSkills />
          <ScrollSocial />
        </div>
      </div>
    </>
  )
}

export default App
