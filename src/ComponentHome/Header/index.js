import React from "react"
import { Link } from "react-router-dom"

function Header() {
    return(
        <div className="container">
            <div id="header">
                <div className="header-top flex flex-middle flex-center">
                    <h2>
                        <Link to="/home">TRANG WEB CỦA TÔI</Link>
                    </h2>
                </div>
                <div className="header-bottom flex flex-middle flex-center">
                    <ul className="header-bt-list-it">
                        <li className="header-bt-item">
                            <Link to="/home/home">Home</Link>
                        </li>
                        <li className="header-bt-item">
                            <Link to="/home/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header