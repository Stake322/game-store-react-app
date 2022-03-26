import React from "react";
import { Link } from "react-router-dom";
import './header.css'
import CartBlock from "../cart-block/cart-block";

const Header = () => {
    return (
        <div className="header">
            <div className="wrapper">
                <Link to='/' className="header__store_title">
                    Game Store
                </Link>
            </div>
            <div className="wrapper header__cart_btn-wrapper">
                <CartBlock />
            </div>
        </div>
    );
}


export default Header;
