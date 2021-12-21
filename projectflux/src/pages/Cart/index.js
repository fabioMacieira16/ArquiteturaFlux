import React from "react";
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md'

import { connect } from 'react-redux'

import { Container, ProductTable, Total } from "./styles";

function Cart({ cart }) {
    return (
        <Container>
            <ProductTable>
                <thead>
                    <tr>
                        <th />
                        <th>PRODUTO</th>
                        <th>QTD</th>
                        <th>SUBTOTAL</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {cart.map(product => {
                        <tr>
                            <td>
                                <img
                                    src={product.image}
                                    alt={product.title}
                                     />
                            </td>
                            <td>
                                <strong>Tênis Muito Massa</strong>
                                <span>R$129,90</span>
                            </td>
                            <td>
                                <div>
                                    <button type="button">
                                        <MdRemoveCircleOutline size={20} color="#7150c1" />
                                    </button>
                                    1
                                    <button type="number" readOnly value={1}>
                                        <MdAddCircleOutline size={20} color="#7150c1" />
                                    </button>
                                </div>
                            </td>
                            <td>
                                <strong>R$258,80</strong>
                            </td>
                            <td>
                                <button typeof="button">
                                    <MdDelete size={20} color="#7159c1" />
                                </button>
                            </td>
                        </tr>
                    })};
                </tbody>
            </ProductTable>

            <footer>
                <button type="button">Finalizar pedido</button>

                <Total>
                    <span>TOTAL</span>
                    <strong>R$1920,28</strong>
                </Total>
            </footer>
        </Container>
    );
}

const mapStateToProps = state => ({
    cart: state.cart,
});

export default connect(mapStateToProps)(Cart);