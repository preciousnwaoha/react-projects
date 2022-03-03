import React from "react";

import { NavLink } from "react-router-dom";

import classes from "./MainHeader.module.css"


const MainHeader = () => {
    return <header className={classes.header}>
        <ul>
            <li>
                <NavLink activeClassName={classes.active} to="/welcome">welcome</NavLink>
            </li>
            <li>
                <NavLink activeClassName={classes.active} to="/products">products</NavLink>
            </li>
        </ul>
    </header>
}

export default MainHeader