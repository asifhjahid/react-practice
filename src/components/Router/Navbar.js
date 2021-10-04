import {NavLink} from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to='/' exact activeStyle={{fontWeight:'bold',color:'red'}}>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/about'  activeStyle={{fontWeight:'bold',color:'red'}}>About</NavLink>
                </li>
                <li>
                    <NavLink to='/services' activeStyle={{fontWeight:'bold',color:'red'}}>Services</NavLink>
                </li>
                <li>
                    <NavLink to='/posts/js/react' activeStyle={{fontWeight:'bold',color:'red'}}>React</NavLink>
                </li>
            </ul>
        </nav>
    )
}
