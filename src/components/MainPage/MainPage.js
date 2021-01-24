import { Link } from 'react-router-dom'
import { Row, Col, Container } from 'react-bootstrap'

import './MainPage.css'
import pomodoroImg from './pomodoro.png'
import markdownImg from './markdown.png'

const MainPage = () => {
    return (
        <>
            <header>
                <h1>React Practice Projects</h1>
                <p style={{ color: 'grey' }}>A series of small projects developed with React</p>
                <hr />
            </header>
            <main className='cards'>
                <Container>
                    <Row>
                        <Col xs={12} md={6} lg={4}>
                            <Link to='/pomodoro'>
                                <section className='section-card'>
                                    <img src={pomodoroImg} alt='pomodoro app' />
                                    <div className='title'>
                                        <h4>Pomodoro App</h4>
                                    </div>
                                </section>
                            </Link>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <Link to='/markdown-editor'>
                                <section className='section-card'>
                                    <img src={markdownImg} alt='markdown editor' />
                                    <div className='title'>
                                        <h4>Markdown Editor</h4>
                                    </div>
                                </section>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </main>
        </>
    )
}

export default MainPage
