import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { MdShoppingBasket } from "react-icons/md";

import { Container, Cart } from './styles';

import logo from '../../asserts/images/logo.svg';

function Header({ cartSize }) {
    return (
        <Container>
            <Link to="/">
                <figure>
                    <img src={logo} alt="RocketShoes" />
                </figure>
            </Link>

            <Cart to="/cart">
                <div>
                    <strong>Meu carrinho</strong>
                    <span>{cartSize} itens</span>
                </div>
                <MdShoppingBasket size={36} color='#FFF' />
            </Cart>
        </Container>
    );
}

export default connect(state => ({
    cartSize: state.cart.length,
}))(Header);