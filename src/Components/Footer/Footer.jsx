import './Footer.css'

import {BsFillHouseDoorFill, BsBoxArrowInRight} from "react-icons/bs"

export default () => {
    return (
    <footer className="footer">
        <ul>
            <li>
                <BsFillHouseDoorFill />
                <p>Início</p>
            </li>
            <li>
                <BsBoxArrowInRight />
                <p>Login</p>
            </li>
        </ul>
    </footer> 
    )
}