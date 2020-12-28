import { Switch, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import MainPage from './MainPage/MainPage'
import PomodoroApp from './PomodoroApp/PomodoroApp'
import Markdown from './MarkdownEditor/Markdown'
import Navigation from './Navbar/Navigation'



const App = () => {
  return (
    <>

      <Navigation className='navbar' />
      <main>

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