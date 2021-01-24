import { Switch, Route } from 'react-router-dom'
import { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import close from './close.png'
import open from './menu.png'
import MainPage from './MainPage/MainPage'
import PomodoroApp from './PomodoroApp/PomodoroApp'
import Markdown from './MarkdownEditor/Markdown'
import Navigation from './Navbar/Navigation'



const App = () => {

  const [menuCollapse, setMenuCollapse] = useState(true)

  return (
    <>
      {menuCollapse && <img src={open} alt='see menu' onClick={() => setMenuCollapse(false)} className='menu-icon' style={{ position: 'fixed', top: '3%', left: '2%' }}/>}
      {!menuCollapse &&
        <>
        <Navigation className='navbar' />
        <img src={close} alt='close menu' onClick={() => setMenuCollapse(true)} className='menu-icon' style={{position: 'fixed', top:'3%', left: '19%'}}/>
        </>
      }
      <main style={{marginLeft: menuCollapse ? '0' : '200px'}}>
        <Switch>
          <Route path='/' exact render={() => <MainPage />} />
          <Route path='/pomodoro' render={() => <PomodoroApp />} />
          <Route path='/markdown-editor' render={() => <Markdown />} />
        </Switch >
      </main>
    </>
  )
}

export default App