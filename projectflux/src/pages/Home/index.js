import React, { Component } from "react";
import api from '../../services/api'
import { MdShoppingBasket } from "react-icons/md";
import { formatPrice } from "../../util/format";

import { ProductList } from "./styles";
export default class Home extends Component() {
    state = {
        products: [],
    }

    async componetDidMount() {
        const responser = await api.get('products');

        const data = responser.data.map(product => ({
            ... product,
            priceFormatted: formatPrice(product.price),
        }));

        this.setState({ products: data })
    }

    render() {
        const { products } = this.state;

        return (
            <ProductList>
                {products.map(product => (
                    <li key={products.id}>
                        <img src={product.image} alt={product.title} />
                        <strong>{product.title}</strong>
                        <span>{product.priceFormatted}</span>

                        <button type="button">
                            <div>
                                <MdShoppingBasket size={16} color="#FFF" /> 3
                            </div>

                            <span>ADICIOANAR AO CARRINHO</span>
                        </button>
                    </li>
                ))}
            </ProductList>
        );
    }
}