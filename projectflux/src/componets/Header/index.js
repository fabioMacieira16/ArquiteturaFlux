import React from "react";
import { Link } from "react-router-dom";

import { MdShoppingBasket } from "react-icons/md";

import { Contaniner, Cart } from './styles';
import logo from '../../asserts/images/logo.svg';

export default function Header() {
    return (
        
        <Contaniner >
            <Link to="/">
                <image src={logo} alt="Rocketshoes" />
            </Link>

        <Cart to="/cart">
            <div>
                <strong>My cart</strong>
                <span>tree itens</span>
            </div>
            <MdShoppingBasket size={36} color='#FFF'/>
        </Cart>
        </Contaniner>
    );
}