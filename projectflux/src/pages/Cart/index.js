import React from "react";
import { MdRemoveCircleOutline, MdAddCircleOutline } from 'react-icons/md'

import { Container, ProductTable, Total } from "./styles";

export default function Cart() {
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
                    <tr>
                        <td>
                            <img
                                src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel-vermelho-43/06/MBS-0109-006/MBS-0109-006_zoom2.jpg?ts=1639556114&ims=326x"
                                alt="Tênis" />
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
                            <button typeof="button"></button>
                        </td>
                    </tr>
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