import { Link } from 'react-router-dom'

import './Navigation.css'

const Navigation = () => {
    return (
        <nav className='navbar'>
        <ul>
            <Link to='/'><li>Home</li></Link>
                <Link to='/pomodoro'><li>Pomodoro App</li></Link>
                <Link to='/markdown-editor'><li>Markdown Editor</li></Link>
            </ul>
        </nav>
    )
}

export default Navigation

