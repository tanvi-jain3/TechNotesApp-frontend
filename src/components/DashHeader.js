import React from 'react'

import { Link } from "react-router-dom";

const DashHeader = () =>{

    console.log("DashHeader component rendered");
    const content = (
        <header className="dash-header">
            <div className="dash-header__container">
                <Link to="/dash">
                    <h1 className="dash-header__title">TechNotes</h1>
                </Link>
                <nav className="dash-header__nav">
                    {/* add nav buttons later */}
                </nav>
            </div>
        </header>
    )

    return content

}

export default DashHeader