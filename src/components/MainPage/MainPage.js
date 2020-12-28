import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'

import './MainPage.css'
import pomodoroImg from './pomodoro.png'
import markdownImg from './markdown.png'

const MainPage = () => {
    return (
        <>
            <Link to='/pomodoro'>
                <section className='section-card'>
                    <img src={pomodoroImg} alt='pomodoro app' />
                    <div className='title'>
                        <h2>Pomodoro App</h2>
                    </div>
                </section>
            </Link>
            <Link to='/markdown-editor'>
                <section className='section-card'>
                    <img src={markdownImg} alt='markdown editor' />
                    <div className='title'>
                        <h2>Markdown Editor</h2>
                    </div>
                </section>
            </Link>
        </>
    )
}

export default MainPage
