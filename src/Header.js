import React from 'react';
import "./Header.css";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header" >
            <div className="header_bar">
                <Link to="/" >
                    <img className="app_logo" src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="" />
                </Link>
                <Link to="/product">
                <Button className="login_button">sign in</Button>   
                </Link>
            </div>
        </div>
    )
}

export default Header
