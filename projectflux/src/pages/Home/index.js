import React, { Component } from "react";
import { connect } from 'react-redux'
import { MdShoppingBasket } from "react-icons/md";
import { formatPrice } from "../../util/format";
import api from '../../services/api'

import { ProductList } from "./styles";
class Home extends Component {
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

    handleAddProduct = product => {
        const { dispatch } = this.props;

        dispatch({
            type: 'ADD_TO_CART',
            product,
        });
    };

    render() {
        const { products } = this.state;

        return (
            <ProductList>
                {products.map(product => (
                    <li key={products.id}>
                        <img src={product.image} alt={product.title} />
                        <strong>{product.title}</strong>
                        <span>{product.priceFormatted}</span>

                        <button type="button" onClick={() => this.handleAddProduct(product)}
                        >
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

export default connect()(Home);  