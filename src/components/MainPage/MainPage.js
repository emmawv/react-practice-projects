import { Link } from 'react-router-dom'

import './MainPage.css'
import pomodoroImg from './pomodoro.png'
import markdownImg from './markdown.png'

const MainPage = () => {
    return (
        <>
            <header>
                <h1>React Practice Projects</h1>
                <p style={{color: 'grey'}}>A series of small projects developed with React</p>
                <hr/>
            </header>
            <Link to='/pomodoro'>
                <section className='section-card'>
                    <img src={pomodoroImg} alt='pomodoro app' />
                    <div className='title'>
                        <h4>Pomodoro App</h4>
                    </div>
                </section>
            </Link>
            <Link to='/markdown-editor'>
                <section className='section-card'>
                    <img src={markdownImg} alt='markdown editor' />
                    <div className='title'>
                        <h3>Markdown Editor</h3>
                    </div>
                </section>
            </Link>
        </>
    )
}

export default MainPage
